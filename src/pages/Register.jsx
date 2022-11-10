import React, { useState } from 'react'
import Add from "../img/addAvatar.png"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 


const Register = () => {
  const[err, setErr] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].value;

    try {
const res = await createUserWithEmailAndPassword(auth, email, password);
const storageRef = ref(storage, displayName);

const uploadTask = uploadBytesResumable(storageRef, file);

uploadTask.on(
  (error) => {
    setErr(true);
    // Handle unsuccessful uploads
  }, 
  () => {
    getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
      await updateProfile(res.user, {
        displayName,
        photoURL: downloadURL,
      });
    });
  }
);
    } catch (err) {
      setErr(true);
    }
  }
  return (
    <div className='formContainer'>
        
        <div className='formWrapper'>
            <span className='logo'>FiveSec</span>
            <span className='title'>Register</span>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Display name' />
                <input type="email" placeholder='Email'/>
                <input type="password" placeholder='Password' />
                <input style={{display:"none"}}type="file" id='file'/>
                <label htmlFor="file">
                    <img src={Add} alt="" />
                    <span>Upload Profile Picture</span>
                </label>
                <button>Sign Up</button>
              {err && <span className='error'>Something went wrong!</span>}
            </form>
            <p>You do have an account?</p>
        </div>
    </div>
  )
};

export default Register;
