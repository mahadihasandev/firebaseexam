import React, { useState } from 'react'
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Login() {
 const provider = new GoogleAuthProvider();
const [password,setPassword]=useState([])
const [email,setEmail]=useState([])
let navigate=useNavigate()

let handleEmail=(e)=>{
setEmail(e.target.value)
}

let handlePassword=(e)=>{
setPassword(e.target.value)
}
 let handlelogin=()=>{
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    setTimeout(() => {
              navigate("/home");
            }, 1000);

 
  })
  .catch((error) => {
    const errorCode = error.code;
  });

 }
  
  let handleGoogleAuth=()=>{
   
    

const auth = getAuth();
signInWithPopup(auth, provider)
  .then((user) => {
  setTimeout(() => {
              navigate("/Home");
            }, 1000);
  }).catch((error) => {
    
    const errorCode = error.code;
    
  });

  }
  return (
    <div>
      <button className='border-4 m-10 bg-yellow-300' onClick={handleGoogleAuth} >loginwithe google</button>
       <div className='border-5'>
      <label>login
        <input onChange={handleEmail} className="bg-slate-300" type="text" />
        
      </label>
      <label>paswowed
        <input onChange={handlePassword} className="bg-slate-300" type="text" />
      </label>
    
       <button onClick={handlelogin}>login</button>

    </div>
    </div>
  )
}

export default Login