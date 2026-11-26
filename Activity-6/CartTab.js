
import React, { useContext } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';

import { CartContext } from '../context/CartContext';

export default function CartTab() {
  // Access shared cart data
  const { cart, removeFromCart, totalItems } =
    useContext(CartContext);

  // Calculate total price
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Shopping Cart</Text>

      <Text style={styles.subheading}>
        Total Items: {totalItems}
      </Text>

      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text style={styles.empty}>
            Your shopping cart is empty.
          </Text>
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View>
              <Text style={styles.productName}>
                {item.name}
              </Text>

              <Text style={styles.details}>
                ₱{item.price} x {item.quantity}
              </Text>

              <Text style={styles.price}>
                Subtotal: ₱{item.price * item.quantity}
              </Text>
            </View>

            <TouchableOpacity
              style={styles.removeButton}
              onPress={() => removeFromCart(item.id)}
            >
              <Text style={styles.buttonText}>
                Remove
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>
          Total Price: ₱{totalPrice}
        </Text>
      </View>
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
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 10,
  },
  subheading: {
    fontSize: 16,
    color: '#2563eb',
    marginBottom: 15,
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
  details: {
    color: '#64748b',
    marginTop: 5,
  },
  price: {
    color: '#16a34a',
    marginTop: 5,
    fontWeight: 'bold',
  },
  removeButton: {
    backgroundColor: '#dc2626',
    padding: 10,
    borderRadius: 7,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  empty: {
    textAlign: 'center',
    color: '#64748b',
    marginTop: 30,
  },
  totalContainer: {
    backgroundColor: '#ffffff',
    padding: 18,
    borderRadius: 10,
    marginTop: 10,
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e293b',
  },
});
