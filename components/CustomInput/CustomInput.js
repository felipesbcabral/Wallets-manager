import React from 'react';
import {View, Text, TextInput, StyleSheet } from 'react-native';

const CustomInput = ({ value, setValue, placeholder, secureTextEntry }) => {
    return (
        <View style={ styles.container }>
            <TextInput 
                value={ value }
                onChangeText={setValue}
                placeholder={placeholder} 
                style={ styles.input }
                secureTextEntry={secureTextEntry}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#032D3C',
        width: 300,
        marginBottom: 8,
    },
    input: {
    },
})

export default CustomInput