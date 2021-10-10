import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "../config/colors";

function Card({ id, image, title, description }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.dataContainer}>
        <Text style={styles.title}> {title} </Text>
        <Text style={styles.description}> {description} </Text>
      </View>
      <View style={styles.icon}>
        <AntDesign name="right" size={24} color={colors.black} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 15,
    padding: 10,
    flexDirection: "row",
    marginVertical: 5,
  },
  image: {
    width: 70,
    height: 70,
  },
  icon: {
    justifyContent: "center",
    padding: 5,
  },
  dataContainer: {
    justifyContent: "center",
    flex: 2,
  },
  title: {
    padding: 5,
    fontWeight: "600",
    color: colors.black,
    fontSize: 16,
  },
  description: {
    padding: 5,
    color: colors.grey,
    fontSize: 12,
  },
});

export default Card;
