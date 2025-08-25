import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";


function Ragistration() {
const [email,setEmail]=useState([])
const [password,setPassword]=useState([])
const [name,setNmae]=useState([])
const [ message,setMessage]=useState()

const auth = getAuth();
let navigate=useNavigate()
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
     setTimeout(() => {
              navigate("/login");
            }, 1000);
  })
  .catch((error) => {
    const errorCode = error.code;
    
    // ..
  });
}

  return (
    <div className='flex flex-col justify-center items-center gap-10 border-5 mt-56'>
      {message && <p className="mt-3">{message}</p>}
      <label >Email:
        <input onChange={handlemil} className="bg-slate-300" type="text" />
        
      </label>
      <label>paswowed:
        <input onChange={handlpassword} className="bg-slate-300" type="text" />
      </label>
      
       <label>name:
        <input onChange={handlname} className="bg-slate-300" type="text" />
       </label>
       <button className="border h-10 w-[120px] rounded-lg bg-amber-200" onClick={hndaleReg}>Ragistration</button>

    </div>
  )
}

export default Ragistration