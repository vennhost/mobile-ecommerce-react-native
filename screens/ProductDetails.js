import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";

const ProductDetails = () => {

    const product = {
        image: require('../assets/product.jpg'),
        title: "Coca Cola",
        description: "Soft drink from cocacola bottling company",
        price: "200"
    }
  return (
    <View style={styles.container}>
      <Image source={product.image} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}>${product.price}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    padding: 16,
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#f90",
    marginBottom: 16,
  },
  buttonContainer: {
    alignItems: "center",
  },
  button: {
    backgroundColor: "#f90",
    borderRadius: 8,
    padding: 16,
    marginTop: 16,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default ProductDetails;
