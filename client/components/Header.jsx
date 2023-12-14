import React from "react";
import { Link, useAsyncError } from "react-router-dom";
import { useSelector } from 'react-redux';

export default function () {
  const {currentUser} = useSelector((state) => state.user);

  return (
    <div className= " bg-slate-300">
      <div className=" flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/homee">
          <h1 className="font-bold  ">HOME</h1>
        </Link>
        <ul className="flex gap-4">
          
          <Link to="/profile">

            {currentUser ? (
               <img src={currentUser.profilePicture} alt="profile" className="rounded-full object-cover " style={{width:'40px', }} />
            ):(
              <li >Sing In</li>
            )}
            
          </Link>
          </ul>
      </div>
    </div>
  );
}