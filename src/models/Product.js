const products = [
  { id: "1", name: "Laptop Dell XPS 13", price: 1200, category: ["Electronics", "Computers"] },
  { id: "2", name: "iPhone 14", price: 999, category: ["Electronics", "Smartphones"] },
  { id: "3", name: "Auriculares Sony WH-1000XM5", price: 350, category: ["Electronics", "Audio"] },
  { id: "4", name: "Cafetera Nespresso", price: 180, category: ["Home Appliances", "Kitchen"] },
  { id: "5", name: "Silla Gamer Razer", price: 250, category: ["Furniture", "Gaming"] },
  { id: "6", name: "Libro: Clean Code", price: 40, category: ["Books", "Programming"] },
  { id: "7", name: "Camiseta Nike Dri-FIT", price: 30, category: ["Clothing", "Sportswear"] },
  { id: "8", name: "Mochila North Face", price: 90, category: ["Accessories", "Travel"] },
  { id: "9", name: "Monitor LG UltraWide 34\"", price: 500, category: ["Electronics", "Monitors"] },
  { id: "10", name: "Teclado Mecánico Logitech G Pro", price: 120, category: ["Electronics", "Gaming"] }
];

import {db} from './firebase.js';
import { collection, getDocs, doc, getDoc, addDoc } from 'firebase/firestore';

const productCollection = collection(db, "products");

export const getAllProducts = async () => {
    try {
        const snapshot = await getDocs(productCollection);
        return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.log(error);
    }
};

export const getProductById = async (id) => {
    try {
        const productRef = doc(productCollection, id);
        const snapshot = await getDoc(productRef);
        return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null;
    } catch (error) {
        console.log(error);
    }
};

export const createProduct = async (data) => {
    try {
        const docRef = await addDoc(productCollection, data);
        return {id: docRef.id, ...data};
    } catch (error) {
        console.log(error);
    }
};

export const deleteProduct = async (id) => {
    try {
        const productRef = doc(productCollection, id);
        const snapshot = await getDoc(productRef);

        if (!snapshot.exists()) {
            return false;
        }

        await deleteDoc(productRef);
        return true;
    } catch (error) {
        console.log(error);
    }
}
