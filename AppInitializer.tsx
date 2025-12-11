import { Alert, PermissionsAndroid, Platform, Linking } from 'react-native';
// import CallScreen from './Src/CallScreen';
import InCallManager from 'react-native-incall-manager';
import { AppState } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import messaging from '@react-native-firebase/messaging';
import notifee, { AndroidImportance } from '@notifee/react-native';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { requestPushPermission } from './Src/PushNotification';

import { NavigationContainerRef } from '@react-navigation/native';

const AppInitializer = () => {
    useEffect(() => {
        let appStateListener;

        const setUserOnlineStatus = async (isOnline) => {
            try {
                const storedUserId = await AsyncStorage.getItem('id');
                if (storedUserId) {
                    await firestore().collection('users').doc(storedUserId).update({
                        online: isOnline,
                        lastSeen: firestore.FieldValue.serverTimestamp(),
                    });
                }
            } catch (error) {
                console.error('Failed to update online status:', error);
            }
        };

        const setupAppStateListener = async () => {
            appStateListener = AppState.addEventListener('change', async (nextAppState) => {
                if (nextAppState === 'active') {
                    await setUserOnlineStatus(true);
                } else if (nextAppState === 'background' || nextAppState === 'inactive') {
                    await setUserOnlineStatus(false);
                }
            });

            // Initially mark user as online
            await setUserOnlineStatus(true);
        };

        setupAppStateListener();

        return () => {
            appStateListener?.remove();

            // On unmount, mark user as offline
            setUserOnlineStatus(false);
        };
    }, []);

    useEffect(() => {
        const handleDeepLink = ({ url }) => {
            const match = url.match(/roomId=(.*?)&callType=(.*)/);
            if (match) {
                const [, roomId, callType] = match;
                navigationRef.current?.navigate('Call', { id: roomId, callType });
            }
        };

        Linking.getInitialURL().then(url => {
            if (url) handleDeepLink({ url });
        });

        Linking.addEventListener('url', handleDeepLink);
        return () => Linking.removeAllListeners('url');
    }, []);

    useEffect(() => {
        async function requestNotificationPermission() {
            if (Platform.OS === 'android' && Platform.Version >= 33) {
                const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
                if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
                    console.log('Notification permission denied');
                }
            }
        }

        async function createNotificationChannel() {
            await notifee.createChannel({
                id: 'default',
                name: 'Default Channel',
                importance: AndroidImportance.HIGH,
            });
        }

        requestNotificationPermission();
        // requestPushPermission();
        createNotificationChannel();

        const unsubscribe = messaging().onMessage(async remoteMessage => {
            console.log('📩 Foreground FCM:', remoteMessage);

            const type = remoteMessage.data?.type;

            if (type === 'incoming_call') {
                const { callerName, roomId, callType = 'default' } = remoteMessage.data || {};
                console.log('📞 Incoming call in foreground:', callerName, roomId);
                // InCallManager.startRingtone();
                // await showFullScreenNotification(callerName, roomId);
                // navigationRef.current?.navigate('IncomingCallScreen', { callerName, roomId, callType });
                if (remoteMessage.data?.callType === 'Voice') {
                    navigationRef.current?.navigate('Call', {
                        id: remoteMessage.data?.roomId,
                        isIncomingCall: true,
                        callerId: remoteMessage.data?.callerId,
                        callerName: remoteMessage.data?.callerName,
                        callType: remoteMessage.data?.callType,
                    });
                }
                if (remoteMessage.data?.callType === 'Video') {
                    navigationRef.current?.navigate('Live', {
                        id: remoteMessage.data?.roomId,
                        isIncomingCall: true,
                        callerId: remoteMessage.data?.callerId,
                        callerName: remoteMessage.data?.callerName,
                        callType: remoteMessage.data?.callType,
                    });
                }

            } else {
                await notifee.displayNotification({
                    title: remoteMessage.notification?.title || 'New Message',
                    body: remoteMessage.notification?.body || '',
                    android: {
                        channelId: 'default',
                        smallIcon: 'ic_launcher',
                    },
                });

                const title = remoteMessage.notification?.title || 'Notification';
                const body = remoteMessage.notification?.body || '';
                const currentRoute = navigationRef.current?.getCurrentRoute();
                if (currentRoute?.name !== 'Chat') {
                    Alert.alert(title, body);
                }
            }
        });

        const unsubscribeNotificationOpened = messaging().onNotificationOpenedApp(remoteMessage => {
            console.log('🔔 Notification opened from background:', remoteMessage);

            const type = remoteMessage.data?.type;
            if (type === 'incoming_call') {
                const { callerName, roomId, callType = 'default' } = remoteMessage.data || {};

                if (remoteMessage.data?.callType === 'Voice') {
                    navigationRef.current?.navigate('Call', {
                        id: remoteMessage.data?.roomId,
                        isIncomingCall: true,
                        callerId: remoteMessage.data?.callerId,
                        callerName: remoteMessage.data?.callerName,
                        callType: remoteMessage.data?.callType,
                    });
                }
                if (remoteMessage.data?.callType === 'Video') {
                    navigationRef.current?.navigate('Live', {
                        id: remoteMessage.data?.roomId,
                        isIncomingCall: true,
                        callerId: remoteMessage.data?.callerId,
                        callerName: remoteMessage.data?.callerName,
                        callType: remoteMessage.data?.callType,
                    });
                }
            }
        });

        async function checkInitialNotification() {
            const remoteMessage = await messaging().getInitialNotification();
            if (remoteMessage) {
                console.log(' App launched from killed state notification:', remoteMessage);

                const type = remoteMessage.data?.type;
                if (type === 'incoming_call') {
                    const { callerName, roomId, callType = 'default' } = remoteMessage.data;
                    if (remoteMessage.data?.callType === 'Voice') {
                        navigationRef.current?.navigate('Call', {
                            id: remoteMessage.data?.roomId,
                            isIncomingCall: true,
                            callerId: remoteMessage.data?.callerId,
                            callerName: remoteMessage.data?.callerName,
                            callType: remoteMessage.data?.callType,
                        });
                    }
                    if (remoteMessage.data?.callType === 'Video') {
                        navigationRef.current?.navigate('Live', {
                            id: remoteMessage.data?.roomId,
                            isIncomingCall: true,
                            callerId: remoteMessage.data?.callerId,
                            callerName: remoteMessage.data?.callerName,
                            callType: remoteMessage.data?.callType,
                        });
                    }
                }
            }
        }
        checkInitialNotification();

        messaging().setBackgroundMessageHandler(async remoteMessage => {
            console.log('🌙 Background FCM received:', remoteMessage);
            if (remoteMessage.data?.type === 'incoming_call') {
                InCallManager.startRingtone();
            }
            // playRingtone();
            console.log("Ringtone is playing");

        });

        return () => {
            unsubscribe();
            unsubscribeNotificationOpened();
        };
    }, []);
}

export default AppInitializer;
