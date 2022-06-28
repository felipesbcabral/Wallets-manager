import React, { useContext, useState } from 'react';
import * as firebase from 'firebase';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  buttonClickedHandler,
  IconButton,
  Colors,
} from 'react-native';
import { Checkbox } from 'react-native-paper';
import DatePicker from 'react-native-datepicker';
import { RadioButton } from 'react-native-paper';
import ChangeTypeBillingButton from '../components/ChangeTypeBillingButton';
import Icon from 'react-native-vector-icons/AntDesign';

import { UsuarioContext } from '../contexts/UsuarioContext';

export default function AddValor({ navigation }) {
  const [logado, setLogado] = useContext(UsuarioContext);
  const [checked1, setChecked1] = React.useState(false);
  const [checked, setChecked] = React.useState(false);
  const [date, setDate] = useState('13-05-2022');
  const [descicao, setDescicao] = useState('');
  const [valor, setValor] = useState('');

  const signIn = () => navigation.navigate('Home');
  return (
    <SafeAreaView style={styles.conteudo}>
      <View>
        <View style={styles.sectionStyle}>
          <Icon
            style={styles.iconBack}
            name="arrowleft"
            size={25}
            onPress={signIn}
          />

          <Text style={styles.headerText}>Adicionar Valores</Text>
          <View style={{ paddingHorizontal: 11, paddingTop: 100 }}></View>
        </View>
        <ChangeTypeBillingButton />
        <View style={{ paddingHorizontal: 11 }}>
          <TextInput
            value={descicao}
            onChangeText={(text) => setDescicao(text)}
            placeholder="Descrição"
            style={styles.desc}
            keyboardType="name-phone-pad"
          />
        </View>
        <View style={{ paddingHorizontal: 11 }}>
          <TextInput
            value={valor}
            onChangeText={(text) => setValor(text)}
            placeholder="Valor"
            style={styles.val}
            keyboardType="number-pad"
          />
        </View>
      </View>
      <View style={{ paddingTop: 30 }}>
        <DatePicker
          style={styles.datePickerStyle}
          date={date}
          mode="date"
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
              marginLeft: 30,
            },
            dateInput: {
              marginLeft: 70,
            },
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
        />
        <View style={{ alignItems: 'center' }}>
          <Text style={{ color: 'black', fontSize: 20, paddingTop: 30 }}>
            {' '}
            Repetir todo mês?
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            paddingTop: 30,
          }}>
          <RadioButton
            value="first"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('first')}
            color="#4BE3AC"
          />

          <RadioButton
            value="second"
            status={checked === 'second' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('second')}
            color="#4BE3AC"
          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <Text style={{ color: 'Black', fontSize: 20 }}> Sim </Text>
          <Text style={{ color: 'Black', fontSize: 20 }}> Não </Text>
        </View>
        <View style={styles.screen}>
          <Button
            title="Salvar"
            onPress={() => {
              firebase
                .firestore()
                .collection('contas')
                .add({ descricao: descicao, valor: valor })
                .then((docRef) => navigation.navigate('Home'));
            }}
            style={styles.roundButton1}>
            <Text style={styles.textButton}>SALVAR</Text>
          </Button>
          <View></View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  conteudo: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  text: {
    fontSize: 20,
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
    textAlign: 'center',
  },

  datePickerStyle: {
    width: 200,
    marginTop: 0,
    marginLeft: 70,
    padding: 8,
  },
  desc: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingBottom: 15,
    paddingTop: 15,
  },

  val: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingBottom: 15,
    paddingTop: 15,
  },

  screen: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 100,
    alignItems: 'center',
  },
  textButton: {
    color: 'black',
    fontSize: 20,
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
  iconBack: {
    marginLeft: 10,
  },
  iconPoints: {
    marginRight: 10,
  },
});
