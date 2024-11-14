import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { firebase } from '../services/firebase';
import { connectToMQTT } from '../services/mqttService';

export default function EnergyTracker() {
  const [consumption, setConsumption] = useState(0);
  const client = connectToMQTT();

  useEffect(() => {
    const unsubscribe = firebase.firestore().collection('energyUsage')
      .where('userId', '==', firebase.auth().currentUser.uid)
      .onSnapshot((snapshot) => {
        let total = 0;
        snapshot.forEach(doc => {
          total += doc.data().usage;
        });
        setConsumption(total);
      });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    client.on("message", (topic, message) => {
      const energyData = JSON.parse(message.toString());
      setConsumption((prevConsumption) => prevConsumption + energyData.usage); // Accumulate usage data
    });

    return () => client.end(); // Disconnect on component unmount
  }, [client]);

  return (
    <View>
      <Text>Total Consumption: {consumption} kWh</Text>
    </View>
  );
}
