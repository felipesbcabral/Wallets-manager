import React, { useState } from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import { Button,  StyleSheet, Text, TextInput, View, TouchableOpacity, buttonClickedHandler, IconButton, Colors  } from 'react-native';
import { Checkbox } from 'react-native-paper';
import DatePicker from 'react-native-datepicker';
import { RadioButton } from 'react-native-paper';
import Edit from '../components/Edit';
import Icon from 'react-native-vector-icons/AntDesign';
export default function EditValor(props: LoginScreenProps) {
  const [checked1, setChecked1] = React.useState(false);
  const [checked, setChecked] = React.useState(false);
  const [date, setDate] = useState('13-05-2022');
  const signIn = () => props.navigation.navigate("Home") 
  return (
 <SafeAreaView style={styles.conteudo}>
  <View>
   <View style={styles.sectionStyle}>
   <Icon style={styles.iconBack} name= "arrowleft"  size={25} onPress={signIn}/>
  
    <Text style={styles.headerText}>
      Editar ou Excluir Valores
      </Text>
       <View style={{paddingHorizontal: 11, paddingTop:70}}>
      </View>
      </View>
      <Edit/>
      <View style={{paddingHorizontal: 11, paddingTop:70}}>
      <Text style={styles.text}> Descrição </Text>
        <TextInput  placeholder='Descrição'  style={styles.desc}
          keyboardType="name-phone-pad"
        />     
        
      </View>
      <View style={{paddingHorizontal: 11, paddingTop:60}}>
      <Text style={styles.text}> Valor </Text>
              <TextInput  placeholder='Valor'  style={styles.val}
          keyboardType="number-pad"
        />
        </View>
    </View>
      <View style={{paddingTop:80}}>
        <DatePicker
          style={styles.datePickerStyle}
          date={date} //initial date from state
          mode="date" //The enum of date, datetime and time
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="01-01-2020"
          maxDate="20-05-2030"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 30 ,
            },
            dateInput: {
              marginLeft: 70,
            },
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
          
          
        />
  
             <View style={styles.screen}>
      <TouchableOpacity
        onPress={signIn}
        style={styles.roundButton1}>
        <Text style={styles.textButton}>SALVAR</Text>
      </TouchableOpacity>
      </View> 
      </View>
      </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  conteudo: {
    flex:1,
    backgroundColor: '#E5E5E5'
  },
  text:{
    fontSize: 20
  },
   sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#4BE3AC',
    height: 56,
  },

  headerText: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center'
  },

  datePickerStyle: {
    width: 200,
    marginTop: 0,
    marginLeft: 70,
    padding: 8,

  },
  desc:{padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingBottom: 15,
    paddingTop: 15,
    },

  val:{padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingBottom: 15,
    paddingTop:15,
    },

  screen: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 30,
    alignItems: 'center',
  },
  textButton: {
    color: "black",
    fontSize:20
  },
  roundButton1: {
    width: 250,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#C4C4C4',
  },
  iconBack:{
    marginLeft:10
  },

});