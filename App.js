import { useState } from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as Sharing from 'expo-sharing'
import * as ImageManipulator from "expo-image-manipulator";
import * as MediaLibrary from "expo-media-library";
import * as FileSystem from "expo-file-system";

export default function App() {
  const [localUri,setLocaluri] = useState('');


  //获取照片权限，选择照片
  const openImagePickerAsync = async () => {
    console.log('分享');
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if(!permissionResult.granted){
      alert('需要访问相机胶卷的权限');
      return;
    }
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if(pickerResult.cancelled){
      return;
    }
    setLocaluri(pickerResult.uri);
    console.log(pickerResult);
  }

  //分享照片
  const shareImage = async () => {
    console.log('分享照片',localUri);
    let imageProc = await ImageManipulator.manipulateAsync(localUri);
    try {
      await Sharing.shareAsync(imageProc.uri);
    } catch (error) {
      console.log(error,'错误');
    }
    
    // if (!(await Sharing.isAvailableAsync())) {
    //   alert(`Uh oh, sharing isn't available on your platform`);
    //   return;
    // }

    // // In a real app you should verify that permissions were granted
    // await MediaLibrary.requestPermissionsAsync();
    // let results = await MediaLibrary.getAssetsAsync({ first: 1 });
    // let asset = results.assets[0];

    // if (!asset) {
    //   alert("No images available!");
    //   return;
    // }

    // // Use FileSystem to copy the image from its original location to the app document directory
    // let assetUriParts = asset.uri.split("/");
    // let assetName = assetUriParts[assetUriParts.length - 1];
    // let uri = `${FileSystem.documentDirectory}/${assetName}`;
    // await FileSystem.copyAsync({
    //   from: asset.uri,
    //   to: uri,
    // });

    // // Share the image from the uri that you copied it to
    // Sharing.shareAsync(uri);
  }

  //重新选择照片
  const reselectHandle = () => {
    setLocaluri('');
  }

  if(localUri){
    return(
      <View style={styles.container}>
        <Image source={{uri: localUri}} style={styles.thumbnail}/>
        <TouchableOpacity style={styles.button} onPress={shareImage}>
          <Text style={styles.buttonText}>分享照片</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={reselectHandle}> 
          <Text style={styles.buttonText}>重新选择</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('./assets/bz6.jpg')} />
      <Text style={styles.instructions}>按下按钮，与朋友分享手机中的图片</Text>
      <TouchableOpacity style={styles.button} onPress={openImagePickerAsync}>
        <Text style={styles.buttonText}>选择照片</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 10
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    textAlign: 'center',
    marginBottom: 10
  },
  button: {
    backgroundColor: 'blue',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff'
  },
  buttonText: {
    fontSize: 16,
    color: '#fff'
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: 'contain'
  }
})
