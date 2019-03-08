import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Post from "./components/Post/Post";
export default class App extends Component {
  state = {
    posts: [
      {
        id: 0,
        title: "Titulo 1",
        name: "Autor 1",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quo cupiditate vero necessitatibus distinctio optio accusamus quasi, labore tenetur recusandae eos, exercitationem iusto architecto. Nulla molestias in quos omnis aperiam."
      },
      {
        id: 1,
        title: "Titulo 2",
        name: "Autor 2",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quo cupiditate vero necessitatibus distinctio optio accusamus quasi, labore tenetur recusandae eos, exercitationem iusto architecto. Nulla molestias in quos omnis aperiam."
      },
      {
        id: 2,
        title: "Titulo 3",
        name: "Autor 3",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quo cupiditate vero necessitatibus distinctio optio accusamus quasi, labore tenetur recusandae eos, exercitationem iusto architecto. Nulla molestias in quos omnis aperiam."
      }
    ]
  };

  render() {
    const { posts } = this.state;
    return (
      <ScrollView style={styles.scroll}>
        <Text style={styles.title}>GoNative App</Text>
        <View style={styles.container}>
          {posts.map(post => (
            <Post key={post.id} data={post} />
          ))}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    textAlign: "center",
    backgroundColor: "#FFF",
    paddingVertical: 20,
    fontWeight: "bold"
  },
  scroll: {
    backgroundColor: "#FFA07A"
  }
});
