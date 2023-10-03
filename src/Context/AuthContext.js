import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  setDoc,
  doc,
  updateDoc,
  arrayUnion,
  collection,
  addDoc,
  getDoc,
} from "firebase/firestore";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  async function addUserToFirestore(email, password) {
    try {
      const userDocRef = doc(db, "users", email); // Use the email as the document ID
      await setDoc(userDocRef, {
        email: email,
        password: password,
        savedShows: [],
      });
      console.log("User document created with ID: ", email);
    } catch (error) {
      console.error("Error adding user document: ", error);
    }
  }

  async function signUp(email, password) {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await addUserToFirestore(email, password);
    } catch (error) {
      console.error("Error signing up: ", error);
    }
  }

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    return signOut(auth);
  }

  async function addSavedShowToUser(userId, showData) {
    try {
      if (!showData) {
        console.error("Invalid showData: showData is undefined or null.");
        return;
      }

      const userDocRef = doc(db, "users", userId);

      // Check if the document exists before updating
      const userDocSnapshot = await getDoc(userDocRef);

      if (userDocSnapshot.exists()) {
        await updateDoc(userDocRef, {
          savedShows: arrayUnion(showData),
        });
        console.log("Saved show added to user's savedShows.");
      } else {
        console.error("User document does not exist for userId: ", userId);
      }
    } catch (error) {
      console.error("Error adding saved show to user: ", error);
    }
  }

  async function getDocumentIdsFromCollection(collectionName) {
    try {
      const collectionRef = collection(db, collectionName);
      const querySnapshot = await getDoc(collectionRef);
      const documentIds = [];
      querySnapshot.forEach((doc) => {
        documentIds.push(doc.id);
      });
      return documentIds;
    } catch (error) {
      console.error("Error getting document IDs: ", error);
      return [];
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signUp,
        logIn,
        logOut,
        user,
        addSavedShowToUser,
        getDocumentIdsFromCollection,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function UserAuth() {
  return useContext(AuthContext);
}
