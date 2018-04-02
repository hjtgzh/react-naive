import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

import ImagePicker from 'react-native-image-crop-picker';
import axios from 'axios';
import qs from 'qs';
// import {create} from 'apisauce'

export default class Home extends Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    return {
      title: 'Home'
    };
  };
  componentDidMount() {
    //get请求测试
    // axios
    //   .get('http://47.97.217.240:30040/mine/reward?userInfoId=1')
    //   .then(function(response) {
    //     console.log(response);
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });

    //post请求测试
    const instance = axios.create({
      timeout: 6000,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
    instance
      .post(
        'http://47.97.217.240:30040/mine/login',
        qs.stringify({
          phoneNumber: 17682305203,
          password: 123
        })
      )
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  choosePic = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      this.fetchImage(image);
    });
  };
  // 头像上传
  fetchImage = image => {
    // 待定
    const url = 'http://47.97.217.240:30040/mine/uploadPic';
    // const url = 'http://192.168.1.137:8080/mine/uploadPic';
    // global.FormData = global.originalFormData;

    // const instance = axios.create({
    //   timeout: 6000,
    //   headers: {
    //     'Content-Type': 'multipart/form-data'
    //   }
    // });
    // let file = {
    //   uri: image.uri,
    //   name: 'image',
    //   type: 'image/jpeg'
    // };
    // instance
    //   .post(
    //     url,
    //     qs.stringify({
    //       file: file,
    //       userInfoId: 1
    //     })
    //   )
    //   .then(function(response) {
    //     console.log(response);
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });

    const formData = new FormData();
    let file = {
      uri: image.uri,
      name: 'image',
      type: 'image/jpeg'
    };
    formData.append('file', file);
    formData.append('userInfoId', 1);
    axios
      .post(url, formData, {
        method: 'post',
        headers: { 'Content-Type': 'multipart/formdata' }
      })
      .then(res => {
        //根据服务器返回进行处理
        if (res.data.status === 0) {
          console.log(res);
        } else {
          console.log('error');
        }
      })
      .catch(error => {
        console.log('catch-error');
        console.log(error);
      });

    // const formData = new FormData();
    // let file = {
    //   uri: image.uri,
    //   name: 'image',
    //   type: 'image/jpeg'
    // };
    // formData.append('file', file);
    // formData.append('userInfoId', 1);
    // fetch(url, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'multipart/form-data'
    //   },
    //   body: formData
    // })
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(response => {
    //     console.log('catch-error');
    //     console.log(response);
    //   });
    // axios
    //   .post(url, formData, {
    //     method: 'post',
    //     headers: { 'Content-Type': 'multipart/formdata' }
    //   })
    //   .then(res => {
    //     //根据服务器返回进行处理
    //     if (res.data.status === 0) {
    //       console.log(res);
    //     } else {
    //       console.log('error');
    //     }
    //   })
    //   .catch(error => {
    //     console.log('catch-error');
    //     console.log(error);
    //   });
  };
  render() {
    return (
      <View>
        <Text>首页</Text>
        <Button title="选择图片" onPress={this.choosePic} />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
