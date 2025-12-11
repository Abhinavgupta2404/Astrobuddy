/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import messaging from '@react-native-firebase/messaging';
import InCallManager from 'react-native-incall-manager';
// Triggered when app is killed or in background
messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Headless FCM:', remoteMessage.data);

    if (remoteMessage.data.type === 'incoming_call') {
        console.log('Incoming call:', remoteMessage.data);
        InCallManager.startRingtone('default');
    }
});

AppRegistry.registerComponent(appName, () => App);


/**
 * @format
 */



