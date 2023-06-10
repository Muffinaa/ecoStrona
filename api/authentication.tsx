"use client";
import { auth } from "@/config/config-example"
import { signInWithEmailAndPassword, createUserWithEmailAndPassword,onAuthStateChanged, User } from "firebase/auth";

export async function login(email:string, password:string) {
    signInWithEmailAndPassword(auth, email, password);

}

export async function register(email:string, password:string) {
    createUserWithEmailAndPassword(auth, email, password);
}

export function onAuthChanged( callback: (user: User | null) => void) {
    onAuthStateChanged(auth,callback);

}