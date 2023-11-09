import React, {useState} from 'react';
import {View,Text,StyleSheet ,ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';



const Confirmemailscreen = () => {
    const [code,setcode] = useState('');

    const navigation=useNavigation();

    const onConfirmPressed = () => {
        navigation.navigate('HomeScreen');
    };
    const rcode = () => {
        console.warn('resend code pressed');
    };
    const bsignin = () => {
        navigation.navigate('SignIn');
    };

    return (
        <ScrollView>
        <View style ={styles.root}>
            <Text style={styles.title}>Confirm Your Email</Text>
          <CustomInput 
          placeholder="Enter your confirmation code"
          value={code}
          setValue={setcode}
          /> 

          <CustomButton 
          text="Confirm" 
          onPress={onConfirmPressed}
          />


         <CustomButton 
          text="Back to sign in screen" 
          onPress={bsignin}
          type='TERITARY'
          />
         <CustomButton 
          text="RESEND CODE" 
          onPress={rcode}
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

export default Confirmemailscreen;