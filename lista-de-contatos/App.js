import * as React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import Constants from 'expo-constants';


export default class App extends React.Component {

    dados = [
        {id:1,nome:"Lucas", sobrenome:"Xavier Irineu Mota", telefone:"(31) 98999-1700"},
        {id:2,nome:"Joaquim", sobrenome:"Aparecido Neves", telefone:"(11) 988798-0057"},
        {id:3,nome:"Italo", sobrenome:"Augusto da Silva", telefone:"(31) 99731-9820"}
    ]

    itemUsuario = ({item}) => {


        return(
            <View>
                <Text style={styles.nome}>{item.nome} {item.sobrenome}</Text>
                <Text style = {styles.telefone}>Telefone: {item.telefone}</Text>
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
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

  nome: {
    color: "gray",
    marginLeft: "10px",
    marginBottom: "5px",
    fontSize: "17px",
    fontFamily: "times"
  },

  telefone: {
    color: "blue",
    marginBottom: "5px",
    marginLeft: "10px",
    fontSize: "18px"
  }

});
