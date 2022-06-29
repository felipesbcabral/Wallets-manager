import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Entypo } from '@expo/vector-icons';

export default function ButtonNew({ focused ,size}){
  return(
    <View style={[styles.container, { backgroundColor: focused ? '#3eccf5' : '#6fdfff' }  ]}>
      <Entypo name="plus" color={ focused ? '#FFF' : '#F8F8F8' } size={size} />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    width: 55,
    height: 55,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
  }
})