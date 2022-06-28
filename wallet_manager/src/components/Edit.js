import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button,TouchableOpacity} from 'react-native';

export default class teste extends Component {
  state={
    backgroundColor: '#4BE3AC',
    backgroundColor2: '#C4C4C4',
    pressed: true,
  };

  changeColor(){
    if(!this.state.pressed){
       this.setState({ pressed: true,backgroundColor: '#4BE3AC', backgroundColor2: '#C4C4C4'});
    } else {
      this.setState({ pressed: false, backgroundColor: '#C4C4C4' ,backgroundColor2: '#4BE3AC'});
    }
  }
  render() {
    return (
      <View style={styles.container}>
          <TouchableOpacity
              style={{backgroundColor:this.state.backgroundColor, width: 150,
              height: 40,
               justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,}}
              onPress={()=>this.changeColor()}
                >
            <Text style={styles.text}>Editar</Text>
          </TouchableOpacity>

          <TouchableOpacity
              style={{backgroundColor:this.state.backgroundColor2, width: 150,
              height: 40,
               justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,}}
              onPress={()=>this.changeColor()}
                >
            <Text style={styles.text}>Excluir</Text>
          </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  text:{
    color:'white'
    },
  container: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 40
  },
});