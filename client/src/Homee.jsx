import React from "react";

export default function Homee() {
  return (
    <div className="h-screen bg-slate-300">
      <p className="absolute text-gray-600 font-bold text-sm mt-20  w-[450px] ml-4 lg:w-[800px] lg:ml-96">
        This is a MERN(MongoDB,EXpress,React,Nodejs) stack appllication with
        authentication. it allow users to sign up, login and log out, and
        provides access to protected routes only for authenticated users.
      </p>
      <p className="absolute text-gray-600 font-bold text-sm mt-40  w-[450px] ml-4 lg:w-[800px] lg:ml-96">
       The front-end the application is built with React and uses React Router for client-side routing.
       The back-end is built with Node.js and Express and uses MongoDB as the 
       database.Authentication is implemented using JSON Web Tokens (JWT), ReduxToolkite and firebase.
      </p>
      <p className="absolute text-gray-600 font-bold text-sm mt-72  w-[450px] ml-4 lg:w-[800px] lg:ml-96">
       This application is intended  as a starting point for building full-stack web aplications with
       authentication using the MERN stack. Feel free to use it as a template for your own projects!
      </p>
    </div>
  );
}
