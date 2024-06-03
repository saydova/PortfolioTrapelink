import React from 'react';
import {Image, ScrollView, View, Text, ImageBackground, StyleSheet, TouchableOpacity,Linking} from 'react-native';

const Home = () => {
  return (
    <View style={{backgroundColor:'#FFFFFF'}}>
        <ScrollView>
      <Bar/>
      <Content1/>
      <Content2/>
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

      <TouchableOpacity onPress={() => Linking.openURL('./Login')} style={{backgroundColor:'#00A6EB',
       width:94, 
       height:39, 
       justifyContent:'center', 
       alignItems:'center',
       marginLeft:125,
       borderRadius:15,
       }}>
      <Text>Login</Text>
    </TouchableOpacity>
    </View>
  );
};

const Content1 = () => {
return (
<View style={{marginLeft:30}}>
    <Text style={{ color: '#6096BA',
          fontSize: 12, fontFamily:'Michroma',marginTop:16
        }}>Why Trapelink?</Text>
    <Text style={{ color: '#219EBC',
          fontSize: 20, fontFamily:'Michroma',marginTop:12
        }}>You will get a tour package</Text>
    <Text style={{ color: '#219EBC',
          fontSize: 20, fontFamily:'Michroma'
        }}>at a cheap price</Text>
    <Text style={{ color: '#E05326',
          fontSize: 10, fontFamily:'Michroma', marginBottom:30
        }}>International / Domestic</Text>
</View>
);
};

const Content2 = () => {
    return (
    <View style={styles.container}>
        <ImageBackground source={require('../asset/image/paris.jpg')} style={styles.image}>
      <Text style={styles.text}>Let's Join Us</Text>
      <Text style={{color: 'black',
          fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'center'}}>America - Canada - France</Text>
          <Text style={{color: 'black',
          fontSize: 16,
          fontWeight: 'bold',
          textAlign: 'center'}}>Bali - NTT - Papua</Text>
    </ImageBackground>
    </View>
    );
    };

    const styles = StyleSheet.create({
        container: {
          flex: 1,
        },
        image: {
          justifyContent: 'center',
          width:412, height:700
        },
        text: {
          color: 'white',
          fontSize: 42,
          fontWeight: 'bold',
          textAlign: 'center'
        },
      });


export default Home;
