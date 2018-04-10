import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Icon
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

import { px } from '../../config/size';
import { get, post } from '../../axios';
const cssStyle = StyleSheet.create({
  contentTitle: {
    textAlign: 'center',
    height: px(100),
    lineHeight: px(100),
    backgroundColor: '#fff'
  },
  content: {
    marginTop: px(20),
    height: px(200),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  }
});

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

    get('http://47.97.217.240:30040/mine/reward', {
      userInfoId: 1
    });
    post('http://47.97.217.240:30040/mine/login', {
      phoneNumber: 17682305203,
      password: 123
    });
  }

  // 选择照片
  choosePic = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      includeBase64: true
    }).then(image => {
      this.fetchImage(image);
    });
  };
  // 头像上传
  fetchImage = image => {
    // 待定
    const url = 'http://47.97.217.240:30040/mine/uploadPic';

    const instance = axios.create({
      timeout: 6000,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
    instance
      .post(
        url,
        qs.stringify({
          base64File: `data:image/png;base64,${image.data}`,
          userInfoId: 4
        })
      )
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });

    // let xhr = new XMLHttpRequest();
    // xhr.open('POST', url);
    // let formdata = new FormData();
    // formdata.append('image', {
    //   ...image,
    //   name: 'image.jpg',
    //   type: 'image/jpeg'
    // });
    // xhr.send(formdata);

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
      <ScrollView>
        <StatusBar barStyle="light-content" backgroundColor="#2b68c2" />
        <Text style={cssStyle.contentTitle}>首页</Text>
        <View style={cssStyle.content}>
          <Button title="选择图片" onPress={this.choosePic} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({});
