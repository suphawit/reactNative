import React, { useState } from 'react';
import { Actions } from 'react-native-router-flux'
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default Login = () => {
  const [text, setText] = useState('');
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Login</Text>
            <TextInput
              style={styles.textInput}
              placeholder=""
              label="Username"
              placeholderTextColor="white"
              underlineColorAndroid="white"
              onChangeText={text => setText(text)}
              defaultValue={text}
            />
            <Text onPress={() => Actions.register()}>butteeeeon</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  header: {
    color: 'white',
    textAlign: 'left',
    fontSize: 20
  },
  textInput: {
    color: 'white',
    width: '100%',
    height: 40
  },
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#00A599',
    justifyContent: 'center',
  },
});
