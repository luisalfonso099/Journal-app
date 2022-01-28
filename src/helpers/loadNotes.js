import { db, collection, getDocs } from "../firebase/firebase-config";

export const loadNotes = async (uid) => {
  const noteSnap = await getDocs(collection(db, `${uid}/journal/notes`));
  const notes = noteSnap.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });

  return notes;
};
