import React, {useState} from 'react';
import {View,Text,StyleSheet ,ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const Newpassword = () => {
    const [Code,setCode] = useState('');
    const [Newpassword,setNewpassword] = useState('');
     const navigation=useNavigation();

    const onConfirmPressed = () => {
        navigation.navigate('SignIn');
    };



    return (
        <ScrollView>
        <View style ={styles.root}>
            <Text style={styles.title}>Reset Your password</Text>

          <Text>Enter the code recived in Email*</Text>
          <CustomInput 
          placeholder="Code"
          value={Code}
          setValue={setCode}
          /> 
          <Text>Enter New password*</Text>
          <CustomInput 
          placeholder="Newpassword"
          value={Newpassword}
          setValue={setNewpassword}
          /> 
          <CustomButton 
          text="Confirm" 
          onPress={onConfirmPressed}
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

export default Newpassword;