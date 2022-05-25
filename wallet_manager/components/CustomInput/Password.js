import React from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Password = ({ value, setValue, placeholder, secureTextEntry }) => {
  const [show, setShow] = React.useState(false);
  const [visible, setVisible] = React.useState(true);
    return (
        <View style={ styles.container }>
            <TextInput 
                value={ value }
                onChangeText={setValue}
                placeholder={placeholder} 
                style={ styles.input }
                secureTextEntry={visible}
            />
            <TouchableOpacity style={styles.btnEye} onPress={
              ()=>{
                setVisible(!visible)
                setShow(!show)
              }
            }>
            <MaterialCommunityIcons
            name={show === false ? 'eye-outline' : 'eye-off-outline'}
            size={24}
            />
            </TouchableOpacity>
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
    btnEye:{
      marginTop: 1,
      position: 'absolute',
      right: 25,
      top: 8
  }
})

export default Password;