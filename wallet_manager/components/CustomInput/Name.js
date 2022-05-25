import React from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Name = ({ value, setValue, placeholder, secureTextEntry }) => {
  const [show, setShow] = React.useState(false);
  const [visible, setVisible] = React.useState(true);
    return (
        <View style={ styles.container }>
            <TextInput 
                value={ value }
                onChangeText={setValue}
                placeholder={placeholder} 
                style={ styles.input }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#032D3C',
        width: 300,
        marginBottom: 8,
    },
    input: {
    },
})

export default Name;


