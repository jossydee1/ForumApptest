import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button
} from "react-native";
import HomeScreen from "./HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const SignInScreen = ({ navigation }) => {
  return (
    <View>
      {/* <TextInput style={styles.input} placeholder='Email' />
            <TextInput style={styles.input} secureTextEntry={true} placeholder='Password' />
<TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
    <Text>SignIn</Text>
</TouchableOpacity> */}
      <Text>Welcome here!!!</Text>
      <Button title="Click Me" onPress="HomeScreen" />
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  input: {
    borderColor: "blue",
    borderWidth: 5,
    margin: 5
    // backgroundColor: 'blue'
  }
});
