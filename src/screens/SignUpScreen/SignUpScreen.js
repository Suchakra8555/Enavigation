import React, {useState} from 'react';
import {View,Text,StyleSheet ,ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
    const [username, setUsername] = useState('');
    const [email,setEmail]= useState('');
    const [Password, setPassword] = useState('');
    const[PasswordRepeat,setPasswordRepeat] = useState('');

    const navigation = useNavigation();


    const onRegisterPressed = () => {
        navigation.navigate('Confirm Email');
    };


    const ontermsofusepressed = () => {
        console.warn('terms of policy is prresssed');
    } 

    const onprivacypolicypressed = () => {
        console.warn('privacy policy is presed');
    }


    return (
        <ScrollView>
        <View style ={styles.root}>
            <Text style={styles.title}>Create an account</Text>


          <CustomInput 
          placeholder="Username"
          value={username}
          setValue={setUsername}
          /> 
          <CustomInput 
          placeholder="Email"
          value={email}
          setValue={setEmail}
          /> 
          <CustomInput 
          placeholder="Password"
          value={Password}
          setValue={setPassword}
          secureTextEntry={true}
          />
          <CustomInput 
          placeholder="Repeat Password"
          value={PasswordRepeat}
          setValue={setPasswordRepeat}
          secureTextEntry={true}
          />

          <CustomButton text="Register" onPress={onRegisterPressed}/>

          <Text style={styles.text}>
            By registering, you confirm that you accept our{" "}  
            <Text style={styles.link} onPress={ontermsofusepressed}>terms of use</Text>and{" "}
            <Text style={styles.link} onPress={onprivacypolicypressed}>privacy policy</Text> 
          </Text>


        </View>
        </ScrollView>    
      
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding:20,
    },
    title: {
        fontSize:24,
        fontWeight:"bold",
        color:"#051C60",
        margin: 10,
    },
    text:{
        color: 'gray',
        marginVertical:10,
    },
    link:{
        color:'#FDB075',
    },
})

export default SignUpScreen;