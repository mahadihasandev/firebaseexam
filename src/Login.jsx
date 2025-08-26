import React, { useState } from 'react'
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, push, ref, set } from "firebase/database";

function Login() {
 const provider = new GoogleAuthProvider();
const [password,setPassword]=useState([])
const [email,setEmail]=useState([])
let navigate=useNavigate()
const auth = getAuth();
let handleEmail=(e)=>{
setEmail(e.target.value)
}

let handlePassword=(e)=>{
setPassword(e.target.value)
}
 let handlelogin=()=>{
    signInWithEmailAndPassword(auth, email, password)
  .then((user) => {
    navigate("/home");
  })
  .catch((error) => {
    const errorCode = error.code;
  });

 }
  
  let handleGoogleAuth=()=>{
const auth = getAuth();
signInWithPopup(auth, provider)
  .then((user) => {
   
         navigate("/Home");
        const db = getDatabase();
        set(ref(db, "userslist/" + user.user.uid), {
          username: user.user.displayName,
          email: user.user.email,
          photo: user.user.photoURL,
        })
  
  }).catch((error) => {
    
    const errorCode = error.code;
    
  });

  }
  return (
    <div className='flex justify-center items-center bg-gradient-to-l from-gray-700 to-sky-900 h-[100vh] pt-0'>
    <div className='flex p-28 text-center rounded-2xl 
    bg-gradient-to-r from-gray-700 to-sky-500 flex-col 
    items-center gap-10 border-5 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]'>
      <h1 className="font-serif font-extrabold text-3xl text-white">Login</h1>
      <button className='border-4 p-5 rounded-lg bg-yellow-300 font-bold' onClick={handleGoogleAuth} >Login with google</button>
       <div className='border-5 flex flex-col gap-5'>
      <label className='pr-5 '><div className='text-white  text-xl font-extrabold font-serif'>Login:</div> 
        <input value={email} onChange={handleEmail} className="bg-slate-300 rounded-xl text-base font-semibold h-10 w-60 px-5" type="text" />
        
      </label >
      <label className='pr-5 '><div className='text-white text-xl font-extrabold font-serif'>Password:</div>
        <input value={password} onChange={handlePassword} className="bg-slate-300 text-base font-semibold rounded-xl h-10 w-60 px-5" type="text" />
      </label>
    <div>
       <button  className="border font-semibold text-lg mt-10 h-10 w-[120px] rounded-lg bg-amber-200"  onClick={handlelogin}>Login</button>
</div>
    </div>
    </div>
    </div>
  )
}

export default Login