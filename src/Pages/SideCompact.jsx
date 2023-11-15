import "flowbite/dist/flowbite.min.js";
import {
  RiDashboard2Line,
  RiApps2Line,
  RiLayout3Line,
  RiAccountCircleLine,
  RiLockPasswordLine,
  RiPagesLine,
  RiRocketLine,
} from "react-icons/ri";
import { AiOutlineArrowRight } from "react-icons/ai";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { StateContext } from "../Context/StateContext";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
const SideCompact = () => {
  const nav = useNavigate();
  const { isSideOpen, sideLight, sideDark, sideGradient,img,img1,img2,img3,img4 } =
    useContext(StateContext);

  const isDesktop = useMediaQuery({
    query: "(min-width: 1537px)",
  });
  const laptop = useMediaQuery({
    query: "(min-width: 1280px)",
  });
  const tablet = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  const phone = useMediaQuery({
    query: "(min-width: 768px)",
  });

  const smPhone = useMediaQuery({
    query: "(min-width: 640px)",
  });

  const Sidebar_animation = {
    open: {
      width: "16rem",
      transition: {
        damping: 40,
      },
    },
    closed: {
      width: "5rem",
      transition: {
        damping: 40,
      },
    },
  };

  const Sidebar_animationR = {
    open: {
      width: "16rem",
      x: 0,
      transition: {
        damping: 40,
      },
    },
    closed: {
      width: "0",
      x: "-100px",
      transition: {
        damping: 40,
      },
    },
  };
  const [profile, setProfile] = useState(false)

  
 const BgImg = (img1&&`bg-[url('https://themesbrand.com/velzon/html/default/assets/images/sidebar/img-1.jpg')]` )||  (img2&& `bg-[url('https://themesbrand.com/velzon/html/default/assets/images/sidebar/img-2.jpg')]`)|| (img3&& `bg-[url('https://themesbrand.com/velzon/html/default/assets/images/sidebar/img-3.jpg')]`)||  (img4&& `bg-[url('https://themesbrand.com/velzon/html/default/assets/images/sidebar/img-4.jpg')]`)


  return (
    <div className={`${BgImg? BgImg: 'bg-light-side-bar-color'} ${img &&sideLight? 'bg-white  dark:bg-dark-side-bar-color': ''} ${img &&sideDark? 'bg-light-side-bar-color': ''} ${img && sideGradient? ' bg-sideGradient': ''} relative max-h-screen overflow-y-auto w-[12rem] side-compact z-50`}>


{
        (sideDark&& (

          <div className="absolute top-0 left-0 h-full inset-0 bg-gradient-to-t from-[#171e32] to-[#405189] opacity-80 z-[-1]"></div>
        ))|| (sideGradient&& (

          <div className="absolute top-0 left-0 inset-0 h-full  bg-sideGradient opacity-80  z-[-1]"></div>
        ))|| (sideLight&& (

          <div className="absolute top-0 left-0 inset-0 h-full bg-gradient-to-t from-[#fff] to-[#fff] opacity-90 z-[-5]"></div>

        ))
      }

<div className="">
            <div className=" pt-8">
              {
                

                  sideLight? (
                    <img src='https://themesbrand.com/velzon/html/default/assets/images/logo-dark.png' className="w-[6rem] mx-auto" alt="" />
                  ):(<img src='https://themesbrand.com/velzon/html/default/assets/images/logo-light.png' className="w-[6rem] mx-auto" alt="" />)
                
              }
            </div>
            <div className="px-5 mt-8">
            <button onClick={() => nav('/')} className="flex flex-col group items-center justify-start gap-2 mx-auto">
                <RiDashboard2Line className={`${sideLight? 'text-light-side-bar-color': 'text-light-side-bar-text-color duration-200 group-hover:text-white'} text-xl`} />
                <span className={`${sideLight? 'text-light-side-bar-color':'text-light-side-bar-text-color duration-200 group-hover:text-white'} text-[1.1rem] font-header-medium `}>
                  Ecommerce
                </span>
              </button>


              <button  onClick={() => nav('/password-reset')} className="flex flex-col group items-center justify-start gap-2 mt-2 mx-auto">
                <RiLockPasswordLine className={`${sideLight? 'text-light-side-bar-color': 'text-light-side-bar-text-color duration-200 group-hover:text-white'} text-xl`} />
                <span className={`${sideLight? 'text-light-side-bar-color':'text-light-side-bar-text-color duration-200 group-hover:text-white'}  text-[1.1rem] font-header-medium `}>
                  Password Reset
                </span>
              </button>

              <button
               onClick={() => nav('/add-blog')}
              className="flex flex-col group items-center justify-start gap-2 mt-2 mx-auto">
                <FaWpforms className={`${sideLight? 'text-light-side-bar-color': 'text-light-side-bar-text-color duration-200 group-hover:text-white'} text-xl`} />
                <span className={`${sideLight? 'text-light-side-bar-color':'text-light-side-bar-text-color duration-200 group-hover:text-white'}  text-[1.1rem] font-header-medium `}>
                  New Blog
                </span>
              </button>

              <button className="w-full grid place-items-center mt-2">
                <div onClick={() => setProfile(!profile)} className="flex items-center justify-between mx-auto">
                  <div className="flex flex-col group items-center justify-start gap-2">
                    <RiPagesLine className={`${sideLight? 'text-light-side-bar-color': 'text-light-side-bar-text-color duration-200 group-hover:text-white'} text-xl`} />
                    <span className={`${sideLight? 'text-light-side-bar-color':'text-light-side-bar-text-color duration-200 group-hover:text-white'}  text-[1.1rem] font-header-medium `}>
                      Profile
                    </span>
                  </div>
                 
                </div>
                <motion.div 
                initial={{opacity:0, y:-60, display:'none'}}
                animate={profile? {opacity:1, y:0, display:'block'}: {opacity:0, y:-60, display:'none'}}
                transition={{
                  duration: .4
                }}
                className="mt-2">
                  <div className=" text-start">
                    <span onClick={() => nav('/profile')}  className={`${sideLight? 'text-light-side-bar-color':'text-light-side-bar-text-color duration-200 hover:text-white'} text-[.95rem]`}>simple page</span>
                  </div>
                  <div className=" text-start mt-2">
                    <span onClick={() => nav('/profile/settings')}  className={`${sideLight? 'text-light-side-bar-color':'text-light-side-bar-text-color duration-200 hover:text-white'} text-[.95rem] mt-3`}>profile setting</span>
                  </div>
                </motion.div>
              </button>
            </div>
          </div>



    </div>
  );
};

export default SideCompact;
