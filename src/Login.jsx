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
    
    <div className='flex text-center rounded-2xl bg-teal-200 flex-col justify-center m-[500px] py-20 items-center gap-10 border-5 mt-56'>
      <h1 className="font-serif font-extrabold text-3xl">Login</h1>
      <button className='border-4 p-5 rounded-lg bg-yellow-300 font-bold' onClick={handleGoogleAuth} >Login with google</button>
       <div className='border-5'>
      <label className='pr-5'><div>Login:</div> 
        <input value={email} onChange={handleEmail} className="bg-slate-300 rounded-xl h-10 w-60" type="text" />
        
      </label >
      <label className='pr-5'><div>Password:</div>
        <input value={password} onChange={handlePassword} className="bg-slate-300 rounded-xl h-10 w-60" type="text" />
      </label>
    <div>
       <button  className="border mt-10 h-10 w-[120px] rounded-lg bg-amber-200"  onClick={handlelogin}>login</button>
</div>
    </div>
    </div>
  )
}

export default Login