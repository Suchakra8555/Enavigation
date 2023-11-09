import React from "react";
import { View,Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signinscreen from '../screens/SignInScreen/SignInScreen';
import SignUpscreen from '../screens/SignUpScreen/SignUpScreen';
import Confirmemailscreen from '../screens/Confirmemailscreen';
import Forgotpassword from '../screens/Forgotpassword';
import Newpassword from '../screens/Newpassword';
import HomeScreen from '../screens/HomeScreen';


const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="SignIn" component={Signinscreen} /> 
                <Stack.Screen name="SignUp" component={SignUpscreen} /> 
                <Stack.Screen name="Confirm Email" component={Confirmemailscreen} /> 
                <Stack.Screen name="Forgotpassword" component={Forgotpassword} /> 
                <Stack.Screen name="New password" component={Newpassword} /> 
                <Stack.Screen name="HomeScreen" component={HomeScreen}/> 
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;