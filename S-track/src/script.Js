import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Signup from './Signup.html';
import Login from './Login.html';
import Dashboard from './Dashboard.html';
import index from './index.html';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="index" component={index} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function signup() {
  // Retrieve form values (for demonstration purposes)
  const firstName = document.getElementById("first-name").value;
  const middleName = document.getElementById("middle-name").value;
  const lastName = document.getElementById("last-name").value;

  // Display the user's name in the dashboard section
  document.getElementById("user-name").textContent = `${firstName} ${middleName} ${lastName}`;

  // Hide the sign-up form and display the dashboard
  document.getElementById("auth-section").style.display = "none";
  document.getElementById("dashboard-section").style.display = "block";
}

// Mock login function for demonstration purposes
function login() {
  const email = document.getElementById("login-email").value;
  alert(`Logged in as ${email}!`);
  document.getElementById("auth-section").style.display = "none";
  document.getElementById("dashboard-section").style.display = "block";
}

function logout() {
  alert("Logged out!");
  document.getElementById("auth-section").style.display = "block";
  document.getElementById("dashboard-section").style.display = "none";
}
