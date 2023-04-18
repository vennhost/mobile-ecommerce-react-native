import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import ProductCard from "../components/ProductCard";

const Home = ({navigation}) => {
  const products = [
    {
      id: 1,
      title: "Coca Cola",
      description: "Soft drink from cocacola bottling company",
      price: 9.99,
      image: require("../assets/product.jpg"),
    },
    {
      id: 2,
      title: "Product 2",
      description: "Soft drink from cocacola bottling company",
      price: 19.99,
      image: require("../assets/product.jpg"),
    },
    {
      id: 3,
      title: "Product 3",
      description: "Soft drink from cocacola bottling company",
      price: 29.99,
      image: require("../assets/product.jpg"),
    },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() =>
        navigation.navigate("Product", { title: item.title, product: item })
      }
    >
      <Image style={styles.itemImage} source={item.image} />
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  listContainer: {
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  itemContainer: {
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    alignItems: "center",
  },
  itemImage: {
    width: 150,
    height: 150,
    marginBottom: 8,
  },
  itemTitle: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 8,
  },
  itemPrice: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#333",
  },
});

export default Home;
