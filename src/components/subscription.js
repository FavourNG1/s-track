import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useStripe } from '@stripe/stripe-react-native';

export default function Subscription() {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [clientSecret, setClientSecret] = useState(null);

  const fetchPaymentSheetParams = async () => {
    // Fetch client secret from backend
    const response = await fetch("http://localhost:3000/create-subscription", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        customerId: "cus_xxxx", // Your Stripe Customer ID
        priceId: "price_xxxx", // Your Stripe Price ID for subscriptions
      }),
    });
    const { clientSecret } = await response.json();
    setClientSecret(clientSecret);
  };

  const openPaymentSheet = async () => {
    const { error } = await presentPaymentSheet({ clientSecret });
    if (error) {
      alert(`Error: ${error.message}`);
    } else {
      alert("Subscription complete!");
    }
  };

  useEffect(() => {
    if (clientSecret) {
      initPaymentSheet({ paymentIntentClientSecret: clientSecret });
    }
  }, [clientSecret]);

  return (
    <View>
      <Text>Subscribe to a monthly plan</Text>
      <Button title="Subscribe" onPress={fetchPaymentSheetParams} />
      {clientSecret && <Button title="Complete Payment" onPress={openPaymentSheet} />}
    </View>
  );
}
