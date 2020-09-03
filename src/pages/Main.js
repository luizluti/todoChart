import React from 'react'
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { ProgressCircle } from 'react-native-svg-charts'
// import AsyncStorage from '@react-native-community/async-storage'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Colors from '../styles/Colors'

const Main = () => {
  const navigation = useNavigation()

  const progress = 0.66

  const data = [
    {
      id: '1',
      title: 'Comprar Café',
      completed: false
    },
    {
      id: '2',
      title: 'Fazer exercícios físicos',
      completed: false
    },
    {
      id: '3',
      title: 'Estudar Inglês',
      completed: false
    },
    {
      id: '4',
      title: 'Estudar TypeScript',
      completed: false
    }
  ]

  return (
    <View style={styles.container}>

      <View style={styles.chartWrapper}>
        <ProgressCircle
          style={styles.chart}
          progress={progress}
          progressColor={Colors.grey}
          backgroundColor={'rgb(141, 153, 174, 0.2)'}
        >

          <Text style={styles.text}>{progress * 100}%</Text>

        </ProgressCircle>
      </View>

      <View style={styles.listWrapper}>
        <View style={styles.textWrapper}>
          <Text style={styles.textMenu}>34% das tarefas ainda estão incompletas</Text>
        </View>

        <FlatList
          style={styles.list}
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.listText}>{item.title}</Text>
              <TouchableOpacity
                style={{ marginRight: 10 }}
              >
                <Icon name='create' color='#2B2D42' size={18}/>
              </TouchableOpacity>
              <TouchableOpacity
              >
                <Icon name='delete' color='#2B2D42' size={18}/>
              </TouchableOpacity>
            </View>
          )}
        />

        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('AddTask')}
        >
          <Text style={styles.btnText}>
            Nova Tarefa
          </Text>
        </TouchableOpacity>

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark
  },
  chartWrapper: {
    flex: 1,
    justifyContent: 'center'

  },
  chart: {
    height: 200
  },
  text: {
    fontSize: 48,
    lineHeight: 200,
    textAlign: 'center',
    color: Colors.light
  },
  listWrapper: {
    flex: 2,
    backgroundColor: '#8D99AE',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32
  },
  textWrapper: {
    width: 320,
    alignSelf: 'center',
    backgroundColor: '#2B2D42',
    marginTop: 10,
    borderRadius: 14
  },
  textMenu: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    color: '#EDF2F4'
  },
  list: {
    marginTop: 22,
    padding: 12
  },
  listText: {
    flex: 1,
    fontSize: 18,
    color: '#2B2D42',
    lineHeight: 48
  },
  btnWrapper: {
    flex: 1,
    justifyContent: 'center'
  },
  btn: {
    backgroundColor: '#2B2D42',
    alignSelf: 'center',
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 50,
    margin: 28
  },
  btnText: {
    fontSize: 18,
    color: '#EDF2F4'
  },
  modalWrapper: {
    justifyContent: 'flex-end',
    flex: 1
  },
  modal: {
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    backgroundColor: '#8D99AE',
    height: 320,
    padding: 20
  },
  closeModal: {
    alignSelf: 'flex-end'
  },
  closeModalText: {
    color: '#2B2D42'
  },
  textModal: {
    marginTop: 30,
    fontSize: 20,
    color: '#2B2D42'
  },
  inputModal: {
    fontSize: 28,
    color: '#2B2D42',
    backgroundColor: '#EDF2F4',
    borderRadius: 12
  }
})

export default Main
