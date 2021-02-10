import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "@material-ui/core";


const Input = ({ text }) => {
  return <View>
    <Avatar src='' />
  {text}
  </View>;
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
