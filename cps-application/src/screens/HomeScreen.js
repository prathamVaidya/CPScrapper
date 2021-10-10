import React from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";

const contests = [
  {
    id: 1,
    image: require("../assets/icons/codechef.jpg"),
    title: "American Express Code",
    time: "In 2 days",
  },
  {
    id: 2,
    image: require("../assets/icons/codeforces.png"),
    title: "Code Week 2",
    time: "On 15 October",
  },
  {
    id: 3,
    image: require("../assets/icons/codeforces.png"),
    title: "Chocolate Problems",
    time: "On 20 October",
  },
];
function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Upcoming Contests: </Text>
      <FlatList
        data={contests}
        keyExtractor={(contest) => {
          contest.id.toString();
        }}
        renderItem={({ item }) => (
          <Card
            id={item.id}
            title={item.title}
            image={item.image}
            description={item.time}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  heading: {
    fontSize: 20,
    fontWeight: "500",
    color: colors.black,
    paddingVertical: 20,
  },
});
export default HomeScreen;
