import { AiFillHeart } from "react-icons/ai";
import lottie from "lottie-web";
import { defineElement } from "lord-icon-element";
import { useNavigate } from "react-router-dom";
defineElement(lottie.loadAnimation);
const Logout = () => {
  const nav = useNavigate()
  return (
    <div className="w-full max-h-screen bg-[#f3f3f9] overflow-hidden">
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

         <img className="cur cursor-pointer" onClick={() => nav('/')} src="https://themesbrand.com/velzon/html/default/assets/images/logo-light.png" alt="" />
          </div>
          <p className="opacity-50">Premium Admin & Dashboard Template</p>
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <div className=" w-[26rem] text-center bg-white mx-4 sm:mx-0 px-4 py-6 rounded shadow">
            
            <lord-icon
              src="https://cdn.lordicon.com/hzomhqxz.json"
              trigger="loop"
              colors="primary:#405189"
              class="w-[180px] h-[180px] font-bold text-2xl"
            ></lord-icon>
            <div className=" w-full flex flex-col items-center px-4 mt-8">
                <div className="">

              <h4 className="t text-light-header-color font-para text-[1rem] font-medium">You are logged out</h4>
              <p className="text-[.8rem] font-medium font-para text-light-para-color mt-2">Thank you for using <span className="text-li text-light-header-color font-medium">velzon</span> admin template</p>
                </div>
                <button onClick={() => nav('/login')} className="bg-[#0ab39c] text-white font-para  w-full py-2 rounded-md text-sm font-medium mt-6">Sign in</button>
            </div>
          </div>
          
        </div>
      </main>
      <footer className="w-full  sm:mt-96 lg:mt-0 pb-4 bg-inherit mt-auto mx-0">
        <p className="flex justify-center text-sm mb-0 opacity-70">
          ©<script>document.write(new Date().getFullYear())</script>2023 Velzon.
          Crafted with <AiFillHeart className="text-red" /> by Themesbrand
        </p>
      </footer>
    </div>
  );
};
export default Logout;