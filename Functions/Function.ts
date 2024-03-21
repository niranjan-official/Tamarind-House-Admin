import { auth, db } from "@/firebase/config";
import { ADMIN, STATUS, StudentData } from "@/types";
import { signInWithEmailAndPassword } from "firebase/auth";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";

export const Login = async (email: string, password: string) => {
  let status: STATUS = {
    success: false,
    error: null,
  };
  try {
    await signInWithEmailAndPassword(auth, email, password);
    status.success = true;
  } catch (err: any) {
    status.error = err.message;
  }
  return status;
};
export const checkAdmin = async (email: string) => {
  let status: ADMIN = {
    admin: false,
    error: null,
  };
  try {
    const docRef = doc(db, "admin", email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const adminData = docSnap.data();
      localStorage.setItem("adminData", JSON.stringify(adminData));
      status.admin = true;
      console.log("Document data:", docSnap.data());
    }
  } catch (err: any) {
    status.error = err.message;
  }
  return status;
};
export const getAllUsers = async () => {
  let usersData: StudentData[] = [];
  try {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      const userData: StudentData = {
        id: doc.data().id,
        year: doc.data().year,
        program: doc.data().program,
        gender: doc.data().gender,
        email: doc.data().email,
      };
      usersData.push(userData);
    });
  } catch (err: any) {
    alert("Error: " + err.message);
  }
  return usersData;
};

export const addUser = async (userData: StudentData) => {
  let status: STATUS = {
    success: false,
    error: null,
  };
  try {
    const date = new Date();
    await setDoc(doc(db, "users", userData.email), {
      email: userData.email,
      id: userData.id,
      year: userData.year,
      program: userData.program,
      gender: userData.gender,
      dateOfReg: date,
    });
    status.success = true;
  } catch (err: any) {
    alert("Error: " + err.message);
    status.error = err.message;
  }
  return status;
};

export const getAllCurrentTokens = async () => {
  let Tokens: any[] = [];
  try {
    const querySnapshot = await getDocs(collection(db, "tokens"));
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      Tokens.push({ id: doc.id, data: doc.data() });
    });
  } catch (err: any) {
    alert("Error: " + err.message);
  }
  return Tokens;
};
export const DispenseStudentToken = async (token: string | number ) => {
  let status: STATUS = {
    success: false,
    error: null,
  };
  try {
    const washingtonRef = doc(db, "tokens", token.toString());
    const date = new Date();
    await updateDoc(washingtonRef, {
      isCollected: true,
      Printing_time: getTimeFromDate(date)
    });
    status.success = true;
  } catch (err: any) {
    status.error = err.message;
  }
  return status
};
export const onDeleteUser = async (email: string) => {
  let status: STATUS = {
    success: false,
    error: null,
  };
  try {
    console.log("Email: " + email);

    await deleteDoc(doc(db, "users", email));
    status.success = true;
  } catch (err: any) {
    alert("Error: " + err.message);
    status.error = err.message;
  }
  return status;
};

export const changeWarden = async (gender: string, newEmail: string) => {
  try {
    const washingtonRef = doc(db, "extras", "warden");
    if (gender === "boys") {
      await updateDoc(washingtonRef, {
        boys: newEmail,
      });
    } else if (gender === "girls") {
      await updateDoc(washingtonRef, {
        girls: newEmail,
      });
    }
  } catch (err: any) {
    alert("Data unchanged: " + err.message);
  }
};
export const getTimeFromDate = (date : Date) => {
  const newDate = new Date(date);
  const hours = newDate.getHours();
  const minutes = newDate.getMinutes();

  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;

  const period = hours < 12 ? "AM" : "PM";

  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

  return `${formattedHours}:${formattedMinutes} ${period}`;
};
