import Sea from "/image/search.png";

import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../src/firebase";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../src/redux/user/userSlice";
import { useNavigate } from "react-router-dom";

export default function OAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);
      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      const data = await res.json();
      dispatch(signInSuccess(data));

      navigate("/homee");
    } catch (error) {
      console.log(" could not login with goolge", error);
    }
  };

  return (
   
   
    
    
      <button
        type="button"
        onClick={handleGoogleClick}
        className=" w-[400px] h-[45px]    border-2 rounded-lg hover:bg-slate-100 focus:outline-none "
        style={{ zIndex: '100', marginTop:'-380px',    }}
        
       
      >
        <img className="absolute "
        style={{width:'18px', marginTop:'3px', marginLeft:'100px' }}
        
        src={Sea} />
        
        Coutinue with Google
      </button>
   
     
   
  );
}
