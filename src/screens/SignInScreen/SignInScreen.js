import React, {useState} from 'react';
import {View,Text,Image,StyleSheet, useWindowDimensions,ScrollView} from 'react-native';
import Logo from '../../../assests/Images/museum_logo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [Password, setPassword] = useState('');

    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const onSignInPressed = () => {
        
        // validate user


        navigation.navigate('HomeScreen');
    };

    const onForgotPasswordPressed = () => {
        
        navigation.navigate('Forgotpassword');
    };

    const onSignInGoogle = () => {
        console.warn('Google');

    };

    const newone = () => {
        
        navigation.navigate('SignUp');
        
    };



    return (
        <ScrollView>
        <View style ={styles.root}>
            <Image
              source={Logo}
              style={[styles.logo,{height: height * 0.3}]} 
              resizeMode="contain"
            />


          <CustomInput 
          placeholder="Username"
          value={username}
          setValue={setUsername}
          /> 
          <CustomInput 
          placeholder="Password"
          value={Password}
          setValue={setPassword}
          secureTextEntry={true}
          />

          <CustomButton text="Sign In" onPress={onSignInPressed}/>

          <CustomButton 
          text="Forgot password?" 
          onPress={onForgotPasswordPressed} 
          type="TERTIARY" 
          />

          <CustomButton
          text="Sign In With Google"
          onPress={onSignInGoogle}
          fgcolor="white"
          bgcolor="#DD4D44"
          />

          <CustomButton 
          text="Dont have an account? Create New one" 
          onPress={newone} 
          type="TERTIARY" 
          />

        </View>
        </ScrollView>    
      
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding:20,
    },
    logo: {
        width: '90%',
        maxWidth:200,
        maxHeight: 400,
    }
});


export default SignInScreen;
