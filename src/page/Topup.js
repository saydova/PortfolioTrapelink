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

const Bar = () => {
  return (
    <View style={{flexDirection: 'row', alignItems:'center', marginTop:14}}>
      <Image style={{width:152, height:76, marginLeft:14}}
        source={require('../asset/image/logo.png')}
      />
    </View>
  );
};


export default Topup;