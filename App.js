import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button, Alert, ActivityIndicator } from 'react-native';

export default function App() {


  

  return (
    <ScrollView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.text1}>Text 1</Text>
        <Text style={styles.text2}>Text 2</Text>
        <Text style={styles.text3}>Text 3</Text>
        <ActivityIndicator size="large" color="#00000" />
      <Image  style={{width: 100, margin: 15, height: 30}} source={{
        uri: 'https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png',
      }} />
      <Image source={require('./assets/konexio-logo_1.png')}
      />
      <Button onPress={() => Alert.alert("Don`t Touch me!")} title="Click ME!"></Button>
      </View>
    </ScrollView>
  )
}




const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    padding: 10,
  },
  innerContainer: {
    backgroundColor: 'white',
  },
  text1: {
    marginTop: 80,
    marginBottom: 80,
    fontSize: 30,
    color: 'black'
  },
  text2: {
    marginTop: 80,
    marginBottom: 80,
    textAlign: 'center'
  },
  text3: {
    marginTop: 80,
    marginBottom: 80,
    fontWeight: 'bold'
  }, 
});
