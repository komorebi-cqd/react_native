import { useState } from 'react';
import { StyleSheet,View,Text,TextInput,Button,TouchableHighlight } from 'react-native';


export default function App(){
  const [text,setText] = useState('');
  const onPressHandle = () => {
    console.log('点击了');
  }
  return(
      <View style={styles.container}>
        <TextInput style={styles.textInputStyle} defaultValue={text} placeholder="请输入" onChangeText={text => setText(text)}/>
        <Text>输入的内容为： {text}</Text>
        {/* <Button title='点击了我' onPress={onPressHandle}/> */}
        <TouchableHighlight onPress={onPressHandle}>
          <View style={{width: 200, height: 50, alignItems: 'center',backgroundColor: '#219334'}}>
            <Text style={{ color: '#fff',lineHeight: 50, fontSize: 20}}>我哈哈哈哈</Text>
          </View>
        </TouchableHighlight>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  },
  text:{
    color: 'red',
    textDecorationLine: 'underline'
  },
  red: {
    color: 'red',
    fontSize: 20, 
    fontWeight: '300'
  },
  bule: {
    color: 'bule'
  },
  textInputStyle: {
    width: 300,
    height: 30,
    borderColor: 'blank',
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10
  }
})