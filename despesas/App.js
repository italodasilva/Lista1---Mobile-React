import * as React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import Constants from 'expo-constants';


export default class App extends React.Component {

    dados = [
        {id:1,nome:"Italo", ganhos: 3000, percas:-1000},
        {id:2,nome:"Igor", ganhos:3400, percas:-2000},
        {id:3,nome:"Kezia", ganhos:1800, percas:-800}
    ]

    itemUsuario = ({item}) => {
        
        return(
            <View>
                <Text style={styles.nome}>Cliente: {item.nome}</Text>
                <Text style={styles.ganho}> Você recebeu: {item.ganhos}</Text>
                <Text style={styles.perca}> Você gastou: {item.percas}</Text>
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
    marginTop: "10px",
    fontFamily: "Times",
    fontSize: "18px",
  },

  ganho: {
    color: "green",
    fontSize: "15px",
  },

  perca: {
    color: "red",
    fontSize: "14px"
  }
});