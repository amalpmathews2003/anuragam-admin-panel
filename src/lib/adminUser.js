import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../components/firebase/firebase";

export async function setAdminUserData(user) {
  const docData = {
    name: user.displayName,
    email: user.email,
  };

  await setDoc(doc(db, "adminUser", user.uid), docData, { merge: true });
}

export async function isAdminUser(user) {
  const docRef = doc(db, "adminUser", user.uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    // console.log(docSnap.data());
    if (docSnap.data().isAdmin) return true;
    return false;
  } else {
    alert("no such document");
  }
}
