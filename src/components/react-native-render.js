import React from 'react';
import {View, Text} from 'react-native';

export default ({storySource}) => (
  <View style={style.wrapper}>
    {storySource.split('\n').map((item, idx) => (
      <Text style={style.text} key={idx}>
        {item} <br/>
      </Text>
    ))}
  </View>
);

const style = {
  text: {
    color: 'rgb(68, 68, 68)',
    fontSize: 12,
    letterSpacing: 1,
  },
  wrapper:{
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'rgb(250, 250, 250)',
    padding: 10,
    margin: 10
  },
};
