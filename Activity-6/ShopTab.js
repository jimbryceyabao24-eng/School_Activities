
import React, { useContext } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';

import { CartContext } from '../context/CartContext';

const products = [
  { id: '1', name: 'T-Shirt', price: 250 },
  { id: '2', name: 'Jeans', price: 500 },
  { id: '3', name: 'Shoes', price: 1200 },
  { id: '4', name: 'Backpack', price: 750 },
];

export default function ShopTab() {
  // Access global state using useContext
  const { addToCart, totalItems, isUpdating } =
    useContext(CartContext);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Shop</Text>

      <Text style={styles.cartCount}>
        Cart Items: {totalItems}
      </Text>

      {isUpdating && (
        <Text style={styles.loading}>Adding to cart...</Text>
      )}

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View>
              <Text style={styles.productName}>
                {item.name}
              </Text>

              <Text style={styles.price}>
                ₱{item.price}
              </Text>
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={() => addToCart(item)}
            >
              <Text style={styles.buttonText}>
                Add to Cart
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f5f9',
    padding: 20,
    paddingTop: 50,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 10,
  },
  cartCount: {
    fontSize: 16,
    color: '#2563eb',
    marginBottom: 15,
  },
  loading: {
    color: '#16a34a',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 16,
    marginBottom: 12,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  price: {
    fontSize: 15,
    color: '#64748b',
    marginTop: 5,
  },
  button: {
    backgroundColor: '#2563eb',
    padding: 10,
    borderRadius: 7,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
