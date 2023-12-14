import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { signInFailure, signInSuccess, signInStart } from "./redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import OAuth from "../components/OAuth";

function ghome() {
  const [formData, setFormData] = useState({});
  const {loading, error} = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      
      if (data.success === false) {
      dispatch(signInFailure(data));
        return;
      }
      dispatch(signInSuccess(data));
      navigate('/homee')
    } catch (error) {
      dispatch(signInFailure(error));
    }
  };

  return (
    <div className="  flex flex-col items-center justify-center h-screen bg-slate-300 ">
     
      <OAuth/>
      <div className=" absolute bg-slate-200 h-[650px] w-[450px]    rounded-xl shadow-sm ">
        <h1 className="absolute ml-[180px] text-2xl mt-2">Sing in</h1>
        <p className="absolute text-sm text-gray-500  w-[350px] ml-[40px] mt-[40px] ">
          crate your Specify account with your work email to sync
        </p>
        <p className="absolute text-sm text-gray-500  w-[350px] ml-[65px] mt-[60px] ">
          all your design data across your design system
        </p>

        
        <hr className="absolute w-[170px] bg-black mt-[170px] ml-[20px]" />
        <p className="absolute text-slate-400 uppercase mt-[160px] ml-[205px] text-[14px]">
          or
        </p>
        <hr className="absolute w-[170px] bg-black mt-[170px] ml-[240px]" />
        <form onSubmit={handleSubmit}>
          
          
          <label className="absolute text-slate-600 font-semibold mt-[200px] ml-[20px]">
            Email
          </label>
          <input
            className="absolute w-[400px] h-[45px] ml-[20px] mt-[230px] border-2 rounded-lg hover:bg-slate-100 focus:outline-none"
            type="email"
            placeholder=" Enter Your Email"
            id="email"
            onChange={handleChange}
          />
          <label className="absolute text-slate-600 font-semibold mt-[290px] ml-[20px]">
            Password
          </label>
          <input
            className="absolute w-[400px] h-[45px] ml-[20px] mt-[320px] border-2 rounded-lg hover:bg-slate-100 focus:outline-none"
            type="password"
            placeholder=" Enter your password"
            id="password"
            onChange={handleChange}
          />

          <button
            disabled={loading}
            className="absolute w-[400px] h-[50px] mt-[400px] ml-[20px] bg-blue-500 rounded-lg text-white uppercase hover:opacity-95 disabled:opacity-80"
          >
            {loading ? "Signin..." : "Sign in"}
          </button>
        </form>

        <p className="absolute font-semibold ml-[20px] mt-[470px] text-sm text-slate-700">
          By continuing, you're agreeing to our
        </p>
        <p className="absolute font-semibold ml-[260px] mt-[470px] text-blue-500 text-sm cursor-pointer hover:underline">
          Terms and Privacy policy.
        </p>
      </div>
      <p className="absolute font-semibold ml-[-50px] mt-[380px] text-sm text-slate-700">
        Dont have an account
      </p>
       <Link to="/">
      <p className="absolute font-semibold ml-[50px] mt-[348px] text-sm text-blue-500 cursor-pointer hover:underline">
        Sign Up
      </p>
      </Link>
      <p className="text-red-500 mt-[530px] absolute ml-[160px] font-semibold">
        {" "}
        {error ? error.message ||  "Something went worong!" : ''}
      </p>
    </div>
  );
  }
export default ghome;
