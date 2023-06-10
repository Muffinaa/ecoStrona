
import { db } from "@/config/config";
import { Product } from "@/components/ProductCard";
import {
  collection,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";

async function getProducts() {
    const products: Product[] = [];
    const querySnapshot = await getDocs(collection(db, "products"));
    querySnapshot.forEach((doc) => {
        products.push({ id: doc.id, ...doc.data() } as any);
    });
    return products;
}

async function getProduct(id:string){
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() } as any;
    } else {
        return null;
    }
}

export { getProduct, getProducts };