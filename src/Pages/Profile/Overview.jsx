import React,{ useEffect, useRef, useState} from 'react'
import james from "../../../Image/user/avatar-3.jpg";
import jac from "../../../Image/user/avatar-4.jpg";
import geo from "../../../Image/user/avatar-5.jpg";
import design from "../../../Image/popular/s.jpg";
import busi from "../../../Image/popular/img-5.jpg";
import work from "../../../Image/popular/img-6.jpg";
import jacqueline from "../../../Image/rece/avatar-2.jpg";
import erica from "../../../Image/rece/erica.jpg";
import lewis from "../../../Image/rece/avatar-7.jpg";
import { useNavigate } from "react-router-dom/dist";
import '../../../Css/Profile.css'
import {  RiGithubFill,
    RiGlobalFill,
    RiDribbbleFill,
    RiPinterestFill,
    RiMore2Fill,
    RiUserAddLine,
    RiUser2Fill,
    RiGlobalLine,
    RiImage2Line,
    RiFileZipFill,
    RiUser3Fill,
    RiArrowRightSLine,
    RiArrowLeftSLine} from 'react-icons/ri'
    import { LinearProgress } from "@mui/material";
    import { motion } from "framer-motion";
    import Slider from "react-slick";
    import "slick-carousel/slick/slick.css"; 
    import "slick-carousel/slick/slick-theme.css";
const Overview = () => {
  const nav = useNavigate()

  const token = localStorage.getItem("token");
useEffect(()=>{
  !token&& nav('/logout')
},[])
    const [suggestions, setSuggestions] = useState(false);
    const [popular, setPopular] = useState(false);
    const [currentProgress,setCurrentProgress] = useState(0)
    const slider = useRef(null)
    const next = () => {
      slider.current.slickNext();
    };
  
    const previous = () => {
      slider.current.slickPrev();
    };
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
          {
            breakpoint: 1080,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
        ]
  
    };
  
  
    useEffect(()=>{
      const timer = setInterval(()=>setCurrentProgress(30),500)
      return()=>{
        clearInterval(timer)
      }
    })
  return (
    <div className="pt-6 text-[#878a99]">
    <div className="overview-top">
      <div className=" card dark:bg-dark-side-bar-color border dark:border-dark-side-bar-color border-white">
        <div className="card-body">
          <h1 className=" text-dark-side-bar-color dark:text-white mb-12 text-[16px]">Complete Your Profile</h1>
          <div className="relative">
            <motion.div
            animate={{
              x : ['0%', '28%']
            }}
            transition={{ease:"linear",duration: 0.5,delay: 0.5}}
            >
            <div className="label">30%</div>
            </motion.div>
            <LinearProgress
              sx={{
                backgroundColor: "#eff2f7",
                height: "15px",
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "#F06548",
                  borderRadius: "30px",
                  margin: "4px",
                },
              }}
              value={currentProgress}
              variant="determinate"
              className="rounded-md text-progress dark:bg-gray-800"
            />
          </div>
        </div>
      </div>
      {/* <---info---> */}
      <div className=" card dark:bg-dark-side-bar-color border dark:border-dark-side-bar-color border-white">
        <div className="card-body">
          <h1 className=" text-dark-side-bar-color dark:text-white">Info</h1>
          <table className="table">
            <tbody>
              <tr>
                <th className="pl-0 text-start">Full Name:</th>
                <td>Anna Adame</td>
              </tr>
              <tr>
                <th className="pl-0 text-start">Mobile:</th>
                <td>+(1) 987 6543</td>
              </tr>
              <tr>
                <th className="pl-0 text-start">E-mail:</th>
                <td>daveadane@veizon.con</td>
              </tr>
              <tr>
                <th className="pl-0 text-start">Location:</th>
                <td>California, United States</td>
              </tr>
              <tr>
                <th className="pl-0 text-start">Joining Date</th>
                <td>24 Nov 2021</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* <---profolio---> */}
      <div className=" card dark:bg-dark-side-bar-color border dark:border-dark-side-bar-color border-white">
        <div className="card-body">
          <h1 className=" text-dark-side-bar-color dark:text-white mb-6">Porfolio</h1>
          <div className="flex gap-2">
            <a
              href="#!"
              className="w-8 h-8 flex justify-center items-center rounded-full dark:bg-white bg-black"
            >
              <RiGithubFill className="text-[16px] text-white dark:text-black" />
            </a>
            <a
              href="#!"
              className="w-8 h-8 flex justify-center items-center rounded-full bg-[#405189]"
            >
              <RiGlobalFill className="text-[16px] text-white" />
            </a>
            <a
              href="#!"
              className="w-8 h-8 flex justify-center items-center rounded-full bg-[#0ab39c]"
            >
              <RiDribbbleFill className="text-[16px] text-white" />
            </a>
            <a
              href="#!"
              className="w-8 h-8 flex justify-center items-center rounded-full bg-[#f06548]"
            >
              <RiPinterestFill className="text-[16px] text-white" />
            </a>
          </div>
        </div>
      </div>
      {/* <---skills----> */}
      <div className=" card dark:bg-dark-side-bar-color border dark:border-dark-side-bar-color border-white">
        <div className="card-body">
          <h1 className=" text-dark-side-bar-color dark:text-white mb-6">Skills</h1>
          <div className="flex flex-wrap text-[15px] gap-2">
            <a
              href="#!"
              className="badge text-[#405189] bg-[#4051891a]"
            >
              Photoshop
            </a>
            <a
              href="#!"
              className="badge  text-[#405189] bg-[#4051891a]"
            >
              Illustrator
            </a>
            <a
              href="#!"
              className="badge text-[#405189] bg-[#4051891a]"
            >
              HTML
            </a>
            <a
              href="#!"
              className="badge text-[#405189] bg-[#4051891a]"
            >
              CSS
            </a>
            <a
              href="#!"
              className="badge text-[#405189] bg-[#4051891a]"
            >
              Javascript
            </a>
            <a
              href="#!"
              className="badge text-[#405189] bg-[#4051891a]"
            >
              Php
            </a>
            <a
              href="#!"
              className="badge text-[#405189] bg-[#4051891a]"
            >
              Python
            </a>
          </div>
        </div>
      </div>
      {/* <----suggestions----> */}
      <div className=" card dark:bg-dark-side-bar-color border dark:border-dark-side-bar-color border-white">
        <div className="card-body">
          <div className="flex items-center mb-0">
            <div className="flex-1 mb-6">
              <h1 className=" text-dark-side-bar-color dark:text-white mb-0">Suggestions</h1>
            </div>
            <div className="flex-shrink-0">
              <div className="dropdown relative">
                <a
                  href="#!"
                  className=""
                  onClick={() => setSuggestions(!suggestions)}
                >
                  <RiMore2Fill className="text-[14px]" />
                </a>
                <ul
                  className={
                    suggestions ? "dropdown-menu block dark:bg-gray-700  dark:text-gray-400" : "hidden"
                  }
                >
                  <li>
                    <a href="#!" className="dropdown-item">
                      View
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="dropdown-item">
                      Edite
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="dropdown-item">
                      Delete
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center py-4">
            <div className=" flex-shrink-0 mr-4 h-8 w-8">
              <img
                src={james}
                alt="james profile"
                className=" max-w-[100%] h-auto rounded-full"
              />
            </div>
            <div className=" grow">
              <h1 className=" text-dark-side-bar-color dark:text-white text-[14px] mb-1">Esther James</h1>
              <p className="text-[13px] text-gray mb-0">
                Frontend Develper
              </p>
            </div>
            <div className="flex-shrink-0">
              <button className="py-1 px-2 text-green border border-green rounded-sm">
                <RiUserAddLine />
              </button>
            </div>
          </div>

          <div className="flex justify-center items-center py-4">
            <div className=" flex-shrink-0 mr-4 h-8 w-8">
              <img
                src={jac}
                alt="Jacqueline Steve profile"
                className=" max-w-[100%] h-auto rounded-full"
              />
            </div>
            <div className=" grow">
              <h1 className=" text-dark-side-bar-color dark:text-white text-[14px] mb-1">Jacqueline Steve</h1>
              <p className="text-[13px] text-gray mb-0">
                UI/UX Designer
              </p>
            </div>
            <div className="flex-shrink-0">
              <button className="py-1 px-2 text-green border border-green rounded-sm">
                <RiUserAddLine />
              </button>
            </div>
          </div>

          <div className="flex justify-center items-center py-4">
            <div className=" flex-shrink-0 mr-4 h-8 w-8">
              <img
                src={geo}
                alt="George Whalen profile"
                className=" max-w-[100%] h-auto rounded-full"
              />
            </div>
            <div className=" grow">
              <h1 className=" text-dark-side-bar-color dark:text-white text-[14px] mb-1">George Whalen</h1>
              <p className="text-[13px] text-gray mb-0">
                Backend Developer
              </p>
            </div>
            <div className="flex-shrink-0">
              <button className="py-1 px-2 text-green border border-green rounded-sm">
                <RiUserAddLine />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <---popular posts---> */}
      <div className=" card dark:bg-dark-side-bar-color border dark:border-dark-side-bar-color border-white">
        <div className="card-body">
          <div className="flex items-center mb-0">
            <div className="flex-1 mb-6">
              <h1 className=" text-dark-side-bar-color dark:text-white mb-0">Popular Posts</h1>
            </div>
            <div className="flex-shrink-0">
              <div className="dropdown relative">
                <a
                  href="#!"
                  className=""
                  onClick={() => setPopular(!popular)}
                >
                  <RiMore2Fill className="text-[14px]" />
                </a>
                <ul
                  className={
                    popular ? "dropdown-menu block dark:bg-gray-700 dark:text-gray-400" : "hidden"
                  }
                >
                  <li>
                    <a href="#!" className="dropdown-item">
                      View
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="dropdown-item">
                      Edite
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="dropdown-item">
                      Delete
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex mb-6">
            <div className=" flex-shrink-0">
              <img
                src={design}
                alt="design apps jpg"
                className="h-[50px] align-middle rounded-md"
              />
            </div>
            <div className="grow overflow-hidden ml-4">
              <h3 className=" text-dark-side-bar-color dark:text-white mb-2 text-[14px]">
                Design your apps in your own way
              </h3>
              <p className="text-gray text-[13px]">15 Dec 2021</p>
            </div>
          </div>

          <div className="flex mb-6">
            <div className=" flex-shrink-0">
              <img
                src={busi}
                alt="design apps jpg"
                className="h-[50px] align-middle rounded-md"
              />
            </div>
            <div className="grow overflow-hidden ml-4">
              <h3 className=" text-dark-side-bar-color dark:text-white mb-2 text-[14px]">
                Smartest Application for Business
              </h3>
              <p className="text-gray text-[13px]">28 Nov 2021</p>
            </div>
          </div>

          <div className="flex mb-6">
            <div className=" flex-shrink-0">
              <img
                src={work}
                alt="design apps jpg"
                className="h-[50px] align-middle rounded-md"
              />
            </div>
            <div className="grow overflow-hidden ml-4">
              <h3 className=" text-dark-side-bar-color dark:text-white mb-2 text-[14px]">
                How to get creative in your work
              </h3>
              <p className="text-gray text-[13px]">21 Nov 2021</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <----overview about----> */}
    <div className="overview-about">
      <div className=" card dark:bg-dark-side-bar-color border dark:border-dark-side-bar-color border-white">
        <div className="card-body">
          <h1 className=" text-dark-side-bar-color dark:text-white mb-6">About</h1>
          <p className="text-gray">
            Hi I'm Anna Adame, It will be as simple as Occidental; in
            fact, it will be Occidental. To an English person, it will
            seem like simplified English, as a skeptical Cambridge
            friend of mine told me what Occidental is European
            languages are members of the same family.
          </p>
          <p className="text-gray">
            You always want to make sure that your fonts work well
            together and try to limit the number of fonts you use to
            three or less. Experiment and play around with the fonts
            that you already have in the software you’re working with
            reputable font websites. This may be the most commonly
            encountered tip I received from the designers I spoke
            with. They highly encourage that you use different fonts
            in one design, but do not over-exaggerate and go
            overboard.
          </p>
          <div className="flex flex-wrap gap-5 grid-cols-2">
            <div className="flex items-center pr-6 mt-6">
              <div className="flex-shrink-0 mr-4">
                <div className="w-8 h-8 flex justify-center items-center rounded-full bg-light dark:bg-gray-800">
                  <RiUser2Fill className="text-[16px] text-primary" />
                </div>
              </div>
              <div className="grow overflow-hidden">
                <p className="mb-1 text-gray">Designation:</p>
                <h3 className="text-[13px] text-turncate">
                  Lead Designer /Developer
                </h3>
              </div>
            </div>
            <div className="flex items-center px-0 md:px-6 mt-6">
              <div className="flex-shrink-0 mr-4">
                <div className="w-8 h-8 flex justify-center items-center rounded-full dark:bg-slate-800 bg-light">
                  <RiGlobalLine className="text-[16px] text-primary" />
                </div>
              </div>
              <div className="grow overflow-hidden">
                <p className="text-gray mb-1">Website:</p>
                <a href="#" className="text-[#405189] font-semibold">
                  www.velzon.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <---recent activity----> */}
      <div className=" card dark:bg-dark-side-bar-color border dark:border-dark-side-bar-color border-white">
        <div className=" p-4">
         <div className="border-b flex items-center justify-between grow border-b-gray-300 dark:border-b-gray-700">
         <h1 className=" text-dark-side-bar-color dark:text-white mr-2 mb-0 text-[14px]">Recent Activity</h1>
          <div className=" flex-shrink-0 ml-auto ">
            <ul className="flex ">
              <li className="">
                <button
                  to={"/today"}
                  className="p-4 border-b-2 border-b-primary font-[500] text-[12px] text-[#405189]"
                >
                  Today
                </button>
              </li>
              <li>
                <button
                  to={"/weekly"}
                  className="p-4 font-[500] text-[12px] text-[#405189]"
                >
                  Weekly
                </button>
              </li>
              <li>
                <button
                  to={"/monthly"}
                  className="p-4 font-[500] text-[12px] text-[#405189]"
                >
                  Monthly
                </button>
              </li>
            </ul>
          </div>
         </div>
        </div>
        <div className="card-body">
          <div className="collapse before:dark:border-gray-700 relative dark:bg-dark-side-bar-color">
            <input type="checkbox" />
            <div className="collapse-title p-2">
              <div className="flex justify-center items-center">
                <div className=" flex-shrink-0 h-8 w-8 z-10">
                  <img
                    src={jacqueline}
                    alt="james profile"
                    className=" max-w-[100%] h-auto rounded-full"
                  />
                </div>
                <div className=" grow ml-4">
                  <h6 className="text-[14px] text-black dark:text-white mb-1">
                    Jacqueline Steve
                  </h6>
                  <small className=" text-gray mb-0">
                    We has changed 2 attributes on 05:16PM
                  </small>
                </div>
              </div>
            </div>
            <div className="collapse-content">
              <div className="ml-2 pl-12 text-gray py-4 px-5">
                In an awareness campaign, it is vital for people to
                begin put 2 and 2 together and begin to recognize your
                cause. Too much or too little spacing, as in the
                example below, can make things unpleasant for the
                reader. The goal is to make your text as comfortable
                to read as possible. A wonderful serenity has taken
                possession of my entire soul, like these sweet
                mornings of spring which I enjoy with my whole heart.
              </div>
            </div>
          </div>

          <div className="collapse relative before:dark:border-gray-700 dark:bg-dark-side-bar-color">
            <input type="checkbox" />
            <div className="collapse-title p-2">
              <div className="flex justify-center items-center">
                <div className=" flex-shrink-0 h-8 w-8 z-10 flex text-center leading-8 rounded-full dark:bg-gray-800 bg-light">
                  <p className="max-w-[100%] text-[#0ab39c] h-auto">
                    M
                  </p>
                </div>
                <div className=" grow ml-4">
                  <h6 className="text-[14px] text-black dark:text-white mb-1">Megan Elmore</h6>
                  <small className=" text-gray mb-0">
                    Adding a new event with attachment - 04:45PM
                  </small>
                </div>
              </div>
            </div>
            <div className="collapse-content">
              <div className="ml-2 pl-12 text-gray py-4 px-5">
                <div className="flex gap-2 flex-wrap">
                  <div className="p-2 flex items-center border border-dashed">
                    <div className=" flex-shrink-0">
                      <RiImage2Line className="text-lg text-red" />
                    </div>
                    <div className=" grow ml-2">
                      <h6 className="text-[13px] text-primary font-semibold">
                        Business Template - UI/UX design
                      </h6>
                      <small className="text-gray mb-0">685KB</small>
                    </div>
                  </div>
                  <div className="p-2 flex items-center border border-dashed">
                    <div className=" flex-shrink-0">
                      <RiFileZipFill className="text-lg text-info" />
                    </div>
                    <div className=" grow ml-2">
                      <h6 className="text-[13px] text-primary font-semibold">
                        Bank Management System - PSD
                      </h6>
                      <small className="text-gray mb-0">8.78M</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="collapse relative before:dark:border-gray-700 dark:bg-dark-side-bar-color">
            <input type="checkbox" />
            <div className="collapse-title p-2">
              <div className="flex justify-center items-center">
                <div className=" flex-shrink-0 h-8 w-8 z-10">
                  <img
                    src={erica}
                    alt="erica profile"
                    className=" max-w-[100%] h-auto rounded-full"
                  />
                </div>
                <div className=" grow ml-4">
                  <h6 className="text-[14px] text-black dark:text-white mb-1">
                    New ticket recceived
                  </h6>
                  <small className=" text-gray mb-0">
                    User{" "}
                    <span className="text-secondary">Erica245</span>{" "}
                    submitted a ticket - 02:33PM
                  </small>
                </div>
              </div>
            </div>
          </div>

          <div className="collapse relative before:dark:border-gray-700 dark:bg-dark-side-bar-color">
            <input type="checkbox" />
            <div className="collapse-title p-2">
              <div className="flex justify-center items-center">
                <div className=" flex-shrink-0 h-8 w-8 z-10 flex justify-center dark:bg-gray-800 bg-light rounded-full">
                  <RiUser3Fill className=" max-w-[100%] text-gray h-auto" />
                </div>
                <div className=" grow ml-4">
                  <h6 className="text-[14px] text-black dark:text-white mb-1">Nancy Martino</h6>
                  <small className=" text-gray mb-0">
                    <span className=" font-semibold">Commented</span>{" "}
                    on 12:57PM
                  </small>
                </div>
              </div>
            </div>
            <div className="collapse-content">
              <div className="ml-2 pl-12 italic text-gray py-4 px-5">
                "A wonderful serenity has taken possession og my
                entire soul, like these sweet mornings of sring which
                I enjoy with my whole heart. Each design is a new,
                unique piece of art birthed into this world, and while
                you have the opportunity to be creative and make your
                own style choices."
              </div>
            </div>
          </div>

          <div className="collapse relative before:dark:border-gray-700 dark:bg-dark-side-bar-color">
            <input type="checkbox" />
            <div className="collapse-title p-2">
              <div className="flex justify-center items-center">
                <div className=" flex-shrink-0 h-8 w-8 z-10">
                  <img
                    src={lewis}
                    alt="james profile"
                    className=" max-w-[100%] h-auto rounded-full"
                  />
                </div>
                <div className=" grow ml-4">
                  <h6 className="text-[14px] text-black dark:text-white mb-1">lewis Arnold</h6>
                  <small className=" text-gray mb-0">
                    Create new project building product - 10:05AM
                  </small>
                </div>
              </div>
            </div>
            <div className="collapse-content">
              <div className="ml-2 pl-12 py-4 px-5">
                <p className="text-gray mb-2">
                  Every team project can have a velzon. Use the velzon
                  to share information with your team to understand
                  and contribute to your project.
                </p>
                <div className="avatar-group flex -space-x-3">
                  <div className="w-9 h-9 ">
                    <img
                      src={jac}
                      className="max-w-[100%] h-auto rounded-full border-2 dark:border-dark-side-bar-color border-white hover:translate-y-[-2px]"
                      alt=""
                    />
                  </div>
                  <div className="w-9 h-9 ">
                    <img
                      src={james}
                      className="max-w-[100%] h-auto rounded-full border-2 dark:border-dark-side-bar-color border-white hover:translate-y-[-2px]"
                      alt=""
                    />
                  </div>
                  <div className="w-8 h-8 text-center leading-8">
                    <p className="max-w-[100%] h-auto bg-light dark:bg-gray-800 text-[14px] text-primary rounded-full border-2 border-white dark:border-dark-side-bar-color hover:translate-y-[-2px]">
                      R
                    </p>
                  </div>
                  <div className="w-8 h-8 text-center leading-8">
                    <p className="max-w-[100%] h-auto bg-primary text-light rounded-full border-2 dark:border-dark-side-bar-color border-white hover:translate-y-[-2px]">
                      2+
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <---project---> */}
      <div className=" card dark:bg-dark-side-bar-color border dark:border-dark-side-bar-color border-white">
        <div className="card-body">
          <div className="flex justify-between items-center mb-2">
            <h1 className=" dark:text-white">Projects</h1>
            <div className="flex gap-2" >
              <button className="avatar-title text-lg rounded p-1" onClick={previous}>
                <RiArrowLeftSLine className="" />
              </button>
              <button className="avatar-title rounded text-lg p-1" onClick={next}>
                <RiArrowRightSLine className="" />
              </button>
            </div>
          </div>

          <Slider ref={slider} className="slider" {...settings}>
            <div className="card profile-project-card dark:bg-dark-side-bar-color dark:border-gray-700 dark:border-l-green border-l-green">
              <div className="card-body p-6">
                <div className="flex ">
                  <div className="grow">
                    <h5 className="text-[14px] dark:text-white text-dark font-medium mb-1">
                      ABC Project Customization
                    </h5>
                    <p className="text-gray mb-0">
                      Last Upate:{" "}
                      <span className="text-gray-700 dark:text-white font-semibold">
                        4 hr Ago
                      </span>
                    </p>
                  </div>
                  <div className=" flex-shrink-0 ml-2">
                    <div className="text-yellow bg-[#f7b84b1a] p-[0.3em] rounded fs-sm">
                      {" "}
                      <small className=' font-semibold'>Inprogress</small>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-6">
                  <div className=" flex-shrink-0">
                    <h5 className="text-gray text-[12px]">
                      Members:
                    </h5>
                  </div>
                  <div className="avatar-group flex flex-shrink-0 -space-x-3">
                    <div className="w-9 h-9 ">
                      <img
                        src={jac}
                        className="max-w-[100%] h-auto rounded-full border-2 border-white dark:border-dark-side-bar-color hover:translate-y-[-2px]"
                        alt=""
                      />
                    </div>
                    <div className="w-9 h-9 ">
                      <img
                        src={geo}
                        className="max-w-[100%] h-auto rounded-full border-2 border-white dark:border-dark-side-bar-color hover:translate-y-[-2px]"
                        alt=""
                      />
                    </div>
                    <div className="w-8 h-8 text-center leading-8">
                    <p className="max-w-[100%] h-auto bg-light dark:bg-gray-8  text-[14px] text-primary rounded-full border-2 border-white dark:border-dark-side-bar-color hover:translate-y-[-2px]">
                        A
                      </p>
                    </div>
                    <div className="w-9 h-9 text-center leading-9">
                      <img
                        src={jacqueline}
                        className="max-w-[100%] h-auto rounded-full border-2 border-white dark:border-dark-side-bar-color hover:translate-y-[-2px]"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card profile-project-card dark:bg-dark-side-bar-color dark:border-gray-700 dark:border-l-red border-l-red ">
              <div className="card-body p-6">
                <div className="flex ">
                  <div className="grow">
                    <h5 className="text-[14px] dark:text-white text-dark font-medium mb-1">
                      Client - John
                    </h5>
                    <p className="text-gray mb-0">
                      Last Upate:{" "}
                      <span className="text-gray-700 dark:text-white font-semibold">
                        1 hr Ago
                      </span>
                    </p>
                  </div>
                  <div className=" flex-shrink-0 ml-2">
                    <div className="text-green bg-[#0ab39c1a] p-[0.3em] rounded fs-sm">
                      <small className=" font-semibold">completed</small>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-6">
                  <div className=" flex-shrink-0">
                    <h5 className="text-gray text-[12px]">
                      Members:
                    </h5>
                  </div>
                  <div className="avatar-group flex flex-shrink-0 -space-x-3">
                    <div className="w-9 h-9 text-center leading-9">
                      <img
                        src={jacqueline}
                        className="max-w-[100%] h-auto rounded-full border-2 border-white dark:border-dark-side-bar-color hover:translate-y-[-2px]"
                        alt=""
                      />
                    </div>
                    <div className="w-8 h-8 text-center leading-8">
                      <p className="max-w-[100%] h-auto bg-light dark:bg-gray-8  text-[14px] text-primary rounded-full border-2 border-white dark:border-dark-side-bar-color hover:translate-y-[-2px]">
                        C
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card profile-project-card dark:bg-dark-side-bar-color dark:border-gray-700 dark:border-l-info border-l-info ">
              <div className="card-body p-6">
                <div className="flex ">
                  <div className="grow">
                    <h5 className="text-[14px] dark:text-white text-dark font-medium mb-1">
                      Brand Logo Design
                    </h5>
                    <p className="text-gray mb-0">
                      Last Upate:{" "}
                      <span className="text-gray-700 dark:text-white font-semibold">
                        2 hr Ago
                      </span>
                    </p>
                  </div>
                  <div className=" flex-shrink-0 ml-2">
                    <div className="text-yellow bg-[#f7b84b1a] p-[0.3em] rounded fs-sm">
                      <small className=" font-semibold">Inprogress</small>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-6">
                  <div className=" flex-shrink-0">
                    <h5 className="text-gray text-[12px]">
                      Members:
                    </h5>
                  </div>
                  <div className="avatar-group flex flex-shrink-0 -space-x-3">
                    <div className="w-9 h-9 ">
                      <img
                        src={geo}
                        className="max-w-[100%] h-auto rounded-full border-2 border-white dark:border-dark-side-bar-color hover:translate-y-[-2px]"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>  

            <div className="card profile-project-card dark:bg-dark-side-bar-color dark:border-gray-700 dark:border-l-red border-l-red">
              <div className="card-body p-6">
                <div className="flex ">
                  <div className="grow">
                    <h5 className="text-[14px] dark:text-white text-dark font-medium mb-1">
                      Project update
                    </h5>
                    <p className="text-gray mb-0">
                      Last Upate:{" "}
                      <span className="text-gray-700 dark:text-white font-semibold">
                        4 hr Ago
                      </span>
                    </p>
                  </div>
                  <div className=" flex-shrink-0 ml-2">
                    <div className="text-green bg-[#0ab39c1a] p-[0.3em] rounded fs-sm">
                      {" "}
                      <small className=' font-semibold'>completed</small>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-6">
                  <div className=" flex-shrink-0">
                    <h5 className="text-gray text-[12px]">
                      Members:
                    </h5>
                  </div>
                  <div className="avatar-group flex flex-shrink-0 -space-x-3">
                    <div className="w-9 h-9 ">
                      <img
                        src={jac}
                        className="max-w-[100%] h-auto rounded-full border-2 border-white dark:border-dark-side-bar-color hover:translate-y-[-2px]"
                        alt=""
                      />
                    </div>
                    <div className="w-9 h-9 ">
                      <img
                        src={geo}
                        className="max-w-[100%] h-auto rounded-full border-2 border-white dark:border-dark-side-bar-color hover:translate-y-[-2px]"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card profile-project-card dark:bg-dark-side-bar-color dark:border-gray-700 dark:border-l-yellow border-l-yellow">
              <div className="card-body p-6">
                <div className="flex ">
                  <div className="grow">
                    <h5 className="text-[14px] dark:text-white text-dark font-medium mb-1">
                      Chat App
                    </h5>
                    <p className="text-gray mb-0">
                      Last Upate:{" "}
                      <span className="text-gray-700 dark:text-white font-semibold">
                        1 hr Ago
                      </span>
                    </p>
                  </div>
                  <div className=" flex-shrink-0 ml-2">
                    <div className="text-yellow bg-[#f7b84b1a] p-[0.3em] rounded fs-sm">
                      {" "}
                      <small className=' font-semibold'>Inprogress</small>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-6">
                  <div className=" flex-shrink-0">
                    <h5 className="text-gray text-[12px]">
                      Members:
                    </h5>
                  </div>
                  <div className="avatar-group flex flex-shrink-0 -space-x-3">
                    <div className="w-9 h-9 ">
                      <img
                        src={jac}
                        className="max-w-[100%] h-auto rounded-full border-2 border-white dark:border-dark-side-bar-color hover:translate-y-[-2px]"
                        alt=""
                      />
                    </div>
                    <div className="w-9 h-9 ">
                      <img
                        src={geo}
                        className="max-w-[100%] h-auto rounded-full border-2 border-white dark:border-dark-side-bar-color hover:translate-y-[-2px]"
                        alt=""
                      />
                    </div>
                    <div className="w-8 h-8 text-center leading-8">
                    <p className="max-w-[100%] h-auto bg-light dark:bg-gray-8  text-[14px] text-primary rounded-full border-2 border-white dark:border-dark-side-bar-color hover:translate-y-[-2px]">
                        A
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        
        </div>
      </div>
    </div>
  </div>
  )
}

export default Overview