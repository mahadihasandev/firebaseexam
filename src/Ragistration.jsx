import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, set } from "firebase/database";


function Ragistration() {
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const [name,setNmae]=useState('')

console.log(password);
const provider = new GoogleAuthProvider();
const auth = getAuth();
let navigate=useNavigate()
let handlemil=(e)=>{
  setEmail(e.target.value);
  
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

let handlpassword=(e)=>{
  setPassword(e.target.value);
  
}

let handlname=(e)=>{
  setNmae(e.target.value);
  
}

let hndaleReg=()=>{
createUserWithEmailAndPassword(auth, email, password)
  .then((user) => {
    setEmail('')
    setPassword('')
    setNmae('')
  
        navigate("/login");
        const db = getDatabase();
        set(ref(db, "userslist/" + user.user.uid), {
          username: user.user.displayName,
          email: user.user.email,
          
        });
    
     
  })
  .catch((error) => {
    const errorCode = error.code;
    console.log(errorCode);
    
    
   
  });
}

  return (
    <div className='flex justify-center items-center bg-gradient-to-l from-gray-700 to-sky-900 h-[100vh] pt-0'>
    <div className='flex p-28 text-center 
    rounded-2xl bg-gradient-to-r from-gray-700 to-sky-500 
    flex-col items-center gap-10 border-5 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]'>
      
      <h1 className="font-serif font-extrabold text-3xl text-white">Ragistration</h1>
      <button className='border-4 p-5 rounded-lg bg-yellow-300 font-bold' onClick={handleGoogleAuth} >Signup with google</button>
      <label ><div className="text-white font-semibold text-lg font-sans">Email:</div>
        <input value={email} onChange={handlemil} className="bg-slate-300 rounded-xl h-10 w-60 px-5 text-base" type="text" />
        
      </label>
      <label ><div className="text-white font-semibold text-lg font-sans ">Password:</div>
        <input value={password} onChange={handlpassword} className="bg-slate-300 rounded-xl h-10 w-60 px-5 text-base" type="text" />
      </label>
      
       <label  ><div className="text-white font-semibold text-lg font-sans px-5">Name:</div>
        <input value={name} onChange={handlname} className="bg-slate-300 rounded-xl h-10 w-60 text-base" type="text" />
       </label>
       <button className="border px-7 py-4 rounded-xl bg-amber-200 font-sans font-semibold text-lg" onClick={hndaleReg}>Ragistration</button>

    </div>
    </div>
  )
}

export default Ragistration