//login
import React from 'react';
import {Button, Image, ScrollView, View, Text, ImageBackground, StyleSheet, TouchableOpacity,Linking, Button} from 'react-native';

const Register = () => {
  return (
    <View style={{backgroundColor:'#FFFFFF'}}>
        <ScrollView>
      <Bar/>
      <Userpass/>
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
const Userpass = () => {
    return (
      <View >
        <SafeAreaView>
            <Text>Username</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Text>Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
      <Button
        title="Register"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    </SafeAreaView>
      </View>
    );
  };


export default Register;