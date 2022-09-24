import { StatusBar } from 'expo-status-bar';
import {useState} from 'react'
import { StyleSheet, Text, View,Button } from 'react-native';

function Cat(props){
  const [n,setN] = useState(1);
  return (
    <View>
      <Text>我的名字是{props.name}，我的年龄是{props.age}岁，当前计数器值{n}</Text>
      <Button title='改变计数值' onPress={() => setN(n+1)}></Button>
    </View>
  )
}


export default function App(){
  return (
    <View style={styles.container}>
      <Cat name='chen' age={3}></Cat>
      <Cat name='sdfsf' age={234}></Cat>
      <Cat name='sdfsdf' age={34}></Cat>
      <Cat name='asdfaf' age={22}></Cat>
      <StatusBar></StatusBar>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
  }
})
