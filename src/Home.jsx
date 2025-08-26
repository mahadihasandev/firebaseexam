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
    array.push(item.val())    
  })
  setUserData(array)
});
},[])

  return (
     
    <div className='flex flex-col justify-center items-center bg-gradient-to-l from-gray-700 to-sky-900 h-[100vh]'>
      <h1 className="font-serif font-extrabold text-5xl pb-10 text-white">Home</h1>
      {
        userData.map((item)=>( 
        <div className='bg-gradient-to-r from-gray-700 to-sky-500 mt-5 flex w-1/4 justify-between items-center m-5 p-8 rounded-2xl'>
       <div> 
        <h3 className='font-bold text-white'>{item.username}</h3>
        <h2 className='font-bold text-white'>{item.email}</h2>
        </div>
        <img className='rounded-full' src={item.photo} alt="image" />
      </div>
        ))
      }
      
    </div>
  )
}

export default Home