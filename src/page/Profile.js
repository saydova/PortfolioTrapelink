//login
import React from 'react';
import {Button, Image, ScrollView, View, Text, ImageBackground, StyleSheet, TouchableOpacity,Linking, Button} from 'react-native';

const Topup = () => {
  return (
    <View style={{backgroundColor:'#FFFFFF'}}>
        <ScrollView>
      <Bar/>
      </ScrollView>
    </View>
  );
};


const name = 'url'
const phone = 'url'
const address = 'url'

const Bar = () => {
  return (
    <View style={{marginTop:14}}>
      <Image style={{width:50, height:50, flex:'center'}}
        source={require('../asset/image/logo.png')}
      />
      <Text>{name}</Text>
      <Text>{phone}</Text>
      <Text>{address}</Text>
    </View>
  );
};


export default Topup;