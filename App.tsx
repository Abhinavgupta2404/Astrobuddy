/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useEffect, useState, createContext, useContext } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Start from './Start';
import Otpsuccess from './Components/Otpsuccess';
import Home from './Components/Home';
import Home1 from './Components/Home1';
import AstrolegerList from './Components/OldAstrolegerList';
import AstrolegersList from './Components/AstrologersList';
import Register from './Components/Register';
import RegisterDetail from './Components/RegistserDetail';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Regpassword from './Components/Regpassword';
import DailyHoroscope from './Components/Horoscope/DailyHoroscope';
import Kundali from './Components/Kundali/Kundali';
import KundaliM from './Components/Kundali/KundaliMatch';
import Call from './Components/Connect/Call';
import VidCall from './Components/Connect/VidCall';
import Login from './Components/Login';
import Otp from './Components/Otp';
import RegDetails from './Components/RegDetails';
import Welcome1 from './Components/Welcome Pages/Welcome1';
import AstroWp from './Components/Welcome Pages/AstroWP';
import PalmWp from './Components/Welcome Pages/PalmWP';
import MatchWP from './Components/Welcome Pages/MatchWP';
import CreateWP from './Components/Welcome Pages/CreateWP';
import ZodiacSign from './Components/Horoscope/ZodiacSign';
import Chats from './Components/Chat/Chats';
import Chatting from './Components/Chat/Chatting';
import Scroll from './Components/Horoscope/Scroll';
import ProgressBar from './Components/Horoscope/ProgressBar';
import Services from './Components/Horoscope/Services';
import LanguageSettingsPrompt from './Components/Language';
import Api from './Components/Api';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



const LoaderContext = createContext();
export const useLoader = () => useContext(LoaderContext);

const GlobalLoader = ({ isAnyWhereLoading }) => {
  if (!isAnyWhereLoading) return null;

  return (
    <View style={[StyleSheet.absoluteFillObject, {
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
      elevation: 9999,

    }]}>
      <ActivityIndicator size="large" color="#75429C" />
    </View>
  );
};




export const AuthContext = createContext();
// const NavigationContext = createContext();



import AstroChats from './Components/Astrologer/Connect/AstroChats';
import AstroChatting from './Components/Astrologer/Connect/AstroChatting';
import KundaliDetails from './Components/Kundali/KundaliDetails';
import Planetary from './Components/Kundali/Planetary';
import Charts from './Components/Kundali/Charts';
import GeneralPre from './Components/Kundali/GeneralPre';
import Dasha from './Components/Kundali/Dasha';
import Dosha from './Components/Kundali/Dosha';
import Extended from './Components/Kundali/Extended';
import Password from './Components/Password';
import BotNav from './Components/BotNav';
import BottomNavBar from './Components/BottomNavBar';
import KundaliApiNavig from './Components/KundaliApiNavig';
import AstroChattingApi from './Components/Kundali/AstroChattingApi';
import UserSelection from './Components/Kundali/UserSelection';
import AudioScreen from './Components/Connect/AudioScreen';
import VidCallScreen from './Components/Connect/VidCallScreen';
import TermsNdCondition from './TermsNdCondition';
import Privacy from './Privacy';
import KundaliMatch from './Components/KundaliMatch/KundaliMatch';
import Matched from './Components/KundaliMatch/Matched';
import NumeroForm from './Components/Numerology/NumeroForm';
import Numerology from './Components/Numerology/Numerology';
import PanchangForm from './Components/Panchang/PanchangForm';
import PanchangDetails from './Components/Panchang/PanchangDetails';
import YogaForm from './Components/Yoga/YogaForm';
import Yoga from './Components/Yoga/Yoga';
import Live from './Components/Connect/Live';
import AstroDashboard from './Components/Astrologer/AstroDashboard';
import AstroBotNav from './Components/Astrologer/AstroBotNav';
import AppointmentStatus from './Components/Connect/AppointmentStatus';
import Wallet from './Components/Wallet';
import Profile from './Components/Profile';
import AstroBuddyDetails from './Components/AstroBuddyDetails';
import Premium from './Components/Premium Kundali/Premium';
import Palmist from './Components/Palm Reading/Palmist';
import KeyboardProvider from './Components/Context/KeyboardProvider';
import { TabProvider } from './Components/Context/TabContext';
import Orientation from 'react-native-orientation-locker';
import LoginWithOtp from './Components/LoginWithOtp';
import LoginOtp from './Components/LoginOtp';
import Payment from './Components/Payments/Payment';
import CheckChat from './Components/Chat/CheckChat';
import Connect from './Components/Astrologer/Connect/Connect';
import AstroVidCall from './Components/Astrologer/Connect/AstroVidCall';


import { Alert, PermissionsAndroid, Platform, Linking } from 'react-native';
import InCallManager from 'react-native-incall-manager';
import { AppState } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import messaging from '@react-native-firebase/messaging';
import notifee, { AndroidImportance } from '@notifee/react-native';
import { navigationRef } from './Components/NavigationRef';
import AstroAudio from './Components/Astrologer/Connect/AstroAudio';
import ProfileUpdate from './Components/ProfileUpdate';
import ReferralDashboard from './ReferralDashboard';
import Chatnow from './Components/Chat/CheckChat';
import Test from './Components/Test';
import AudVidAppointment from './Components/Connect/AudVidAppointment';








// function Section({ children, title }: SectionProps): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }
const SplashScreen = () => (
  <>
    <Welcome1 />
    <ActivityIndicator size="large" color="#fff" />
  </>
);

const App = ({ navigation }) => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(true);
  const [loading, setLoading] = useState(true);
  const [isAnyWhereLoading, setIsAnyWhereLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState(null);
  const [userType, setUserType] = useState();
  const [hasReferralDashboard, setHasReferralDashboard] = useState(false);



  const showLoader = () => setIsAnyWhereLoading(true);
  const hideLoader = () => setIsAnyWhereLoading(false);

  const [currentRoute, setCurrentRoute] = useState(null);

  const hiddenTabs = ['AstroChatting', 'AstroVid', 'AstroCall', 'VidCall', 'Chatting', 'AudioCall', 'CheckChat'];
  const hideNav = currentRoute && hiddenTabs.includes(currentRoute.name);





  const requestPushPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('✅ Push notification permission granted.');
    } else {
      Alert.alert('Permission denied', 'Enable push notifications from settings.');
    }
  };

  useEffect(() => {
    let appStateListener;

    const setUserOnlineStatus = async (isOnline) => {
      try {
        const storedUserId = await AsyncStorage.getItem('user_id');
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

      await setUserOnlineStatus(true);
    };

    setupAppStateListener();

    return () => {
      appStateListener?.remove();


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
    requestPushPermission();
    createNotificationChannel();


    const unsubscribe = messaging().onMessage(async remoteMessage => {


      console.log('📩 Foreground FCM:', remoteMessage);

      const type = remoteMessage.data?.type;

      if (type === 'incoming_call') {
        const { callerName, roomId, callType = 'default' } = remoteMessage.data || {};
        console.log("Response RemoteMessage data ", remoteMessage.data);

        console.log('📞 Incoming call in foreground:', callerName, roomId, callType);
        // InCallManager.startRingtone();
        // await showFullScreenNotification(callerName, roomId);
        // navigationRef.current?.navigate('IncomingCallScreen', { callerName, roomId, callType });
        if (remoteMessage.data?.callType === 'Voice') {
          const screen = userType === 'user' ? 'AudioCall' : 'AstroCall';



          navigationRef.current?.navigate(screen, {
            id: remoteMessage.data?.roomId,
            isIncomingCall: true,
            callerId: remoteMessage.data?.callerId,
            callerName: remoteMessage.data?.callerName,
            callType: remoteMessage.data?.callType,
          });
        }
        if (remoteMessage.data?.callType === 'Video') {
          const screen = userType === 'user' ? 'VidCall' : 'AstroVid';

          navigationRef.current?.navigate(screen, {
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

    messaging().onMessage(async remoteMessage => {
      console.log('📩 Foreground FCM:', JSON.stringify(remoteMessage, null, 2));

      if (remoteMessage?.data?.callType === 'Video') {
        const screen = userType === 'user' ? 'VidCall' : 'AstroVid';

        console.log('✅ Navigating to VidCall with:', remoteMessage.data);

        navigationRef.current?.navigate(screen, {
          id: remoteMessage.data?.roomId,
          isIncomingCall: true,
          callerId: remoteMessage.data?.callerId,
          callerName: remoteMessage.data?.callerName,
          callType: remoteMessage.data?.callType,
        });
      }
    });


    const unsubscribeNotificationOpened = messaging().onNotificationOpenedApp(remoteMessage => {
      console.log('🔔 Notification opened from background:', remoteMessage);
      console.log('🔔 Notification opened from background:', JSON.stringify(remoteMessage, null, 2));


      const type = remoteMessage.data?.type;
      if (type === 'incoming_call') {
        const { callerName, roomId, callType = 'default' } = remoteMessage.data || {};

        if (remoteMessage.data?.callType === 'Voice') {
          const screen = userType === 'user' ? 'AudioCall' : 'AstroCall';

          navigationRef.current?.navigate(screen, {
            id: remoteMessage.data?.roomId,
            isIncomingCall: true,
            callerId: remoteMessage.data?.callerId,
            callerName: remoteMessage.data?.callerName,
            callType: remoteMessage.data?.callType,
          });
        }
        if (remoteMessage.data?.callType === 'Video') {
          const screen = userType === 'user' ? 'VidCall' : 'AstroVid';

          navigationRef.current?.navigate(screen, {
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
            const screen = userType === 'user' ? 'AudioCall' : 'AstroCall';
            navigationRef.current?.navigate(screen, {
              id: remoteMessage.data?.roomId,
              isIncomingCall: true,
              callerId: remoteMessage.data?.callerId,
              callerName: remoteMessage.data?.callerName,
              callType: remoteMessage.data?.callType,
            });
          }
          if (remoteMessage.data?.callType === 'Video') {
            const screen = userType === 'user' ? 'VidCall' : 'AstroVidCall';

            navigationRef.current?.navigate(screen, {
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

      console.log("remote Message:", remoteMessage.data);
    });

    return () => {
      unsubscribe();
      unsubscribeNotificationOpened();
    };
  }, []);




  useEffect(() => {
    Orientation.lockToPortrait();
    return () => {
      Orientation.unlockAllOrientations();
    }
  }, []);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const isFirstLaunchStatus = await AsyncStorage.getItem('isFirstLaunch');
        const token = await AsyncStorage.getItem('access_token');
        const storedUser = await AsyncStorage.getItem('user_type');
        // await AsyncStorage.multiRemove([
        //   'access_token',
        //   'user_id',
        //   'user_name',
        //   'user_number',
        //   'user_type'
        // ]);
        console.log("Stored User Type:", storedUser)

        if (isFirstLaunchStatus === null) {
          setIsFirstLaunch(true);
          await AsyncStorage.setItem('isFirstLaunch', 'false');
        } else {
          setIsFirstLaunch(false);
        }
        // if (storedUser) {
        //   setUserType(storedUser);

        // }
        setUserType(storedUser || null);
        setIsLoggedIn(!!token);


      } catch (error) {
        console.error('Error checking auth status:', error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 500)
      }
    };
    checkAuthStatus();
    //  }, [isLoggedIn]);
  }, []);



  if (loading) {
    return <SplashScreen />;
  }
  // const AstrologerNavigator = ({ setIsLoggedIn }) => (
  //   <Stack.Navigator screenOptions={{ headerShown: false }}>
  //     <Stack.Screen name="AstroDashboard" component={AstroDashboard} />
  //     <Stack.Screen name="AstroChats" component={AstroChats} />
  //     <Stack.Screen name="AstroChatting" component={AstroChatting} />
  //   </Stack.Navigator>
  // );

  // const UserNavigator = ({ setIsLoggedIn }) => (
  //   <Stack.Navigator
  //     screenOptions={{ headerShown: false }}>
  //     <Stack.Screen name="Home">
  //       {props => <Home {...props} setIsLoggedIn={setIsLoggedIn} />}
  //     </Stack.Screen>
  //     <Stack.Screen name="Horoscope" component={DailyHoroscope} />
  //     <Stack.Screen name="Chats" component={Chats} />
  //     <Stack.Screen name="Yoga" component={Yoga} />
  //   </Stack.Navigator>
  // );

  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };



  return (

    <KeyboardProvider>
      <TabProvider  >
        <NavigationContainer ref={navigationRef}
          onReady={() => {
            setCurrentRoute(navigationRef.current?.getCurrentRoute());
          }}
          onStateChange={() => {
            setCurrentRoute(navigationRef.current?.getCurrentRoute());
          }} >
          <LoaderContext.Provider value={{ isAnyWhereLoading, showLoader, hideLoader }}>
            <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, userType, setUserType, hasReferralDashboard, setHasReferralDashboard }}>
              {/* <Tab.Navigator
          screenOptions={{ headerShown: false }}
          tabBar={(props) =>
            userType === "user" ? (
              <BotNav {...props} userType={userType} />
            ) : (
              <AstroBotNav {...props} userType={userType} />
            )
          }

        > */}
              <GlobalLoader isAnyWhereLoading={isAnyWhereLoading} />
              <Stack.Navigator screenOptions={{ headerShown: false }}>
                {isFirstLaunch && !isLoggedIn ? (
                  <>
                    <Stack.Screen name="Welcome1" component={AstroWp} />
                    <Stack.Screen name='Welcome2' component={PalmWp} />
                    <Stack.Screen name='Welcome3' component={CreateWP} />
                    <Stack.Screen name='Welcome4' component={MatchWP} />
                   
                  </>

                ) : isLoggedIn ?
                  (
                    hasReferralDashboard ? (
                      <>
                        <Stack.Screen name="ReferralDashboard" component={ReferralDashboard} />
                      </>
                    ) : userType === 'user' ? (

                      // userType === 'user' ? (
                      <>
                        <Stack.Screen name="ASTROBUDDY">
                          {props => <Home {...props} setIsLoggedIn={setIsLoggedIn} />}
                        </Stack.Screen>
                        <Stack.Screen name="BottomNavBar" component={BottomNavBar} />

                      </>
                    ) :
                      userType === 'astrologer' ? (
                        <>
                          <Stack.Screen name="AstroHome">
                            {props => <AstroDashboard {...props} setIsLoggedIn={setIsLoggedIn} />}
                          </Stack.Screen>
                          <Stack.Screen name="BottomNavBar" component={BottomNavBar} />

                        </>
                      ) : null
                    // (
                    //   <Stack.Screen name="Login">
                    //     {props => <Login {...props} setIsLoggedIn={setIsLoggedIn} />}
                    //   </Stack.Screen>
                    // )
                  )
                  // : (
                  //   <Stack.Screen name="Login">
                  //     {props => <Login {...props} setIsLoggedIn={setIsLoggedIn} />}
                  //   </Stack.Screen>
                  // )
                  : null}
                <Stack.Screen name="Login">
                  {props => <Login {...props} setIsLoggedIn={setIsLoggedIn} />}
                </Stack.Screen>
                <Stack.Screen name='Zodiac' component={ZodiacSign} />
                <Stack.Screen name='DailyHoroscope' component={DailyHoroscope} />
                <Stack.Screen name='AstrologersList' component={AstrolegersList} />
                <Stack.Screen name='Services' component={Services} />
                <Stack.Screen name='Kundali' component={Kundali} />
                <Stack.Screen name='kundaliM' component={KundaliM} />
                <Stack.Screen name='Match' component={KundaliMatch} />
                <Stack.Screen name='Matched' component={Matched} />
                <Stack.Screen name='Numerology' component={Numerology} />
                <Stack.Screen name='PanchangForm' component={PanchangForm} />
                <Stack.Screen name='Panchang' component={PanchangDetails} />
                <Stack.Screen name='YogaForm' component={YogaForm} />
                <Stack.Screen name='Yoga' component={Yoga} />
                <Stack.Screen name='KundaliNavigator' component={KundaliApiNavig} />
                <Stack.Screen name='Numero' component={NumeroForm} />
                <Stack.Screen name='Wallet' component={Wallet} />
                <Stack.Screen name='Profile' component={Profile} />
                <Stack.Screen name='Buddy' component={AstroBuddyDetails} />
                <Stack.Screen name='Privacy' component={Privacy} />
                <Stack.Screen name='Terms' component={TermsNdCondition} />
                <Stack.Screen name='Welcome' component={Welcome1} />
                <Stack.Screen name='Register' component={Register} />
                <Stack.Screen name='kundaliD' component={KundaliDetails} />
                <Stack.Screen name='Planetary' component={Planetary} />
                <Stack.Screen name='GeneralPre' component={GeneralPre} />
                <Stack.Screen name='Dasha' component={Dasha} />
                <Stack.Screen name='Dosha' component={Dosha} />
                <Stack.Screen name='Extended' component={Extended} />
                <Stack.Screen name='OtpSuccess' component={Otpsuccess} />
                <Stack.Screen name='Password' component={Password} />
                <Stack.Screen name='Detail' component={RegisterDetail} />
                <Stack.Screen name='Details' component={RegDetails} />
                <Stack.Screen name='Otp' component={Otp} />
                <Stack.Screen name='AppointStatus' component={AppointmentStatus} />
                <Stack.Screen name='AudioCall' component={Call} options={{ headerShown: false }} />
                <Stack.Screen name='AudioScreen' component={AudioScreen} options={{ headerShown: false }} />
                <Stack.Screen name='Premium' component={Premium} />
                <Stack.Screen name='Palmist' component={Palmist} />
                <Stack.Screen name='Charts' component={Charts} />
                <Stack.Screen name='LoginWithOtp' component={LoginWithOtp} />
                <Stack.Screen name='LoginOtp' component={LoginOtp} />
                <Stack.Screen name='Payment' component={Payment} />
                <Stack.Screen name='VidCall' component={VidCall} />
                <Stack.Screen name='VidScreen' component={VidCallScreen} options={{ headerShown: false }} />
                {/* <Stack.Screen name='ProfileUpdate' component={ProfileUpdate}  /> */}

                <Stack.Screen name='CheckChat' component={Chatnow} />
                <Stack.Screen name='Test' component={Test} />
                <Stack.Screen name='AudVidApp' component={AudVidAppointment} />
                <Stack.Screen name='Chatting' component={Chatting} options={{ headerShown: false }} />
                {/* 
            <Stack.Screen name='Scroll' component={Scroll} />
            <Stack.Screen name='Chats' component={Chats} />
            <Stack.Screen name='LanguageSettingsPrompt' component={LanguageSettingsPrompt} />
            <Stack.Screen name='Api' component={Api} />
            <Stack.Screen name='AstroChat' component={AstroChattingApi} />
            <Stack.Screen name='UserSelection' component={UserSelection} />*/}
                <Stack.Screen name='Live' component={Live} />
                {/******************************************** Astrologers Routs ******************************************************/}


                <Stack.Screen name='AstroBotNav' component={AstroBotNav} />
                <Stack.Screen name='AstroChats' component={AstroChats} />
                <Stack.Screen name='AstroChatting' component={AstroChatting} />
                <Stack.Screen name='Connect' component={Connect} />
                <Stack.Screen name='AstroVid' component={AstroVidCall} />
                <Stack.Screen name='AstroCall' component={AstroAudio} />


                {/* <Stack.Screen name='AstroHome' component={AstroDashboard} /> */}
                {/* <Stack.Screen name='AstroChats' component={AstroChats} />
           <Stack.Screen name='AstroChatting' component={AstroChatting} /> */}
              </Stack.Navigator>

              {isLoggedIn && !hideNav && (userType === "user" ? <BotNav navigation={navigation} /> : <AstroBotNav navigation={navigation} />)}



              {/* {isLoggedIn && (userType === "user" ? <BottomNavBar navigation={navigation} /> : <AstroBotNav navigation={navigation} />)} */}
              {/* {isLoggedIn && userType === "user" && ( */}
              {/* <Stack.Screen name="UserTabs">
            {props => <BottomNavBar {...props} setIsLoggedIn={setIsLoggedIn} />}
          </Stack.Screen> */}
              {/*  )} */}



              {/* </Tab.Navigator> */}
            </AuthContext.Provider>
          </LoaderContext.Provider>
        </NavigationContainer>
      </TabProvider>
    </KeyboardProvider>
  );
}


export default App;

// import React from 'react'
// import AppointmentStatus from './Components/Connect/AppointmentStatus'

// const App = () => {
//   return (
//     <NavigationContainer>

//       <AppointmentStatus />
//     </NavigationContainer>

//   )
// }

// export default App
