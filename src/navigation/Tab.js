import React from 'react';
import { Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { TabLabel } from '../component';
import { Color } from '../config';
import Home from '../pages/Home/Home';
import Mine from '../pages/Mine/Mine';
import Charts from '../pages/Charts/Charts';

export default TabNavigator(
  {
    Home: { screen: Home },
    Charts: { screen: Charts },
    Mine: { screen: Mine }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let label;
        let icon;
        if (routeName === 'Home') {
          label = '首页';
          icon = '\ue61e';
        } else if (routeName === 'Charts') {
          label = '图表';
          icon = '\ue600';
        } else if (routeName === 'Mine') {
          label = '我的';
          icon = '\ue607';
        }
        return <TabLabel label={label} icon={icon} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: '#2b68c2', // 文字和图片选中颜色
      inactiveTintColor: '#A6A7A7', // 文字和图片未选中颜色
      style: {
        backgroundColor: Color.white
      },
      indicatorStyle: {
        // height: 0 // 如TabBar下面显示有一条线，可以设高度为0后隐藏
      }
    },
    tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
    animationEnabled: false, // 切换页面时是否有动画效果
    swipeEnabled: false
  }
);
