// src/services/mqttService.js
import mqtt from 'mqtt';

const MQTT_BROKER_URL = "mqtt://your-broker-url"; // Replace with broker URL
const MQTT_TOPIC = "smartPlug/energyUsage"; // The topic that smart plugs publish to

const options = {
  clientId: `mqtt_${Math.random().toString(16).slice(3)}`,
  username: "YOUR_USERNAME", // if applicable
  password: "YOUR_PASSWORD", // if applicable
};

export const connectToMQTT = () => {
  const client = mqtt.connect(MQTT_BROKER_URL, options);

  client.on("connect", () => {
    console.log("Connected to MQTT broker");
    client.subscribe(MQTT_TOPIC, (err) => {
      if (!err) {
        console.log(`Subscribed to topic: ${MQTT_TOPIC}`);
      } else {
        console.error("Subscription error:", err);
      }
    });
  });

  client.on("message", (topic, message) => {
    if (topic === MQTT_TOPIC) {
      const energyData = JSON.parse(message.toString());
      console.log("Received energy data:", energyData);
      // Save energy data to Firebase or use it directly in the app
    }
  });

  client.on("error", (error) => {
    console.error("MQTT connection error:", error);
  });

  return client;
};
