import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Colors from '../styles/Colors'
import Icon from 'react-native-vector-icons/MaterialIcons'

const AddTask = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>

      <TouchableOpacity
        style={styles.close}
        onPress={() => navigation.navigate('Main')}
      >

        <Text style={styles.closeIcon}>
          <Icon name='cancel' color='#2B2D42' size={32}/>
        </Text>

      </TouchableOpacity>

      <Text style={styles.textLabel}>Nome da Tarefa</Text>
      <TextInput
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.btn}
      >
        <Text style={styles.btnText}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.grey,
    padding: 20
  },
  close: {
    alignSelf: 'flex-end'
  },
  closeText: {
    color: Colors.dark
  },
  textLabel: {
    marginTop: 30,
    fontSize: 20,
    color: Colors.dark
  },
  input: {
    fontSize: 28,
    color: Colors.dark,
    backgroundColor: Colors.light,
    borderRadius: 12
  },
  btn: {
    backgroundColor: Colors.dark,
    alignSelf: 'center',
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 50,
    margin: 28
  },
  btnText: {
    fontSize: 18,
    color: Colors.light
  }
})

export default AddTask
