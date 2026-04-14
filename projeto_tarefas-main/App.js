import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput } from 'react-native';
import {useState} from 'react';

export default function App() {

const [tarefas,setTarefas] = [
{id:"1",titulo:"aprender Git"},
{id:"2",titulo:"aprender fazer Commit"},
  {id:"3",titulo:"aprender utilizar o Github"},
  {id:"4",titulo:"Criar um novo commit"},
]

const [novaTarefa,setnovaTarefa] = useState('')

function addTarefas(){
  const novaTarefa = {
    id : String(Date.now()),
    titulo : task
};
  setTarefas([...tarefas,novaTarefa])
}

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>lista de tarefas</Text>

      <FlatList
      data={tarefas}
      keyExtractor={(item)=>item.id}
      renderItem={({item})=>(
        <Text style={styles.item}>{item.titulo}

        </Text>
      )}


      />

      <TextInput
      style={styles.input}
      value={novaTarefa}
      onChangeText={ (texto)=> setnovaTarefa(texto)}
      placeholder="Digite uma tarefa"
      textAlign='center'
      />

      <TouchableOpacity style={styles.btnAdicionar}>
        <Text>Adicionar Tarefa</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    
  },
  titulo:{
    fontSize:48,
    fontWeight:'bold',
    color:'dark blue',
    marginBottom:20
  },

  item: {
    padding:15,
    marginTop: 10,
    backgroundColor:'lightgreen',
    borderRadius:5
  },
  btnAdicionar: {
    width: "90%",
    backgroundColor: 'lightgreen',
    margin:15,
    height: 40,
    borderRadius:5,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  input:{
    backgroundColor: "white",
    borderWidth: 1,
    width: "90%",
    margin: 15,
    borderColor: "lightgreen",
    padding:10,
    marginBottom: 10,
    borderRadius: 5,
    textAlign: 'center'  
  }
});