import React from "react";

import { View, Text, StyleSheet } from "react-native";

const Post = ({ data }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{data.title}</Text>
    <Text style={styles.small}>{data.name}</Text>
    <View style={styles.divisor} />
    <Text>{data.content}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    backgroundColor: "#FFF",
    width: 350,
    height: "auto",
    marginVertical: 16,
    padding: 16
  },
  title: {
    fontSize: 16,
    fontWeight: "bold"
  },
  small: {
    fontSize: 12,
    opacity: 0.5
  },
  divisor: {
    borderStyle: "solid",
    borderBottomWidth: 1,
    marginTop: 8,
    marginBottom: 32,
    backgroundColor: "#000",
    opacity: 0.05
  }
});

export default Post;
