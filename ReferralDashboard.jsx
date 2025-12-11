import { useEffect, useState, useContext } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions } from '@react-navigation/native';
import { AuthContext } from "./App"; // Adjust the path



const ReferralDashboard = ({ navigation }) => {
    const { isLoggedIn, setIsLoggedIn, userType, setUserType, hasReferralDashboard, setHasReferralDashboard } = useContext(AuthContext);






    // const Logout = async () => {
    //     try {
    //         // await AsyncStorage.clear();
    //         // await AsyncStorage.removeItem('access_token');
    //         await AsyncStorage.multiRemove([
    //             'access_token',
    //             'user_id',
    //             'user_name',
    //             'user_number',
    //             'user_type'

    //         ]);
    //         setIsLoggedIn(false);
    //         navigation.dispatch(
    //             CommonActions.reset({
    //                 index: 0,
    //                 routes: [{ name: 'Login' }],
    //             })
    //         );
    //     } catch (error) {
    //         console.error('Error during logout:', error);
    //     }
    // };

    const Logout = async () => {
        try {
            await AsyncStorage.multiRemove([
                'access_token',
                'user_id',
                'user_name',
                'user_number',
                'user_type'
            ]);
            setIsLoggedIn(false);

            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: 'Login' }],
                })
            );
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold',color:'black' }}>Welcome to Referral Dashboard</Text>
            <TouchableOpacity style={styles.menuItemEnd} onPress={Logout}>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', textAlign: 'center', marginBottom: 30 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 15 }}>
                        <View style={{ backgroundColor: '#F5EFFF', width: 43, height: 43, borderRadius: 1000, justifyContent: 'center', alignItems: 'center' }}>

                            <Image style={{ width: 22, height: 22 }} source={require('./Components/Images/lagoutP.png')}></Image>
                        </View>

                        <Text style={styles.menuText}>Log Out</Text>
                    </View>
                    <View>
                        <Image style={{ width: 14, height: 16 }} source={require('./Components/Images/ArrowR.png')}></Image>
                    </View>

                </View>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    menuText: {
        fontWeight: '700',
        fontSize: 18,
        color: '#000',
    },
    menuItemEnd: {
        marginHorizontal: 20,


        paddingTop: 30,
        paddingVertical: 30,



    },

})

export default ReferralDashboard
