import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Button, TextInput  } from 'react-native-paper';
import { color } from 'react-native-reanimated';
// import { white } from 'react-native-paper/lib/typescript/src/styles/colors';
import { Actions } from 'react-native-router-flux'

export default Login = () => {
  const [text, setText] = useState('');
  const [password, setPassword] = useState('');
    return (
        <View style={styles.container}>
          <Text style={styles.header}>Login</Text>
          <TextInput
            label="Email"
            value={text}
            onChangeText={text => setText(text)}
            underlineColor="white"
            style={{
              backgroundColor: "transparent",
              paddingHorizontal: 0
            }}
            theme={{
              colors: {
                placeholder: 'white', text: 'white', primary: 'white'
              }
           }}
          />
          <TextInput
            label="Password"
            value={password}
            onChangeText={password => setPassword(password)}
            secureTextEntry={true}
            underlineColor="white"
            underlineColor="white"
            style={{
              backgroundColor: "transparent",
              paddingHorizontal: 0
            }}
            theme={{
              colors: {
                placeholder: 'white', text: 'white', primary: 'white'
              }
           }}
          />
          <View style={styles.buttonGrid}>
            <View style={{ width: '100%', position:'relative' }}>
              <Avatar.Icon
                color="#00A599"
                style={{ float: 'right', position: 'absolute', right: 0, backgroundColor: 'white' }} size={40} icon="chevron-right" onPress={() => Actions.register()} />
            </View>
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
  buttonGrid: {
    display: 'flex',
    marginTop: 10,
    position: 'relative',
    flexDirection: 'row'
  },
  header: {
    color: 'white',
    textAlign: 'left',
    fontSize: 30
  },
  textInput: {
    width: '100%',
    height: 40
  },
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#00A599',
    justifyContent: 'center',
    position: 'relative'
  },
});
