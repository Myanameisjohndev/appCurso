import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Modal,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Input from './src/components/Input';
import Button from './src/components/Button';
import ListItem from './src/components/ListItem';
import List from './src/components/List';
import ModalEdit from './src/components/ModalEdit';

export default function App() {

  const [name, setName] = useState('');
  const [namesFiltered, setNamesFiltered] = useState([]);
  const [edit, setEdit] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [editName, setEditName] = useState('');
  const openAndCloseModal = () => {
    setOpenModal(!openModal);
  }

  const loadStorage = async () => {
    const response = await AsyncStorage.getItem('alltasksaplication');
    if (!!response === true) {
      setNamesFiltered(JSON.parse(response));
    }
  }

  useEffect(() => {
    loadStorage();
  }, []);

  // useEffect(() => {
  //   if(name === ''){
  //     setNamesFiltered(names);
  //   }else{
  //     const filter = names.filter((item)=>{
  //       if(item.name.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase()
  //       .includes(name.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase()) === true){
  //       // if(item.name.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase()
  //       // .indexOf(name.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase()) > -1){
  //         return true;
  //       }else{
  //         return false;
  //       }
  //     });
  //     setNamesFiltered(filter);
  //   }
  // }, [name]);

  const validIndex = (index) => {
    const filter = namesFiltered.filter(item => item.index === index);
    if (filter.length > 0) {
      return index + 1;
    }
    return index;
  }

  const addItem = async () => {
    if (name !== '') {
      const item = {
        name,
        index: validIndex(namesFiltered.length + 1),
      };
      setNamesFiltered([...namesFiltered, item]);
      await AsyncStorage.setItem('alltasksaplication', JSON.stringify([...namesFiltered, item]));
      setName('');
    }
  }

  const removeItem = (index) => {
    Alert.alert(
      'Excluir tarefa',
      'Você deseja realmente excluir esta tarefa?',
      [
        { text: 'Não', style: 'cancel' },
        {
          text: 'Sim', style: 'default', onPress: async () => {
            // setEdit();
            // setName('');
            if (!!edit === false) {
              const filter = namesFiltered.filter(item => item.index !== index);
              setNamesFiltered(filter);
              await AsyncStorage.setItem('alltasksaplication', JSON.stringify([...filter]));
            }
          }
        },
      ]
    );
  }

  const editItem = async () => {
    const edited = namesFiltered.map(item =>
      item.index === edit.index
        ? {
          ...edit,
          name: editName
        } :
        item
    );
    setNamesFiltered(edited);
    await AsyncStorage.setItem('alltasksaplication', JSON.stringify([...edited]));
    openAndCloseModal();
    setEdit();
    setEditName('');
  }

  const actionToEdit = (item) => {
    setEdit(item);
    setEditName(item.name);
    openAndCloseModal();
  }

  return (
    <View style={styles.container}>
      <Input
        placeholder='Digite aqui:'
        value={name}
        onChangeText={setName}
      />
      {/* <Text style={styles.text}>Olá mundo!</Text>
      <Text style={[styles.text, { fontSize: 26 }]}>{name}</Text> */}
      <Button
        action={addItem}
        text='Adicionar'
      />
      <List
        namesFiltered={namesFiltered}
        actionToEdit={() => actionToEdit}
        removeItem={() => removeItem}
      />
      <ModalEdit
        editItem={editItem}
        editName={editName}
        openModal={openModal}
        setEditName={setEditName}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "#919191",
    fontSize: 22,
    fontWeight: 'bold'
  },
});
