// src/components/Signup.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { firebase } from '../services/firebase';

export default function Signup() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', password: '' });

  const handleSignup = async () => {
    try {
      const { email, password, firstName, lastName, phone } = form;
      const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
      await firebase.firestore().collection('users').doc(userCredential.user.uid).set({
        firstName, lastName, email, phone,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <TextInput placeholder="First Name" onChangeText={(text) => setForm({ ...form, firstName: text })} />
      <TextInput placeholder="Last Name" onChangeText={(text) => setForm({ ...form, lastName: text })} />
      <TextInput placeholder="Email" onChangeText={(text) => setForm({ ...form, email: text })} />
      <TextInput placeholder="Phone" onChangeText={(text) => setForm({ ...form, phone: text })} />
      <TextInput placeholder="Password" secureTextEntry onChangeText={(text) => setForm({ ...form, password: text })} />
      <Button title="Sign Up" onPress={handleSignup} />
    </View>
  );
}
