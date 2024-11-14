import React from 'react';
import { View, Text } from 'react-native';
import { firebase } from '../services/firebase';

export default function Dashboard() {
  const user = firebase.auth().currentUser;

  return (
    <View>
      <Text>Welcome, {user.displayName}</Text>
      <Text>Your energy usage will be displayed here.</Text>
    </View>
  );
}
