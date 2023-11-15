import { useContext, useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { BiSolidCheckCircle } from "react-icons/bi";

import { StateContext } from "../Context/StateContext";
import { motion } from "framer-motion";
import Loader from "./Loader";
import { theme } from "flowbite-react";

const SettingBar = () => {
  const { setting, setSetting,ver, setVer,hor, setHor,tCol, setTCol,semi, setSemi,lightTheme, setLightTheme,darkTheme, setDarkTheme,fluid, setFluid,boxed, setBoxed,fixed, setFixed,scrollable, setScrollable,lightTop, setLightTop,darkTop, setDarkTop,sizeDefault, setSizeDefault,compact, setCompact,smallIcon, setSmallIcon,smallHover, setSmallHover,viewDefault, setViewDefault,detached, setDetached,sideLight, setSideLight,sideDark, setSideDark,sideGradient, setSideGradient,img,setImg,img1, setImg1,img2, setImg2,img3, setImg3,img4, setImg4,disabled, setDisabled,enabled, setEnabled, setTheme,theme } = useContext(StateContext);
  const barVariant = {
    open: { x: "0", opacity: 1, transition: { duration: 0.25 } },
    closed: { x: "100%", opacity: 0, transition: { duration: 0.25 } },
  };
  const bgVariant = {
    open: { opacity: 1, transition: { duration: 0.25 } },
    closed: { opacity: 0, transition: { duration: 0.25 } },
  };

useEffect(() => {
  theme=='light'?(setLightTheme(true), setDarkTheme(false)): (setLightTheme(false), setDarkTheme(true))
}, [theme])
  // useEffect(() => {
  //   const obj= {ver,hor,tCol,semi,lightTheme,darkTheme,fluid,boxed,fixed,scrollable,lightTop,darkTop,sizeDefault,compact,smallIcon,smallHover,viewDefault,detached,sideLight,sideDark,sideGradient}
  //   localStorage.setItem('states', JSON.stringify(obj))
   
  
  // }, [
  //   ver,hor,tCol,semi,lightTheme,darkTheme,fluid,boxed,fixed,scrollable,lightTop,darkTop,sizeDefault,compact,smallIcon,smallHover,viewDefault,detached,sideLight,sideDark,sideGradient
  // ])
 

 

  return (
    <div className="sticky top-0 left-0 z-[999999999999]">
      <motion.div
        initial={"closed"}
        animate={setting ? "open" : "closed"}
        variants={barVariant}
        className="fixed top-0 right-0 w-[25rem] z-[2000]  h-full overflow-y-auto settingBar  shadow-lg bg-white "
      >
        {/* <div className="w-full s  "> */}
          <div className="sticky px-2 py-4 top-0 right-0 w-full flex items-center justify-between bg-primary z-[2999]">
            <h1 className="text-white">Theme Customizer</h1>
            <RxCross2
              onClick={() => setSetting(!setting)}
              className="text-gray text-2xl cursor-pointer"
            />
          </div>
        {/* </div> */}

        <div className="layout px-4 py-4">
          <h6 className="text-sm uppercase font-medium text-light-header-color">
            Layout
          </h6>
          <p className="text-xs tracking-wide font-normal text-light-header-color">
            Choose your layout
          </p>
          <div className="flex items-stretch justify-between gap-y-1  mt-4 flex-wrap">
            <div onClick={() => (
              setVer(true), setHor(false), setTCol(false), setSemi(false)
            )} className="bg-white  basis-[30%] relative cursor-pointer">
              <span className="absolute top-[1rem] right-[1rem] radio-btn">
                {
                ver&&                  
                <BiSolidCheckCircle className="text-primary"/>
                }
              </span> 
              
              <div className="flex items-stretch justify-start gap-1 border rounded-sm  border-gray">
                <div className="bg-gray-100">
                  <div className="bg-gray-400 px-2 py-1 mx-1 mt-1 rounded-full"></div>
                  <div className="py-4 mx-2">
                    <div className="bg-gray-400 px-2 py-[.15rem]"></div>
                    <div className="bg-gray-400 px-2 py-[.15rem] my-2"></div>
                    <div className="bg-gray-400 px-2 py-[.15rem]"></div>
                  </div>
                </div>
                <div className="flex-1 bg-white flex flex-col justify-between">
                  <div className="bg-gray-300 px-1 py-1"></div>
                  <div className="bg-gray-300  px-1 py-1"></div>
                </div>
              </div>
              <p className="text-sm pt-2 text-center">vertical</p>
            </div>
            <div  onClick={() => (
              setVer(false), setHor(true), setTCol(false), setSemi(false),setSizeDefault(true), setCompact(false),setSmallIcon(false),setSmallHover(false)
            )} className="bg-white  basis-[30%] flex flex-col relative cursor-pointer">
            <span className="absolute top-[1rem] right-[1rem] radio-btn">
                {
                hor&&                  
                <BiSolidCheckCircle className="text-primary"/>
                }
              </span>
              
              <div className=" flex flex-col h-full   items-start justify-between gap-1 border rounded-sm  border-gray">
                <div className="bg-gray-100 w-full px-2 py-1 flex items-center justify-between gap-1">
                  <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                  <div className="flex items-center justify-start gap-1 ">
                    <div className="px-2 py-[.1rem] bg-gray-400"></div>
                    <div className="px-2 py-[.1rem] bg-gray-400"></div>
                  </div>
                </div>
                
                <div className="flex flex-col justify-between w-full gap-1 flex-1">

                  <div className="bg-gray-300 px-1 py-1 w-full "></div>
                  <div className="bg-gray-300  px-1 py-1 w-full"></div>
                </div>
              </div>
              <p className="text-sm pt-2 text-center">Horizontal</p>
            </div>
            <div  onClick={() => (
              setVer(false), setHor(false), setTCol(true), setSemi(false),setSizeDefault(true), setCompact(false),setSmallIcon(false),setSmallHover(false)
            )} className="bg-white  basis-[30%] flex flex-col relative cursor-pointer">
            <span className="absolute top-[1rem] right-[1rem] radio-btn">
                {
                tCol&&                  
                <BiSolidCheckCircle className="text-primary"/>
                }
              </span>
              
              <div className="flex-1 h-full flex items-stretch justify-start gap-1 border rounded-sm  border-gray">
                <div className="bg-gray-100 basis-[10%] overflow-hidden">
                  <div className="bg-gray-400 px-2 py-1  rounded-full"></div>
                  <div className="py-1">
                    <div className="bg-gray-400 px-2 py-[.15rem]"></div>
                    <div className="bg-gray-400 px-2 py-[.15rem] my-1"></div>
                    <div className="bg-gray-400 px-2 py-[.15rem]"></div>
                  </div>
                </div>
                <div className="bg-gray-100 basis-[15%] overflow-hidden">
                  <div className="py-1">
                    <div className="bg-gray-400 px-2 py-[.15rem]"></div>
                    <div className="bg-gray-400 px-2 py-[.15rem] my-1"></div>
                    <div className="bg-gray-400 px-2 py-[.15rem]"></div>
                  </div>
                </div>
                <div className="flex-1 bg-white flex flex-col justify-between">
                  <div className="bg-gray-300 px-1 py-1 "></div>
                  <div className="bg-gray-300  px-1 py-1 "></div>
                </div>
              </div>
              <p className="text-sm pt-2 text-center">Two column</p>
            </div>

            <div  onClick={() => (
              setVer(false), setHor(false), setTCol(false), setSemi(true), setDetached(false),setFluid(true),setBoxed(false)
            )} className="bg-white  basis-[30%] relative cursor-pointer">
          
              <span className="absolute top-[1rem] right-[1rem] radio-btn">
                {
                semi&&                  
                <BiSolidCheckCircle className="text-primary"/>
                }
              </span>
              
              <div className=" border rounded-md  border-gray">
                <div className="m-2 flex items-stretch justify-start gap-1">
                <div className="bg-gray-100 ">
                  <div className="bg-gray-400 px-1 py-1 mx-1 mt-1 rounded-full"></div>
                  <div className="py-4 mx-2">
                    <div className="bg-gray-400 px-2 py-[.15rem]"></div>
                    <div className="bg-gray-400 px-2 py-[.15rem] my-2"></div>
                    <div className="bg-gray-400 px-2 py-[.15rem]"></div>
                  </div>
                </div>
                <div className="flex-1 bg-white flex flex-col justify-between">
                  <div className="bg-gray-300 px-1 py-1"></div>
                  <div className="bg-gray-300  px-1 py-1"></div>
                </div>
                </div>
              </div>
              <p className="text-sm pt-2 text-center">Semi Box</p>
            </div>
            
          
            
            
          </div>
          
          
        </div>

        <div className="theme  px-4 py-4">
        <h6 className="text-sm uppercase font-medium text-light-header-color">
            Color Theme
          </h6>
          <p className="text-xs tracking-wide font-normal text-light-header-color">
          Light or Dark Scheme.
          </p>

          <div className="flex items-stretch justify-start gap-6  mt-4 flex-wrap">
            <div onClick={() => (
              setLightTheme(true), setDarkTheme(false),setTheme('light')
            )} className="bg-white  basis-[30%] relative cursor-pointer">
              <span className="absolute top-[1rem] right-[1rem] radio-btn">
                {
                lightTheme&&                  
                <BiSolidCheckCircle className="text-primary"/>
                }
              </span> 
              
              <div className="flex items-stretch justify-start gap-1 border rounded-sm  border-gray">
                <div className="bg-gray-100">
                  <div className="bg-gray-400 px-2 py-1 mx-1 mt-1 rounded-full"></div>
                  <div className="py-4 mx-2">
                    <div className="bg-gray-400 px-2 py-[.15rem]"></div>
                    <div className="bg-gray-400 px-2 py-[.15rem] my-2"></div>
                    <div className="bg-gray-400 px-2 py-[.15rem]"></div>
                  </div>
                </div>
                <div className="flex-1 bg-white flex flex-col justify-between">
                  <div className="bg-gray-300 px-1 py-1"></div>
                  <div className="bg-gray-300  px-1 py-1"></div>
                </div>
              </div>
              <p className="text-sm pt-2 text-center">Light</p>
            </div>
            <div onClick={() => (
              setLightTheme(false), setDarkTheme(true),setTheme('dark')
            )} className="bg-dark  basis-[30%] relative cursor-pointer">
              <span className="absolute top-[1rem] right-[1rem] radio-btn">
                {
                darkTheme&&                  
                <BiSolidCheckCircle className="text-primary"/>
                }
              </span> 
              
              <div className="flex items-stretch justify-start gap-1 border rounded-md  border-gray">
                <div className="bg-dark">
                  <div className="bg-gray-700 px-2 py-1 mx-1 mt-1 rounded-full"></div>
                  <div className="py-4 mx-2">
                    <div className="bg-gray-700 px-2 py-[.15rem]"></div>
                    <div className="bg-gray-700 px-2 py-[.15rem] my-2"></div>
                    <div className="bg-gray-700 px-2 py-[.15rem]"></div>
                  </div>
                </div>
                <div className="flex-1 bg-dark flex flex-col justify-between">
                  <div className="bg-gray-700 px-1 py-1"></div>
                  <div className="bg-gray-700  px-1 py-1"></div>
                </div>
              </div>
              <p className="text-sm pt-2 text-center bg-white">Dark</p>
            </div>
            
            
          
            
            
          </div>
        </div>
{!semi&& (
        <div className="layout-width  px-4 py-4">
        <h6 className="text-sm uppercase font-medium text-light-header-color">
            Color Theme
          </h6>
          <p className="text-xs tracking-wide font-normal text-light-header-color">
          Light or Dark Scheme.
          </p>

          <div className="flex items-stretch justify-start gap-6  mt-4 flex-wrap">
            <div onClick={() => (
              setFluid(true), setBoxed(false)
            )} className="bg-white  basis-[30%] relative cursor-pointer">
              <span className="absolute top-[1rem] right-[1rem] radio-btn">
                {
                fluid&&                  
                <BiSolidCheckCircle className="text-primary"/>
                }
              </span> 
              
              <div className="flex items-stretch justify-start gap-1 border rounded-sm  border-gray">
                <div className="bg-gray-100">
                  <div className="bg-gray-400 px-2 py-1 mx-1 mt-1 rounded-full"></div>
                  <div className="py-4 mx-2">
                    <div className="bg-gray-400 px-2 py-[.15rem]"></div>
                    <div className="bg-gray-400 px-2 py-[.15rem] my-2"></div>
                    <div className="bg-gray-400 px-2 py-[.15rem]"></div>
                  </div>
                </div>
                <div className="flex-1 bg-white flex flex-col justify-between">
                  <div className="bg-gray-300 px-1 py-1"></div>
                  <div className="bg-gray-300  px-1 py-1"></div>
                </div>
              </div>
              <p className="text-sm pt-2 text-center">Fluid</p>
            </div>
            <div onClick={() => (
              setFluid(false), setBoxed(true)
            )} className="bg-white  basis-[30%] relative cursor-pointer">
              <span className="absolute top-[1rem] right-[1rem] radio-btn">
                {
                boxed&&                  
                <BiSolidCheckCircle className="text-primary"/>
                }
              </span> 
              
              <div className="flex items-stretch justify-start gap-1 border rounded-sm  border-gray px-2">
                <div className="bg-gray-100">
                  <div className="bg-gray-400 px-2 py-1 mx-1 mt-1 rounded-full"></div>
                  <div className="py-4 mx-2">
                    <div className="bg-gray-400 px-2 py-[.15rem]"></div>
                    <div className="bg-gray-400 px-2 py-[.15rem] my-2"></div>
                    <div className="bg-gray-400 px-2 py-[.15rem]"></div>
                  </div>
                </div>
                <div className="flex-1 bg-white flex flex-col justify-between  border-r border-gray-500">
                  <div className="bg-gray-300 px-1 py-1"></div>
                  <div className="bg-gray-300  px-1 py-1"></div>
                </div>
              </div>
              <p className="text-sm pt-2 text-center">Boxed</p>
            </div>
            
            
           
          
            
            
          </div>
        </div>
)}
        <div className="layout-position  px-4 py-4">
        <h6 className="text-sm uppercase font-medium text-light-header-color">
        LAYOUT POSITION
          </h6>
          <p className="text-xs tracking-wide font-normal text-light-header-color">
          Choose Fixed or Scrollable Layout Position.
          </p>

<div className="mt-4">
          <span className="bg-gray-300 flex items-stretch justify-stretch w-1/2">
            <span onClick={() => (setFixed(true), setScrollable(false))} className={`px-4 py-2  basis-1/2  text-sm ${fixed? 'bg-blue-btn-bg text-blue': "bg-gray-300 text-light-header-color"}`}>Fixed</span>
            <span onClick={() => (setFixed(false), setScrollable(true))}  className={`px-4 py-2  basis-1/2  text-sm ${scrollable? 'bg-blue-btn-bg text-blue': "bg-gray-300 text-light-header-color"}`}>Scrollable</span>
          </span>

</div>
        </div>

        <div className="top-bar-color  px-4 py-4">
        <h6 className="text-sm uppercase font-medium text-light-header-color">
        TOPBAR COLOR
          </h6>
          <p className="text-xs tracking-wide font-normal text-light-header-color">
          Choose Light or Dark Topbar Color.
          </p>

          <div className="flex items-stretch justify-start gap-6  mt-4 flex-wrap">
            <div onClick={() => (
              setLightTop(true), setDarkTop(false)
            )} className="bg-white  basis-[30%] relative cursor-pointer">
              <span className="absolute top-[1rem] right-[1rem] radio-btn">
                {
                lightTop&&                  
                <BiSolidCheckCircle className="text-primary"/>
                }
              </span> 
              
              <div className="flex items-stretch justify-start gap-1 border rounded-sm  border-gray">
                <div className="bg-gray-100">
                  <div className="bg-gray-400 px-2 py-1 mx-1 mt-1 rounded-full"></div>
                  <div className="py-4 mx-2">
                    <div className="bg-gray-400 px-2 py-[.15rem]"></div>
                    <div className="bg-gray-400 px-2 py-[.15rem] my-2"></div>
                    <div className="bg-gray-400 px-2 py-[.15rem]"></div>
                  </div>
                </div>
                <div className="flex-1 bg-white flex flex-col justify-between">
                  <div className="bg-gray-300 px-1 py-1"></div>
                  <div className="bg-gray-300  px-1 py-1"></div>
                </div>
              </div>
              <p className="text-sm pt-2 text-center">Light</p>
            </div>
            <div onClick={() => (
              setLightTop(false), setDarkTop(true)
            )} className="bg-white  basis-[30%] relative cursor-pointer">
              <span className="absolute top-[1rem] right-[1rem] radio-btn">
                {
                darkTop&&                  
                <BiSolidCheckCircle className="text-primary"/>
                }
              </span> 
              
              <div className="flex items-stretch justify-start gap-1 border rounded-sm  border-gray ">
                <div className="bg-gray-100">
                  <div className="bg-gray-400 px-2 py-1 mx-1 mt-1 rounded-full"></div>
                  <div className="py-4 mx-2">
                    <div className="bg-gray-400 px-2 py-[.15rem]"></div>
                    <div className="bg-gray-400 px-2 py-[.15rem] my-2"></div>
                    <div className="bg-gray-400 px-2 py-[.15rem]"></div>
                  </div>
                </div>
                <div className="flex-1 bg-white flex flex-col justify-between   border-gray-500">
                  <div className="bg-primary px-1 py-1"></div>
                  <div className="bg-gray-300  px-1 py-1"></div>
                </div>
              </div>
              <p className="text-sm pt-2 text-center">Dark</p>
            </div>
            
            
           
          
            
            
          </div>
        </div>

{(!hor&& !tCol)&& (

        <div className="side-bar-size px-4 py-4">
          <h6 className="text-sm uppercase font-medium text-light-header-color">
          SIDEBAR SIZE
          </h6>
          <p className="text-xs tracking-wide font-normal text-light-header-color">
          Choose a size of Sidebar.
          </p>
          <div className="flex items-stretch justify-between gap-y-1  mt-4 flex-wrap">
            <div onClick={() => (
              setSizeDefault(true), setCompact(false), setSmallHover(false), setSmallIcon(false)
            )} className="bg-white  basis-[30%] relative cursor-pointer">
              <span className="absolute top-[1rem] right-[1rem] radio-btn">
                {
                sizeDefault&&                  
                <BiSolidCheckCircle className="text-primary"/>
                }
              </span> 
              
              <div className="flex items-stretch justify-start gap-1 border rounded-sm  border-gray">
                <div className="bg-gray-100">
                  <div className="bg-gray-400 px-2 py-1 mx-1 mt-1 rounded-full"></div>
                  <div className="py-4 mx-2">
                    <div className="bg-gray-400 px-2 py-[.15rem]"></div>
                    <div className="bg-gray-400 px-2 py-[.15rem] my-2"></div>
                    <div className="bg-gray-400 px-2 py-[.15rem]"></div>
                  </div>
                </div>
                <div className="flex-1 bg-white flex flex-col justify-between">
                  <div className="bg-gray-300 px-1 py-1"></div>
                  <div className="bg-gray-300  px-1 py-1"></div>
                </div>
              </div>
              <p className="text-sm pt-2 text-center">Default</p>
            </div>
            <div  onClick={() => (
              setSizeDefault(false), setCompact(true), setSmallHover(false), setSmallIcon(false)
            )} className="bg-white  basis-[30%] flex flex-col relative cursor-pointer">
            <span className="absolute top-[1rem] right-[1rem] radio-btn">
                {
                compact&&                  
                <BiSolidCheckCircle className="text-primary"/>
                }
              </span>
              
              <div className="flex items-stretch justify-start gap-1 border rounded-sm  border-gray">
                <div className="bg-gray-100">
                  <div className="bg-gray-400 w-2 h-2  rounded-full mx-1"></div>
                  <div className="py-4 mx-1">
                    <div className="bg-gray-400 px-1 py-[.15rem]"></div>
                    <div className="bg-gray-400 px-1 py-[.15rem] my-2"></div>
                    <div className="bg-gray-400 px-1 py-[.15rem]"></div>
                  </div>
                </div>
                <div className="flex-1 bg-white flex flex-col justify-between">
                  <div className="bg-gray-300 px-1 py-1"></div>
                  <div className="bg-gray-300  px-1 py-1"></div>
                </div>
              </div>
              <p className="text-sm pt-2 text-center">Compact</p>
            </div>
            <div  onClick={() => (
              setSizeDefault(false), setCompact(false), setSmallHover(true), setSmallIcon(false)
            )} className="bg-white  basis-[30%] flex flex-col relative cursor-pointer">
            <span className="absolute top-[1rem] right-[1rem] radio-btn">
                {
                smallHover&&                  
                <BiSolidCheckCircle className="text-primary"/>
                }
              </span>
              
              <div className="flex-1 h-full flex items-stretch justify-start gap-1 border rounded-sm  border-gray">
                <div className="bg-gray-100 basis-[10%] overflow-hidden">
                  <div className="bg-gray-400 px-2 py-1  rounded-full"></div>
                  <div className="py-1">
                    <div className="bg-gray-400 px-2 py-[.15rem]"></div>
                    <div className="bg-gray-400 px-2 py-[.15rem] my-1"></div>
                    <div className="bg-gray-400 px-2 py-[.15rem]"></div>
                  </div>
                </div>
                
                <div className="flex-1 bg-white flex flex-col justify-between">
                  <div className="bg-gray-300 px-1 py-1 "></div>
                  <div className="bg-gray-300  px-1 py-1 "></div>
                </div>
              </div>
              <p className="text-xs pt-2 text-center">Small (Icon View)</p>
            </div>

            <div  onClick={() => (
              setSizeDefault(false), setCompact(false), setSmallHover(false), setSmallIcon(true)
            )} className="bg-white  basis-[30%] relative cursor-pointer">
          
              <span className="absolute top-[1rem] right-[1rem] radio-btn">
                {
                smallIcon&&                  
                <BiSolidCheckCircle className="text-primary"/>
                }
              </span>
              
              <div className="flex-1 h-full flex items-stretch justify-start gap-1 border rounded-sm  border-gray">
                <div className="bg-gray-100 basis-[10%] overflow-hidden">
                  <div className="bg-gray-400 px-2 py-1  rounded-full"></div>
                  <div className="py-1">
                    <div className="bg-gray-400 px-2 py-[.15rem]"></div>
                    <div className="bg-gray-400 px-2 py-[.15rem] my-1"></div>
                    <div className="bg-gray-400 px-2 py-[.15rem]"></div>
                  </div>
                </div>
                
                <div className="flex-1 bg-white flex flex-col justify-between">
                  <div className="bg-gray-300 px-1 py-1 "></div>
                  <div className="bg-gray-300  px-1 py-1 "></div>
                </div>
              </div>
              <p className="text-sm pt-2 text-center">Small Hover View (Not work)</p>
            </div>
            
          
            
            
          </div>
          
          
        </div>
)}
{
  !semi && (


        <div className="side-bar-view px-4 py-4 mt-8">
          <h6 className="text-sm uppercase font-medium text-light-header-color">
          SIDEBAR VIEW
          </h6>
          <p className="text-xs tracking-wide font-normal text-light-header-color">
          Choose Default or Detached Sidebar view.
          </p>
          <div className="flex items-stretch justify-start  gap-4  mt-4 flex-wrap">
            <div onClick={() => (
              setViewDefault(true), setDetached(false)
            )} className="bg-white  basis-[30%] relative cursor-pointer">
              <span className="absolute top-[1rem] right-[1rem] radio-btn">
                {
                viewDefault&&                  
                <BiSolidCheckCircle className="text-primary"/>
                }
              </span> 
              
              <div className="flex items-stretch justify-start gap-1 border rounded-sm  border-gray">
                <div className="bg-gray-100">
                  <div className="bg-gray-400 px-2 py-1 mx-1 mt-1 rounded-full"></div>
                  <div className="py-4 mx-2">
                    <div className="bg-gray-400 px-2 py-[.15rem]"></div>
                    <div className="bg-gray-400 px-2 py-[.15rem] my-2"></div>
                    <div className="bg-gray-400 px-2 py-[.15rem]"></div>
                  </div>
                </div>
                <div className="flex-1 bg-white flex flex-col justify-between">
                  <div className="bg-gray-300 px-1 py-1"></div>
                  <div className="bg-gray-300  px-1 py-1"></div>
                </div>
              </div>
              <p className="text-sm pt-2 text-center">Default</p>
            </div>
            <div  onClick={() => (
              setViewDefault(false), setDetached(true)
            )} className="bg-white  basis-[30%] flex flex-col relative cursor-pointer">
            <span className="absolute top-[1rem] right-[1rem] radio-btn">
                {
                detached&&                  
                <BiSolidCheckCircle className="text-primary"/>
                }
              </span>
              
              <div className=" flex flex-col h-full   items-start justify-between gap-1 border rounded-sm  border-gray">
                <div className="bg-gray-100 w-full px-2 py-1 flex items-center justify-between gap-1">
                  <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                  <div className="flex items-center justify-start gap-1 ">
                    <div className="px-2 py-[.1rem] bg-gray-400"></div>
                    <div className="px-2 py-[.1rem] bg-gray-400"></div>
                  </div>
                </div>
                
                <div className="flex flex-col justify-between w-full gap-1 flex-1">

                  <div className="bg-gray-300 px-1 py-1 w-[20%] mx-3 ">
                  {/* <div className="py-4 mx-2"> */}
                    <div className="bg-gray-400 px-1 py-[.1rem]"></div>
                    <div className="bg-gray-400 px-1 py-[.1rem] my-1"></div>
                    <div className="bg-gray-400 px-1 py-[.1rem]"></div>
                  {/* </div> */}
                  </div>

                  <div className="bg-gray-300  px-1 py-1 w-full"></div>
                </div>
              </div>
              <p className="text-sm pt-2 text-center">Detached</p>
            </div>
            
          
            
            
          </div>
          
          
        </div>
          )
        }
        

        <div className={`side-bar-color  px-4 py-4 ${semi? 'mt-5': ''}`}>
        <h6 className="text-sm uppercase font-medium text-light-header-color">
        SIDEBAR COLOR
          </h6>
          <p className="text-xs tracking-wide font-normal text-light-header-color">
          Choose a color of Sidebar.
          </p>

          <div className="flex items-stretch justify-start gap-4  mt-4 flex-wrap">
            <div onClick={() => (
              setSideLight(true), setSideDark(false),setSideGradient(false)
            )} className="bg-white  basis-[30%] relative cursor-pointer">
              <span className="absolute top-[1rem] right-[1rem] radio-btn">
                {
                sideLight&&                  
                <BiSolidCheckCircle className="text-primary"/>
                }
              </span> 
              
              <div className="flex items-stretch justify-start gap-1 border rounded-sm  border-gray">
                <div className="bg-gray-100">
                  <div className="bg-gray-400 px-2 py-1 mx-1 mt-1 rounded-full"></div>
                  <div className="py-4 mx-2">
                    <div className="bg-gray-400 px-2 py-[.15rem]"></div>
                    <div className="bg-gray-400 px-2 py-[.15rem] my-2"></div>
                    <div className="bg-gray-400 px-2 py-[.15rem]"></div>
                  </div>
                </div>
                <div className="flex-1 bg-white flex flex-col justify-between">
                  <div className="bg-gray-300 px-1 py-1"></div>
                  <div className="bg-gray-300  px-1 py-1"></div>
                </div>
              </div>
              <p className="text-sm pt-2 text-center">Light</p>
            </div>
            <div onClick={() => (
              setSideLight(false), setSideDark(true),setSideGradient(false)
            )} className="bg-white  basis-[30%] relative cursor-pointer">
              <span className="absolute top-[1rem] right-[1rem] radio-btn">
                {
                sideDark&&                  
                <BiSolidCheckCircle className="text-primary"/>
                }
              </span> 
              
              <div className="flex items-stretch justify-start gap-1 border rounded-sm  border-gray ">
                <div className="bg-primary">
                  <div className="bg-gray-400 px-2 py-1 mx-1 mt-1 rounded-full"></div>
                  <div className="py-4 mx-2">
                    <div className="bg-gray-400 px-2 py-[.15rem]"></div>
                    <div className="bg-gray-400 px-2 py-[.15rem] my-2"></div>
                    <div className="bg-gray-400 px-2 py-[.15rem]"></div>
                  </div>
                </div>
                <div className="flex-1 bg-white flex flex-col justify-between   border-gray-500">
                  <div className="bg-gray-300 px-1 py-1"></div>
                  <div className="bg-gray-300  px-1 py-1"></div>
                </div>
              </div>
              <p className="text-sm pt-2 text-center">Dark</p>
            </div>
            <div onClick={() => (
             setSideLight(false), setSideDark(false),setSideGradient(true)
            )} className="bg-white  basis-[30%] relative cursor-pointer">
              <span className="absolute top-[1rem] right-[1rem] radio-btn">
                {
                sideGradient&&                  
                <BiSolidCheckCircle className="text-primary"/>
                }
              </span> 
              
              <div className="flex items-stretch justify-start gap-1 border rounded-sm  border-gray ">
                <div className="bg-sideGradient">
                  <div className="bg-gray-400 px-2 py-1 mx-1 mt-1 rounded-full"></div>
                  <div className="py-4 mx-2">
                    <div className="bg-gray-400 px-2 py-[.15rem]"></div>
                    <div className="bg-gray-400 px-2 py-[.15rem] my-2"></div>
                    <div className="bg-gray-400 px-2 py-[.15rem]"></div>
                  </div>
                </div>
                <div className="flex-1 bg-white flex flex-col justify-between   border-gray-500">
                  <div className="bg-gray-300 px-1 py-1"></div>
                  <div className="bg-gray-300  px-1 py-1"></div>
                </div>
              </div>
              <p className="text-sm pt-2 text-center">Dark</p>
            </div>
            
            
           
          
            
            
          </div>
        </div>

        <div className="side-bar-color  px-4 py-4">
        <h6 className="text-sm uppercase font-medium text-light-header-color">
        SIDEBAR IMAGES
          </h6>
          <p className="text-xs tracking-wide font-normal text-light-header-color">
          Choose a image of Sidebar.
          </p>

          

          <div className="flex items-stretch justify-stretch gap-4  mt-4">
            <div onClick={() => (setImg(true),setImg1(false),setImg2(false),setImg3(false),setImg4(false))} className="px-3 grid place-items-center py-2 border border-gray-300 relative rounded-md">
              {img&& (<span className="absolute top-0 right-0 w-full h-full bg-gray text-white rounded-md grid p place-items-center">
                <BiSolidCheckCircle/>
              </span>)}
            <RxCross2/>
            </div>
            <div  onClick={() => (setImg(false),setImg1(true),setImg2(false),setImg3(false),setImg4(false))} className=" h-full  overflow-hidden relative">
            {img1&& (<span className="absolute top-0 right-0 w-full h-full bg-gray text-white rounded-md grid p place-items-center">
                <BiSolidCheckCircle/>
              </span>)}
              <img src="https://themesbrand.com/velzon/html/default/assets/images/sidebar/img-1.jpg" className="block rounded-md object-cover h-[4.5rem]" alt="" />
            </div>
            <div  onClick={() => (setImg(false),setImg1(false),setImg2(true),setImg3(false),setImg4(false))} className=" h-full  overflow-hidden relative">
            {img2&& (<span className="absolute top-0 right-0 w-full h-full bg-gray text-white rounded-md grid p place-items-center">
                <BiSolidCheckCircle/>
              </span>)}
              <img src="https://themesbrand.com/velzon/html/default/assets/images/sidebar/img-2.jpg" className="block rounded-md object-cover h-[4.5rem]" alt="" />
            </div>
            <div  onClick={() => (setImg(false),setImg1(false),setImg2(false),setImg3(true),setImg4(false))} className=" h-full  overflow-hidden relative">
            {img3&& (<span className="absolute top-0 right-0 w-full h-full bg-gray text-white rounded-md grid p place-items-center">
                <BiSolidCheckCircle/>
              </span>)}
              <img src="https://themesbrand.com/velzon/html/default/assets/images/sidebar/img-3.jpg" className="block rounded-md object-cover h-[4.5rem]" alt="" />
            </div>
            <div  onClick={() => (setImg(false),setImg1(false),setImg2(false),setImg3(false),setImg4(true))} className=" h-full  overflow-hidden relative">
            {img4&& (<span className="absolute top-0 right-0 w-full h-full bg-gray text-white rounded-md grid p place-items-center">
                <BiSolidCheckCircle/>
              </span>)}
              <img src="https://themesbrand.com/velzon/html/default/assets/images/sidebar/img-4.jpg" className="block rounded-md object-cover h-[4.5rem]" alt="" />
            </div>
            
            
            
           
          
            
            
          </div>
        </div>



        <div className="top-bar-color  px-4 py-4">
        <h6 className="text-sm uppercase font-medium text-light-header-color">
        PRELOADER
          </h6>
          <p className="text-xs tracking-wide font-normal text-light-header-color">
          Choose a preloader.
          </p>

          <div className="flex items-stretch justify-start gap-6  mt-4">
          <button onClick={() => (
               setDisabled(false), setEnabled(true)
            )} className="bg-white  basis-[30%] relative cursor-pointer">
              <span className="absolute top-[1rem] right-[1rem] radio-btn">
                {
                enabled&&                  
                <BiSolidCheckCircle className="text-primary"/>
                }
              </span> 
              
              <div className="flex items-stretch justify-start gap-1 border rounded-sm  border-gray ">
                <div className="bg-gray-100">
                  <div className="bg-gray-400 px-2 py-1 mx-1 mt-1 rounded-full"></div>
                  <div className="py-4 mx-2">
                    <div className="bg-gray-400 px-2 py-[.15rem]"></div>
                    <div className="bg-gray-400 px-2 py-[.15rem] my-2"></div>
                    <div className="bg-gray-400 px-2 py-[.15rem]"></div>
                  </div>
                </div>
                <div className="flex-1 bg-white flex flex-col justify-between   border-gray-500">
                  <div className="bg-gray-300 px-1 py-1"></div>
                  <Loader/>
                  <div className="bg-gray-300  px-1 py-1"></div>
                </div>
              </div>
              <p className="text-sm pt-2 text-center">Enable</p>
            </button>
            <div onClick={() => (
              setDisabled(true), setEnabled(false)
            )} className="bg-white  basis-[30%] relative cursor-pointer flex flex-col">
              <span className="absolute top-[1rem] right-[1rem] radio-btn">
                {
                disabled&&                  
                <BiSolidCheckCircle className="text-primary"/>
                }
              </span> 
              <div className="flex-1 flex items-stretch justify-start gap-1 border rounded-sm  border-gray">
                <div className="bg-gray-100">
                  <div className="bg-gray-400 px-2 py-1 mx-1 mt-1 rounded-full"></div>
                  <div className="py-4 mx-2">
                    <div className="bg-gray-400 px-2 py-[.15rem]"></div>
                    <div className="bg-gray-400 px-2 py-[.15rem] my-2"></div>
                    <div className="bg-gray-400 px-2 py-[.15rem]"></div>
                  </div>
                </div>
                <div className="flex-1 bg-white flex flex-col justify-between">
                  <div className="bg-gray-300 px-1 py-1"></div>
                  <div className="bg-gray-300  px-1 py-1"></div>
                </div>
              </div>
              <p className="text-sm pt-2 text-center">Disabled</p>
            </div>
            
            
            
           
          
            
            
          </div>
        </div>

        <div className="border-t border-gray-200 flex items-center gap-6 justify-between px-6 py-4">
          <button className="basis-1/2 bg-gray-100 text-light-header-color text-sm hover:bg-gray-300 duration-100 text-center py-2 rounded-sm">Reset</button>
          <button className="basis-1/2 bg-primary text-white text-sm  text-center py-2 rounded-sm">Buy Now</button>
        </div>






      </motion.div>

      <motion.div
        initial={"closed"}
        animate={setting ? "open" : "closed"}
        variants={bgVariant}
        onClick={() => setSetting(false)}
        className={`${
          setting
            ? "block w-screen h-screen bg-[rgba(135,138,153,0.4)] dark:bg-[rgba(62,62,63,0.29)] fixed top-0 left-0 z-[1099]"
            : "hidden"
        }`}
      ></motion.div>
    </div>
  );
};

export default SettingBar;
