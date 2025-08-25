import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


function Ragistration() {
const [email,setEmail]=useState([])
const [password,setPassword]=useState([])
const [name,setNmae]=useState([])
const [ message,setMessage]=useState()

const auth = getAuth();

let handlemil=(e)=>{
  setEmail(e.target.value);
  
}

let handlpassword=(e)=>{
  setPassword(e.target.value);
  
}

let handlname=(e)=>{
  setNmae(e.target.value);
  
}

let hndaleReg=()=>{
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    setEmail('')
    setPassword('')
    setNmae('')
     setMessage("User created successfully!");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}

  return (
    <div className='border-5'>
      message && <p className="mt-3">{message}</p>
      <label>Emaile
        <input onChange={handlemil} className="bg-slate-300" type="text" />
        
      </label>
      <label>paswowed
        <input onChange={handlpassword} className="bg-slate-300" type="text" />
      </label>
      
       <label>name
        <input onChange={handlname} className="bg-slate-300" type="text" />
       </label>
       <button onClick={hndaleReg}>Ragistration</button>

    </div>
  )
}

export default Ragistration