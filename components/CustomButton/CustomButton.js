import React from 'react';
import {View, Text, StyleSheet, Pressable } from 'react-native';

const CustomButton = ({onPress, text, type = "PRIMARY"}) => {
    return (
        <Pressable 
            onPress={onPress} 
            style={[styles.container, styles[`container_${type}`]]}>
            <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '70%',
        marginVertical: 10,
        borderRadius: 30,
        alignItems: 'center',
    },

    container_PRIMARY: {
        backgroundColor: '#F7FF56',
    },
    container_TERTIARY: {},

    text: {
        fontWeight: 'bold',
        margin: 12,
        color: '#032D3C',
    },
    text_TERTIARY: {
        color: '#032D3C',
        opacity: 70
    },
})

export default CustomButton