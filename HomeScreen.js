import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  SaveAreaView
} from "react-native";
import Input from "./Input";
import { TouchableOpacity } from "react-native-gesture-handler";


const HomeScreen = ({ navigation }) => {
  const [input, setInput] = useState("");
  const [text, setText] = useState([]);

  const handleSubmit = () => {
    setText([input, ...text]);
    setInput("");
  };

  return (
    <View>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Say something"
          value={input}
          onChangeText={text => setInput(text)}
        />
        <Button style={styles.button} title="Send" onPress={handleSubmit} />
      </View>
      {text.map(texts => (
        <Input text={texts} />
      ))}
      <TouchableOpacity onPress={() => navigation.navigate("SignInScreen")}>
        <Text>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  input: {
    borderColor: "blue",
    borderWidth: 5,
    margin: 5
    // backgroundColor: 'blue'
  },
  button: {
    backgroundColor: "blue"
  },
  SignOut: {
  justifyContent: "flex-end"
  }
});
