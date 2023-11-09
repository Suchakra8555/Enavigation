import React from "react";
import { Text } from 'react-native';
import { StyleSheet } from "react-native";
import { Pressable } from "react-native";
// import { Colors } from "react-native/Libraries/NewAppScreen";

const CustomButton = ({ onPress, text, type="PRIMARY",bgcolor,fgcolor}) => {
    return (
        <Pressable onPress={onPress} 
        style={[
            styles.container, 
            styles[`container_${type}`],
            bgcolor ? {backgroundColor:bgcolor} : {},
            ]}>
            <Text 
            style={[
                styles.text,
                styles[`text_${type}`],
                fgcolor  ? {color:fgcolor} : {},
                ]}
                >{text}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {

        width: '100%',

        padding: 15,
        marginVertical: 5,

        alignItems: 'center',
        borderRadius: 5,
    },

    container_PRIMARY:{
        backgroundColor: '#3B71F3',
    },

    text_PRIMARY:{
        fontWeight:'bold',
        color:'white',
    },


    container_TERITARY: {},
    text_TERITARY:{
        color: 'grey',
        marginVertical: 20,
    },
});

export default CustomButton;
