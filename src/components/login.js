import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { firebase } from '../services/firebase';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <TextInput placeholder="Email" onChangeText={(text) => setEmail(text)} />
      <TextInput placeholder="Password" secureTextEntry onChangeText={(text) => setPassword(text)} />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
