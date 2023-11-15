 
import "flowbite/dist/flowbite.min.js";
import {
  RiDashboard2Line,
  RiApps2Line,
  RiLayout3Line,
  RiAccountCircleLine,
  RiPagesLine,
  RiAuctionFill,
  RiLandscapeFill,
  RiRocketLine,
  RiLockPasswordLine
} from "react-icons/ri";
import { AiOutlineArrowRight } from "react-icons/ai";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { StateContext } from "../Context/StateContext";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import SideCompact from "./SideCompact";
import SideSmallHover from "./SideSmallHover";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
const SmallIconView = () => {
  const [change, setChange] = useState(false);
  


  const nav = useNavigate()


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
      width: "16rem",
      transition: {
        damping: 40,
      },
    },
  };

  const Sidebar_animationR = {
    open: {
      width: "16rem",
      x:0,
      transition: {
        damping: 40,
      },
    },
    closed: {
      width: "0",
      x:'-100px',
      transition: {
        damping: 40,
      },
    },
  };
  const {isSideOpen,setIsSideOpen,semi,sideLight,sideDark,sideGradient,detached,img,img1,img2,img3,img4,compact,smallIcon,smallHover } = useContext(StateContext)

 const BgImg = (img1&&`bg-[url('https://themesbrand.com/velzon/html/default/assets/images/sidebar/img-1.jpg')]` )||  (img2&& `bg-[url('https://themesbrand.com/velzon/html/default/assets/images/sidebar/img-2.jpg')]`)|| (img3&& `bg-[url('https://themesbrand.com/velzon/html/default/assets/images/sidebar/img-3.jpg')]`)||  (img4&& `bg-[url('https://themesbrand.com/velzon/html/default/assets/images/sidebar/img-4.jpg')]`)

 const [profile, setProfile] = useState(false)


  return (
   <div
   onMouseEnter={() => setChange(true)}
   onMouseLeave={() => setChange(false)}
   className="absolute top-0 left-0">









    {change ? (
      <motion.div
      variants={!smPhone? Sidebar_animationR:Sidebar_animation}
      animate={isSideOpen ? "open" : "closed"}
      className={`${BgImg? BgImg: 'bg-light-side-bar-color'} md:w-[16rem] z-[9999] absolute top-0 left-0  w-0 md:relative       ${detached? 'min-h-screen': 'max-h-screen'} overflow-y-auto sideBar ${img &&sideLight? 'bg-white  dark:bg-dark-side-bar-color': ''} ${semi? 'ml-3 my-6 rounded-md bg-gray dark:bg-dark-side-bar-color': ''} ${img &&sideDark? 'bg-light-side-bar-color': ''} ${img && sideGradient? ' bg-sideGradient': ''}`}
    >
      {
        (sideDark&& (

          <div className="absolute inset-0 bg-gradient-to-t from-[#171e32] to-[#405189] opacity-80 z-[-1]"></div>
        ))|| (sideGradient&& (

          <div className="absolute inset-0  bg-sideGradient opacity-80  z-[-1]"></div>
        ))|| (sideLight&& (

          <div className="absolute inset-0 bg-gradient-to-t from-[#fff] to-[#fff] opacity-90 z-[-5]"></div>

        ))
      }

      <motion.div
      variants={!smPhone? Sidebar_animationR:Sidebar_animation}
      animate={isSideOpen ? "open" : "closed"}
      onClick={() =>setIsSideOpen(false)}
      className=" bg-gray-btn-bg dark:bg-dark-side-bar-color z-[990] md:z-[-1] fixed md:scale-0 md:ml-0 ml-[16rem] top-0 left-0 w-full md:hidden h-full "></motion.div>
      
      <div className={`${semi? 'h-[93vh]': 'h-screen'}`}>
            <div className=" pt-8">
              {
                

                  sideLight? (
                    <img src='https://themesbrand.com/velzon/html/default/assets/images/logo-dark.png' className="w-[6rem] mx-auto" alt="" />
                  ):(<img src='https://themesbrand.com/velzon/html/default/assets/images/logo-light.png' className="w-[6rem] mx-auto" alt="" />)
                
              }
            </div>
            <div className="px-5 mt-8">
            <button className="flex items-center justify-start gap-4 group ">
                <RiDashboard2Line className={`${sideLight? 'text-light-side-bar-color': 'text-light-side-bar-text-color duration-200 group-hover:text-white'} text-xl`} />
                <span  onClick={() => nav('/')} className={`${sideLight? 'text-light-side-bar-color':'text-light-side-bar-text-color duration-200 group-hover:text-white'} text-[1.1rem] font-header-medium font-normal `}>
                  Ecommerce
                </span>
              </button>
              <button   className="flex items-center justify-start gap-4 group my-4">
                <RiLockPasswordLine className={`${sideLight? 'text-light-side-bar-color': 'text-light-side-bar-text-color duration-200 group-hover:text-white'} text-xl`} />
                <span onClick={() => nav('/password-reset')} className={`${sideLight? 'text-light-side-bar-color':'text-light-side-bar-text-color duration-200 group-hover:text-white'} text-[1.1rem] font-header-medium font-normal `}>
                  Password Reset
                </span>
              </button>

              <button
               onClick={() => nav('/add-blog')}
              className="flex items-center justify-start gap-4 group">
                <FaWpforms className={`${sideLight? 'text-light-side-bar-color': 'text-light-side-bar-text-color duration-200 group-hover:text-white'} text-xl`} />
                <span className={`${sideLight? 'text-light-side-bar-color':'text-light-side-bar-text-color duration-200 group-hover:text-white'} text-[1.1rem] font-header-medium font-normal `}>
                  New Blog
                </span>
              </button>

              <button className=" w-full mt-4 relative group">
                <div onClick={() => setProfile(!profile)} className="flex items-center justify-between w-full">
                  <div className="flex items-center justify-start gap-4 group">
                    <RiPagesLine className={`${sideLight? 'text-light-side-bar-color': 'text-light-side-bar-text-color duration-200 group-hover:text-white'} text-xl`} />
                    <span className={`${sideLight? 'text-light-side-bar-color':'text-light-side-bar-text-color duration-200 group-hover:text-white'} text-[1.1rem] font-header-medium font-normal `}>
                      Profile
                    </span>
                  </div>
                  {profile? <MdOutlineKeyboardArrowDown  className={`${sideLight? 'text-light-side-bar-color':'text-light-side-bar-text-color duration-200 group-hover:text-white'}  text-xl `}/>:
                  <MdOutlineKeyboardArrowRight className={`${sideLight? 'text-light-side-bar-color':'text-light-side-bar-text-color duration-200 group-hover:text-white'}  text-xl `} />
                  }
                </div>
                <motion.div 
                initial={{opacity:0, y:-60, display:'none'}}
                animate={profile? {opacity:1, y:0, display:'block'}: {opacity:0, y:-60, display:'none'}}
                transition={{
                  duration: .4
                }}
                className={`mt-2`}>
                  <div className={`text-start px-10 mt-2  ${!isSideOpen? 'hidden': 'block'}`}>
                    <span onClick={() => nav('/profile')}  className={`${sideLight? 'text-light-side-bar-color':'text-light-side-bar-text-color duration-200 hover:text-white'} text-[.95rem]`}>Simple page</span>
                  </div>
                  <div className={`text-start px-10 mt-2  ${!isSideOpen? 'hidden': 'block'}`}>
                    <span onClick={() => nav('/profile/settings')}  className={`${sideLight? 'text-light-side-bar-color':'text-light-side-bar-text-color duration-200 hover:text-white'} text-[.95rem] mt-3`}>Profile setting</span>
                  </div>
                </motion.div>
              </button>
            </div>
          </div>
     
    </motion.div>
    ): (
<div className={`px-4  min-h-screen  ${
          sideLight ? "bg-white text-gray" : ""
        } ${sideDark ? "bg-[#3a4b84] dark:bg-dark-side-bar-color" : ""} ${
          sideGradient ? " bg-sideGradient" : ""
        } overflow-y-auto absolute top-0 left-0 z-[999999]`}>



      <div className=" grid place-items-center py-6 mb-4">
        <img
          src="https://themesbrand.com/velzon/html/default/assets/images/logo-sm.png"
          className="w-6 h-6"
          alt=""
        />
      </div>
      <div className=" ">
        <div
          className={` rounded-md cursor-pointer p-2 relative flex items-center  justify-start`}
        >
          <RiDashboard2Line className="text-[#abb9e8] text-2xl" />
          
        </div>

        <div className={` rounded-md cursor-pointer p-2 relative`}>
          <RiLockPasswordLine className="text-[#abb9e8] text-2xl" />
        </div>
        <div className={` rounded-md cursor-pointer p-2 relative`}>
          <FaWpforms className="text-[#abb9e8] text-2xl " />
        </div>
        
        <div className={` rounded-md cursor-pointer p-2 relative`}>
          <RiPagesLine className="text-[#abb9e8] text-2xl " />
        </div>
       
      </div>
    </div>
    )}



   </div>
  );
};

export default SmallIconView;
