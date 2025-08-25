import React, { useEffect, useState } from 'react'
import { getDatabase, ref, onValue } from "firebase/database";

function Home() {
const db = getDatabase();
const [userData,setUserData]=useState([])


useEffect(()=>{
  let array=[]
const starCountRef = ref(db, 'userslist/');
onValue(starCountRef, (snapshot) => {
 
  snapshot.forEach(item=>{
    
    array.push({...item.val()})
    
  })
  setUserData(array)
});
},[])

  return (
    <div className='mt-20 text-center '>
      <h1 className="font-serif font-extrabold text-3xl pb-10">Home</h1>
      {
        userData.map((item)=>(
            <div className='bg-sky-200 flex w-1/4 justify-between items-center m-auto p-8 rounded-2xl'>
       <div> 
        <h3 className='font-semibold'>{item.username}</h3>
        <h2 className='font-semibold'>{item.email}</h2>
        </div>
        <img className='rounded-full' src={item.photo} alt="image" />
      </div>
        ))
      }
      
    </div>
  )
}

export default Home