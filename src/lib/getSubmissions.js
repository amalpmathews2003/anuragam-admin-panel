import { db } from "../components/firebase/firebase";
import { collection, query, where, onSnapshot } from "firebase/firestore";
export function getSubmissions(setSubmissions) {
  const q = query(collection(db, "submissions"), where("confirm", "!=", 1));
  const snapShot = onSnapshot(q, (querySnapshot) => {
    const list = [];
    querySnapshot.forEach((doc) => {
      list.push({ id: doc.id, ...doc.data() });
    });
    setSubmissions(list)
  });

}
export function getSubmissionsSongs(setSubmissions) {
  const q = query(collection(db, "songSubmissions"), where("confirm", "!=", 1));
  const snapShot = onSnapshot(q, (querySnapshot) => {
    const list = [];
    querySnapshot.forEach((doc) => {
      list.push({ id: doc.id, ...doc.data() });
    });
    setSubmissions(list)
  });

}
