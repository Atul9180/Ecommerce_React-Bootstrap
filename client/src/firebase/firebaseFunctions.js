import axios from "axios";
import {
  collection,
  setDoc,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  getDocs,
} from "firebase/firestore";
import { firestore } from "./FirebaseConfig";

export const addUserToFirestore = async (userData) => {
  try {
    //created collection
    const usersCollectionRef = collection(firestore, "users");

    // Use the localId from userData as the document ID
    const userDocRef = doc(usersCollectionRef, userData.localId);

    // Set user data in Firestore with the document ID as localId
    await setDoc(userDocRef, userData);

    console.log("User added with ID: ", userData.localId);
  } catch (error) {
    console.error("Error adding user to Firestore: ", error);
  }
};

// Function to add cart data to Firestore within the user's document
export const addCartToFirestore = async (localId, cartItems) => {
  try {
    //refering to collection doc , where to store:
    const userDocRef = doc(firestore, "users", localId);

    // Reference to a 'cart' subcollection inside the user's document
    const cartCollectionRef = collection(userDocRef, "cart");

    const addedItemIds = [];

    // Loop through cart items and add them to the 'cart' subcollection
    for (const item of cartItems) {
      const docRef = await addDoc(cartCollectionRef, item);
      addedItemIds.push({ ...item, refId: docRef.id }); // Storing the document ID with the item data
    }

    console.log("Cart items added to Firestore.", addedItemIds);
    return addedItemIds; // Return the added cart items with IDs
  } catch (error) {
    console.error("Error adding cart items to Firestore: ", error);
    throw error;
  }
};

// Function to update a specific cart item within Firestore
export const updateCartItemInFirestore = async (
  localId,
  itemId,
  updatedItem
) => {
  try {
    const userDocRef = doc(firestore, "users", localId);
    const cartItemDocRef = doc(userDocRef, "cart", itemId);

    await updateDoc(cartItemDocRef, updatedItem);

    console.log("Cart item updated in Firestore.");
  } catch (error) {
    console.error("Error updating cart item in Firestore: ", error);
  }
};

// Function to delete a specific cart item from Firestore
export const deleteCartItemFromFirestore = async (localId, itemId) => {
  try {
    const userDocRef = doc(firestore, "users", localId);

    const cartItemDocRef = doc(userDocRef, "cart", itemId);

    await deleteDoc(cartItemDocRef);

    console.log("Cart item deleted from Firestore.");
  } catch (error) {
    console.error("Error deleting cart item from Firestore: ", error);
  }
};

// Function to fetch cart items from Firestore
export const fetchCartFromFirestore = async (localId) => {
  try {
    const userDocRef = doc(firestore, "users", localId);
    const cartCollectionRef = collection(userDocRef, "cart");

    // Fetch cart items from the 'cart' subcollection
    const snapshot = await getDocs(cartCollectionRef);
    const cartItems = snapshot.docs.map((doc) => ({
      refId: doc.id,
      ...doc.data(),
    }));

    console.log("Cart items fetched from Firestore: ", cartItems);
    return cartItems;
  } catch (error) {
    console.error("Error fetching cart items from Firestore: ", error);
    return [];
  }
};

//fetching products data:
export const fetchData = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
