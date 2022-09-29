import * as React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import Constants from 'expo-constants';

export default class App extends React.Component {

    dados = [
        {id:1,numero:"1", binario: "1"},
        {id:2,numero:"5", binario: "101"},
        {id:3,numero:"3", binario: "11"},
        {id:4,numero:"0", binario: "0"},
        {id:5,numero:"9", binario: "1001"},
        {id:6,numero:"10", binario: "1010"},
        {id:7,numero:"", binario: "Valor Digitado Inv�lido!"},
        {id:8,numero:"879", binario: "1101101111"},
        {id:9,numero:"99", binario: "1100011"},
        {id:10,numero:";", binario: "Valor Digitado Inv�lido!"},
        {id:11,numero:".", binario: "Valor Digitado Inv�lido!"},
    ]

    itemUsuario = ({item}) => {
        
        return(
            <View>
                <Text style={styles.nome}>Conversão:</Text>
                <Text style={styles.numero}> Numero: {item.numero}</Text>
                <Text style={styles.binario}> Convertido em binário: {item.binario}</Text>
            </View>
        )
    }


    render() {
        return (
            <View  style={styles.container}>
                <FlatList data={this.dados} renderItem={this.itemUsuario}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },

  nome: {
    marginTop: "10px",
    fontFamily: "Times",
    fontSize: "18px",
    color: '#680148'
  },

  numero: {
    color: "#723e4e",
    fontSize: "15px",
  },

  binario: {
    color: "#2d2c26",
    fontSize: "14px"
  }
});