import { AiFillHeart,AiOutlineTwitter,AiOutlineGoogle } from "react-icons/ai";
import { BiLogoFacebook,BiLogoGithub } from "react-icons/bi";

import lottie from "lottie-web";
import { defineElement } from "lord-icon-element";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../Api/AuthApi";
import { useState } from "react";
defineElement(lottie.loadAnimation);

const Login = () => {
  const nav = useNavigate();
  const [email,setEmail] = useState('waimin@gmail.com')
  const [password, setPassword] = useState('11111111')

  const [login]= useLoginMutation()

  const handleLogin=async (e) => {

    e.preventDefault()
    const user= {email,password}
    const data = await login(user)
    console.log(data)
    if(data?.data?.success == false) console.log(data?.data?.message)
      if(data?.data?.success == true){
        localStorage.setItem('token', data?.data?.token)
        nav('/')
      } 
        
  }
  

  
  return (
    <div className="w-full h-screen bg-[#f3f3f9]">
      <header className=" absolute w-full h-[280px] sm:h-[380px]">
        <img
          className="w-full h-full bg-center object-cover bg-no-repeat"
          src="https://themesbrand.com/velzon/html/default/assets/images/auth-one-bg.jpg"
          alt=""
        />
        <div className="w-full absolute inset-0 bg-gradient-to-t from-[#364574] to-[#405189] opacity-90"></div>
        <div className="absolute bottom-0 left-0 right-0 z-[1] pointer-events-none">
          <svg
            className=" fill-[#f3f3f9]"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 1440 120"
          >
            <path d="M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"></path>
          </svg>
        </div>
        <canvas
          width="1707"
          height="475"
          className="relative w-full h-full"
        ></canvas>
      </header>
      <main className="w-full relative -mt-8 sm:mt-0 z-10">
        <div className="mt-16 mb-16 text-center text-white">
          <div className="grid place-items-center mb-5">
            <img
              className="cur cursor-pointer"
              onClick={() => nav("/")}
              src="https://themesbrand.com/velzon/html/default/assets/images/logo-light.png"
              alt=""
            />
          </div>
          <p className="opacity-50">Premium Admin & Dashboard Template</p>
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <div className=" sm:w-[32rem] text-center bg-white mx-4 sm:mx-0 p-4 rounded shadow">
            <div className=" leading-5 tracking-wide p-4">
              <h3 className=" mb-2 font-semibold text-light-side-bar-color">
                Welcome Back!
              </h3>
              <p className="text-sm opacity-70">
                Sign in to continue to Velzon.
              </p>
            </div>

            <div className=" w-full flex flex-col items-center px-4">
              <div className="w-full text-start text-sm  px-1 sm:px-6 py-4 ">
                <div className="">
                  <label className="mb-2">Email</label>
                  <input
                  value={email}

                  onChange={(e) => setEmail(e.target.value)}
                    className=" w-full rounded border focus:outline-none border-gray-300 mb-4 p-2 mt-2"
                    type="text"
                    placeholder="Enter Email"
                  />
                </div>
                <div className="">
                  <div className="flex items-center justify-between">
                    <label className="mb-1">Password</label>
                    <label onClick={() => nav('/password-reset')} className="mb-1 cursor-pointer">Forget Password?</label>
                  </div>
                  <input
                  value={password}
                  
                  onChange={(e) => setPassword(e.target.value)}
                    className=" w-full rounded border focus:outline-none border-gray-300 mb-4 p-2 mt-2"
                    type="text"
                    placeholder="Enter Password"
                  />
                </div>
                <div className=" mb-6">
                    <input type="checkbox" id="check" />
                    <label className="pl-2" htmlFor="check">Remember me</label>
                </div>
                <button type="submit" onClick={handleLogin} className="w-full bg-green text-white py-2 rounded">
                  Sign in
                </button>
              </div>
              <p className="my-4 w-full relative before:content-[''] before:w-full before:h-[1px]  before:border before:border-[rgba(230,224,224,0.5)] before:border-dashed before:absolute before:top-[50%] before:left-[50%] before:translate-x-[-50%] before:translate-y-[-50%]">
                <span className="bg-white z-50 relative px-2">Sign in with</span>
              </p>
              <div className="flex items-center justify-center gap-2 mb-4 mt-2">
                <span className="bg-primary px-3 py-3 rounded-md">
                    <BiLogoFacebook className="text-white text-lg"/>
                </span>
                
                <span className="bg-danger px-3 py-3 rounded-md">
                    <AiOutlineGoogle className="text-white text-lg"/>
                </span>
                <span className="bg-dark px-3 py-3 rounded-md">
                    <BiLogoGithub className="text-white text-lg"/>
                </span>
                <span className="bg-blue px-3 py-3 rounded-md">
                    <AiOutlineTwitter className="text-white text-lg"/>
                </span>
              </div>
            </div>
          </div>
          <p className="p-4">
            Don't you have an account?
            <button onClick={() => nav('/signup')} className="underline text-light-side-bar-color">
              Sign up
            </button>
          </p>
        </div>
      </main>
      <footer className="w-full mt-28 sm:mt-96 lg:mt-0 pb-4 bg-inherit">
        <p className="flex justify-center text-sm mb-0 opacity-70">
          ©<script>document.write(new Date().getFullYear())</script>2023 Velzon.
          Crafted with <AiFillHeart className="text-red" /> by Themesbrand
        </p>
      </footer>
    </div>
  );
};
export default Login;
