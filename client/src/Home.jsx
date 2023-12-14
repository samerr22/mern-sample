import { useState } from "react";
import Sea from "/image/search.png";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";

function ghome() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        setError(true);
        return;
      }

      navigate("/sign-in");
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-300">
      
      


      <OAuth/>
      <div className=" absolute bg-slate-50 h-[650px] w-[450px]    rounded-xl shadow-md lg:ml-[20px]">
        <h1 className="absolute ml-[180px] mt-4 text-2xl">Sing up</h1>
        <p className="absolute text-sm text-gray-500  w-[350px] ml-[40px] mt-[50px] ">
          crate your Specify account with your work email to sync
        </p>
        <p className="absolute text-sm text-gray-500  w-[350px] ml-[65px] mt-[65px] ">
          all your design data across your design system
        </p>

       
        <hr className="absolute w-[170px] bg-black mt-[170px] ml-[20px]" />
        <p className="absolute text-slate-400 uppercase mt-[160px] ml-[205px] text-[14px]">
          or
        </p>
        <hr className="absolute w-[170px] bg-black mt-[170px] ml-[240px]" />
        <form onSubmit={handleSubmit}>
          <label className="absolute text-slate-600 font-semibold mt-[190px] ml-[20px]">
            UserName
          </label>
          <input
            className="absolute w-[400px] h-[45px] ml-[20px] mt-[220px] border-2 rounded-lg hover:bg-slate-100 focus:outline-none"
            type="text"
            placeholder=" UserName"
            id="username"
            onChange={handleChange}
          />
          <label className="absolute text-slate-600 font-semibold mt-[280px] ml-[20px]">
            Email
          </label>
          <input
            className="absolute w-[400px] h-[45px] ml-[20px] mt-[310px] border-2 rounded-lg hover:bg-slate-100 focus:outline-none"
            type="email"
            placeholder=" Enter Your Email"
            id="email"
            onChange={handleChange}
          />
          <label className="absolute text-slate-600 font-semibold mt-[370px] ml-[20px]">
            Password
          </label>
          <input
            className="absolute w-[400px] h-[45px] ml-[20px] mt-[400px] border-2 rounded-lg hover:bg-slate-100 focus:outline-none"
            type="password"
            placeholder=" Enter your password"
            id="password"
            onChange={handleChange}
          />

          <button
            disabled={loading}
            className="absolute w-[400px] h-[45px] mt-[480px] ml-[20px] bg-blue-500 rounded-lg text-white uppercase hover:opacity-95 disabled:opacity-80"
          >
            {loading ? "SignUp..." : "Sign Up"}
          </button>
        </form>

        <p className="absolute font-semibold ml-[20px] mt-[550px] text-sm text-slate-700">
          By continuing, you're agreeing to our
        </p>
        <p className="absolute font-semibold ml-[260px] mt-[550px] text-blue-500 text-sm cursor-pointer hover:underline">
          Terms and Privacy policy.
        </p>
      </div>
   

      <p className="absolute font-semibold ml-[-40px] mt-[600px] text-sm text-slate-700">
        Already have an account
      </p>
       <Link to="/sign-in">
      <p className="absolute font-semibold ml-[65px] mt-[457px] text-sm text-blue-500 cursor-pointer hover:underline">
        Log in
      </p>
      </Link>
      <p className="text-red-700 mt-[530px] absolute font-semibold">
        {" "}
        {error && "Something went worong!"}
      </p>
    </div>
  );
}
export default ghome;
