import { db } from "../components/firebase/firebase";
import { doc, updateDoc } from "firebase/firestore";

export async function updateSubmission(submissionId,val) {
  const submission = doc(db, "submissions", submissionId);

  await updateDoc(submission, {
    confirm: `${val}`,
  });
}
