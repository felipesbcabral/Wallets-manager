import React, { useState } from 'react';
import { Text, View} from 'react-native';

export default function Callendar({ route }) {
  return (
    <View>
      <Text> Olá: {route.params?.nome}</Text>
    </View>
  );
}