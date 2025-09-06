import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Animated,
  Image,
} from "react-native";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const handleLogin = () => {
    if (email === "tebano10" && password === "12345") {
      setLoggedIn(true);
    } else {
      alert("Invalid credentials");
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setEmail("");
    setPassword("");
    fadeAnim.setValue(0); // reset animation
  };

  useEffect(() => {
    if (loggedIn) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1500, // dramatic fade
        useNativeDriver: true,
      }).start();
    }
  }, [loggedIn]);

  if (loggedIn) {
    return (
      <View style={styles.container}>
        <Animated.View style={{ opacity: fadeAnim }}>
          <Image source={require("./sirta.jpg")} style={styles.image} />
          <Text style={styles.welcome}>Welcome, Gooner! ⚽🔥</Text>

          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gooners</Text>

      <TextInput
        style={styles.input}
        placeholder="Username/Email"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

// dari e edit...
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffffff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000000ff",
    marginBottom: 40,
  },
  input: {
    width: "100%",
    backgroundColor: "#2c2c3e",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    color: "#fff",
  },
  button: {
    width: "100%",
    backgroundColor: "#000000ff",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 15,
    marginBottom: 20,
  },
  welcome: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginBottom: 20,
  },
  logoutButton: {
    backgroundColor: "#d32f2f",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  logoutText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
