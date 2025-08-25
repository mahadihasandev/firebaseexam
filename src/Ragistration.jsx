import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";


function Ragistration() {
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const [name,setNmae]=useState('')

console.log(password);

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
    <div className='flex text-center rounded-2xl bg-teal-200 flex-col justify-center m-[500px] py-20 items-center gap-10 border-5 mt-56'>
      
      <h1 className="font-serif font-extrabold text-3xl">Ragistration</h1>
      <label className="" ><div>Email:</div>
        <input value={email} onChange={handlemil} className="bg-slate-300 rounded-xl h-10 w-60" type="text" />
        
      </label>
      <label ><div>Password:</div>
        <input value={password} onChange={handlpassword} className="bg-slate-300 rounded-xl h-10 w-60" type="text" />
      </label>
      
       <label  ><div>Name:</div>
        <input value={name} onChange={handlname} className="bg-slate-300 rounded-xl h-10 w-60" type="text" />
       </label>
       <button className="border h-10 w-[120px] rounded-lg bg-amber-200" onClick={hndaleReg}>Ragistration</button>

    </div>
  )
}

export default Ragistration