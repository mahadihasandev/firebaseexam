import React from 'react'
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

function Login() {
 const provider = new GoogleAuthProvider();
  
  let handleGoogleAuth=()=>{
   
    

const auth = getAuth();
signInWithPopup(auth, provider)
  .then((user) => {
  
  }).catch((error) => {
    
    const errorCode = error.code;
    
  });

  }
  return (
    <div>
      <button className='border-4 m-10' onClick={handleGoogleAuth} >loginwithe google</button>
       <div className='border-5'>
      <label>login
        <input className="bg-slate-300" type="text" />
        
      </label>
      <label>paswowed
        <input className="bg-slate-300" type="text" />
      </label>
    
       <button>Ragistration</button>

    </div>
    </div>
  )
}

export default Login