import { auth, db } from "@/firebase/config";
import { STATUS, StudentData } from "@/types";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";

export const getAllUsers = async () => {
  let usersData : StudentData[] = [];
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
  let status : STATUS = {
    success: false,
    error: null
  }
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
    status.error = err.message
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

export const onDeleteUser = async (email: string) => {
  let status : STATUS = {
    success: false,
    error: null
  }
  try {
    console.log("Email: "+email);
    
    await deleteDoc(doc(db, "users", email));
    status.success = true;
 
  } catch (err: any) {
    alert("Error: " + err.message);
    status.error = err.message;
  }
  return status;
};

export const changeWarden = async(gender :string, newEmail : string) =>{
    try{
        const washingtonRef = doc(db, "extras", "warden");
        if(gender === "boys"){
            await updateDoc(washingtonRef, {
                boys: newEmail
              });
        }else if(gender === "girls"){
            await updateDoc(washingtonRef, {
                girls: newEmail
              });
        }
    }catch(err:any){
        alert("Data unchanged: " + err.message);
    }
}
