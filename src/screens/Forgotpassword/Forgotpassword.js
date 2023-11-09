import React, {useState} from 'react';
import {View,Text,StyleSheet ,ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const Forgotpassword = () => {
    const [Username,setUsername] = useState('');
    const navigation=useNavigation();

    const onConfirmPressed = () => {
        navigation.navigate('New password');
    };


    return (
        <ScrollView>
        <View style ={styles.root}>
            <Text style={styles.title}>Reset Your password</Text>


          <CustomInput 
          placeholder="Username"
          value={Username}
          setValue={setUsername}
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

export default Forgotpassword;