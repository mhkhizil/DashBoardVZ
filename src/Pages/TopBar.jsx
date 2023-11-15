import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import { BiCategoryAlt, BiBadgeCheck, BiSolidUserCircle } from "react-icons/bi";
import { BiShoppingBag, BiMessageSquareDots } from "react-icons/bi";
import { BiFullscreen, BiExitFullscreen } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiSettings } from "react-icons/fi";
import { TbLogout } from "react-icons/tb";




import {
  RiArrowRightSLine,
  RiCloseFill,
  RiArrowRightLine,
} from "react-icons/ri";
import { RxClock } from "react-icons/rx";
import admin from "../../Image/admin.jpg";
import ThemeSwitcher from "../Common/ThemeSwitcher";
import { useContext, useEffect, useState } from "react";
import { StateContext } from "../Context/StateContext";
import "../../Css/Topbar.css";
import SideBarHor from "./SideBarHor";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useLogoutMutation } from "../Api/AuthApi";




const TopBar = () => {
  const nav = useNavigate();

  const token = localStorage.getItem('token')


  const {
    isSideOpen,
    setIsSideOpen,
    semi,
    hor,
    boxed,
    detached,
    lightTop,
    darkTop,
  } = useContext(StateContext);
  const [category, setCategory] = useState(false);
  const [cart, setCart] = useState(false);
  const [notification, setNotification] = useState(false);
  const [flags, setFlags] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(true);

  const handleCart = () => {
    setCategory(false);
    setFlags(false);
    setNotification(false);
    setCart(!cart);
  };
  const handleNotification = () => {
    setCart(false);
    setCategory(false);
    setFlags(false);
    setNotification(!notification);
  };
  const handleCategory = () => {
    setCart(false);
    setFlags(false);
    setNotification(false);
    setCategory(!category);
  };
  const handleFlag = () => {
    setCategory(false);
    setCart(false);
    setNotification(false);
    setFlags(!flags);
  };
  const onFullScreenChange = () => {
    setIsFullScreen(!isFullScreen);
    if (isFullScreen === true) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const [profileModal, setProfileModal] = useState(false);

  const [logout] = useLogoutMutation()

  const handleLogout =async () => {
    const {data} = await logout(token)
    if(data.success == true) {
      nav('/logout')
      localStorage.removeItem('token')
    }
  }

  return (
    <div
      className={`topbar ${
        lightTop ? "bg-white" : "bg-dark-bg-color"
      } dark:bg-dark-bg-color  sticky top-0 ${
        detached ? "z-[9999999]" : "z-[99999]"
      }    w-full`}
    >
      <div
        className={`${
          lightTop ? "bg-white" : "bg-dark-bg-color"
        } dark:bg-dark-bg-color h-[70px] sticky top-0   w-full px-6 flex items-center justify-between z-[100] ${
          semi ? "mt-6" : "mt-0"
        }`}
      >
        <div className="flex items-center gap-4">
          <HiOutlineMenuAlt2
            onClick={() => setIsSideOpen(!isSideOpen)}
            className={`text-light-btn-color text-2xl cursor-pointer ${
              boxed ? "" : ""
            }`}
          />
          <div
            className={` hidden md:flex items-center justify-start ${
              lightTop ? "bg-light-gray-bg " : "bg-dark"
            }  dark:bg-dark px-3 py-2 rounded-md gap-3  font-para`}
          >
            <AiOutlineSearch className="text-light-btn-color text-xl font-semibold" />
            <input
              autoFocus
              type="search"
              className="focus:outline-none bg-inherit text-light-btn-color text-[12.5px] font-[500] tracking-[.05rem]"
              placeholder="Search..."
            />
          </div>
        </div>

        <div className="flex items-center justify-start">
          <span className="bg-gr cursor-pointer hover:bg-blue-btn-bg w-12 h-12 rounded-full grid place-items-center relative">
            <button
              onClick={handleFlag}
              className="w-5 h-5 overflow-hidden rounded-md"
            >
              <img
                src="https://themesbrand.com/velzon/html/default/assets/images/flags/us.svg"
                className="block z-50"
                alt=""
              />
            </button>
            <div
              className={flags ? "dropdown-menu py-2 block right-5" : "hidden"}
            >
              <div className="">
                <a
                  href="#!"
                  className="py-2 px-5 flex items-center hover:bg-light hover:text-[#1e2125]"
                >
                  <img
                    src="https://themesbrand.com/velzon/html/default/assets/images/flags/us.svg"
                    className="mr-2 align-middle rounded h-[18px]"
                    alt=""
                  />
                  <span className=" align-middle  text-black">English</span>
                </a>
                <a
                  href="#!"
                  className="py-2 px-5 flex items-center hover:bg-light hover:text-[#1e2125]"
                >
                  <img
                    src="https://themesbrand.com/velzon/html/default/assets/images/flags/spain.svg"
                    className="mr-2 align-middle rounded h-[18px]"
                    alt=""
                  />
                  <span className=" align-middle  text-black">Española</span>
                </a>
                <a
                  href="#!"
                  className="py-2 px-5 flex items-center hover:bg-light hover:text-[#1e2125]"
                >
                  <img
                    src="https://themesbrand.com/velzon/html/default/assets/images/flags/germany.svg"
                    className="mr-2 align-middle rounded h-[18px]"
                    alt=""
                  />
                  <span className=" align-middle  text-black">Deutsche</span>
                </a>
                <a
                  href="#!"
                  className="py-2 px-5 flex items-center hover:bg-light hover:text-[#1e2125]"
                >
                  <img
                    src="https://themesbrand.com/velzon/html/default/assets/images/flags/italy.svg"
                    className="mr-2 align-middle rounded h-[18px]"
                    alt=""
                  />
                  <span className=" align-middle  text-black">Italiana</span>
                </a>
                <a
                  href="#!"
                  className="py-2 px-5 flex items-center hover:bg-light hover:text-[#1e2125]"
                >
                  <img
                    src="https://themesbrand.com/velzon/html/default/assets/images/flags/russia.svg"
                    className="mr-2 align-middle rounded h-[18px]"
                    alt=""
                  />
                  <span className=" align-middle  text-black">русский</span>
                </a>
                <a
                  href="#!"
                  className="py-2 px-5 flex items-center hover:bg-light hover:text-[#1e2125]"
                >
                  <img
                    src="https://themesbrand.com/velzon/html/default/assets/images/flags/china.svg"
                    className="mr-2 align-middle rounded h-[18px]"
                    alt=""
                  />
                  <span className=" align-middle  text-black">中国人</span>
                </a>
                <a
                  href="#!"
                  className="py-2 px-5 flex items-center hover:bg-light hover:text-[#1e2125]"
                >
                  <img
                    src="https://themesbrand.com/velzon/html/default/assets/images/flags/french.svg"
                    className="mr-2 align-middle rounded h-[18px]"
                    alt=""
                  />
                  <span className=" align-middle  text-black">français</span>
                </a>
                <a
                  href="#!"
                  className="py-2 px-5 flex items-center hover:bg-light hover:text-[#1e2125]"
                >
                  <img
                    src="https://themesbrand.com/velzon/html/default/assets/images/flags/ae.svg"
                    className="mr-2 align-middle rounded h-[18px]"
                    alt=""
                  />
                  <span className=" align-middle  text-black">Arabic</span>
                </a>
              </div>
            </div>
          </span>

          <span className="bg-gr cursor-pointer hover:bg-blue-btn-bg px-1 md:px-3 py-3 rounded-full relative">
            <BiCategoryAlt
              onClick={handleCategory}
              className={`text-[23px] dark:text-gray-400 font-normal hover:text-blue ${
                lightTop ? "" : "text-gray-400 "
              }`}
            />
            <div
              className={
                category
                  ? "dropdown-menu md:w-[320px] w-[350px] left-93 block"
                  : "hidden"
              }
            >
              <div className="p-4 flex justify-between items-center border-b border-b-gray-300">
                <h5 className="m-0 font-semibold text-[15px]">Web Apps</h5>
                <div className="items-center justify-center rounded bg-[#299cdb1a] flex">
                  <p className="text-cyan mb-0 px-2 py-1">View All Apps</p>
                  <RiArrowRightSLine />
                </div>
              </div>
              <div className="p-2">
                <div className="grid grid-cols-3">
                  <div className="dropdown-icon">
                    <img
                      src="https://themesbrand.com/velzon/html/default/assets/images/brands/github.png"
                      className="h-6 mx-auto"
                      alt="github"
                    />
                    <span>Github</span>
                  </div>
                  <div className="dropdown-icon">
                    <img
                      src="https://themesbrand.com/velzon/html/default/assets/images/brands/dribbble.png"
                      className="h-6 mx-auto"
                      alt="bitbucket"
                    />
                    <span>Bitbucket</span>
                  </div>
                  <div className="dropdown-icon">
                    <img
                      src="https://themesbrand.com/velzon/html/default/assets/images/brands/bitbucket.png"
                      className="h-6 mx-auto"
                      alt="dribble"
                    />
                    <span>Dribbble</span>
                  </div>
                </div>
                <div className="grid grid-cols-3">
                  <div className="dropdown-icon">
                    <img
                      src="https://themesbrand.com/velzon/html/default/assets/images/brands/dropbox.png"
                      className="h-6 mx-auto"
                      alt="dropbox"
                    />
                    <span>Dropbox</span>
                  </div>
                  <div className="dropdown-icon">
                    <img
                      src="https://themesbrand.com/velzon/html/default/assets/images/brands/mail_chimp.png"
                      className="h-6 mx-auto"
                      alt="mail_chimp"
                    />
                    <span>Mail Chimp</span>
                  </div>
                  <div className="dropdown-icon">
                    <img
                      src="https://themesbrand.com/velzon/html/default/assets/images/brands/slack.png"
                      className="h-6 mx-auto"
                      alt="slack"
                    />
                    <span>Slack</span>
                  </div>
                </div>
              </div>
            </div>
          </span>
          <span className="bg-gr cursor-pointer hover:bg-blue-btn-bg px-1 md:px-3 py-3 rounded-full relative">
            <div className="" onClick={handleCart}>
              <BiShoppingBag
                className={`text-[23px] dark:text-gray-400 font-normal hover:text-blue ${
                  lightTop ? "" : "text-gray-400 "
                }`}
              />
              <span className="absolute top-[-2px] py-[0.25em] px-[0.60em] text-white right-[-2px] text-[10px] rounded-full bg-info">
                5
              </span>
            </div>
            <div
              className={
                cart
                  ? "dropdown-menu md:w-[420px] w-[380px] left-140 block"
                  : "hidden"
              }
            >
              <div className="flex justify-between items-center p-4 border-b border-dashed border-b-gray-300">
                <h5 className="m-0 font-semibold text-[15px]">My Cart</h5>
                <p className="text-yellow text-[13px] px-[0.65em] py-[0.35em] mb-0 bg-[#f7b84b1a]">
                  5 Items
                </p>
              </div>
              <div className="max-h-[300px] overflow-y-scroll overflow-x-hidden border-b border-b-gray-300">
                <div className="p-2 ">
                  <div className="px-4 py-2 flex">
                    <img
                      src="https://themesbrand.com/velzon/html/default/assets/images/products/img-1.png"
                      alt="Branded T-shirt"
                      className="mr-4 p-2 w-12 h-12 rounded-full bg-light"
                    />
                    <div className=" flex-1">
                      <h6 className="text-[14px]">Branded T-shirts</h6>
                      <p className="mb-0 text-gray text-[12px]">
                        Quantity:<span>10 x $32</span>
                      </p>
                    </div>
                    <div className="px-2">
                      <h5 className="m-0 font-normal">$320</h5>
                    </div>
                    <div className="pl-2">
                      <button className="btn-sm rounded hover:text-secondary bg-[#3577f11a] border-transparent">
                        <RiCloseFill className="text-[16px] mx-auto" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-2 ">
                  <div className="px-4 py-2 flex">
                    <img
                      src="https://themesbrand.com/velzon/html/default/assets/images/products/img-2.png"
                      alt="Bentwood Chair"
                      className="mr-4 p-2 w-12 h-12 rounded-full bg-light"
                    />
                    <div className=" flex-1">
                      <h6 className="text-[14px]">Bentwood chair</h6>
                      <p className="mb-0 text-gray text-[12px]">
                        Quantity:<span>5 x $18</span>
                      </p>
                    </div>
                    <div className="px-2">
                      <h5 className="m-0 font-normal">$89</h5>
                    </div>
                    <div className="pl-2">
                      <button className="btn-sm rounded hover:text-secondary bg-[#3577f11a] border-transparent">
                        <RiCloseFill className="text-[16px] mx-auto" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-2 ">
                  <div className="px-4 py-2 flex">
                    <img
                      src="https://themesbrand.com/velzon/html/default/assets/images/products/img-3.png"
                      alt="Borosil Paper Cup"
                      className="mr-4 p-2 w-12 h-12 rounded-full bg-light"
                    />
                    <div className=" flex-1">
                      <h6 className="text-[14px]">Borosil Paper Cup</h6>
                      <p className="mb-0 text-gray text-[12px]">
                        Quantity:<span>3 x $250</span>
                      </p>
                    </div>
                    <div className="px-2">
                      <h5 className="m-0 font-normal">$750</h5>
                    </div>
                    <div className="pl-2">
                      <button className="btn-sm rounded hover:text-secondary bg-[#3577f11a] border-transparent">
                        <RiCloseFill className="text-[16px] mx-auto" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-2 ">
                  <div className="px-4 py-2 flex">
                    <img
                      src="https://themesbrand.com/velzon/html/default/assets/images/products/img-6.png"
                      alt="Gray Style T-Shirt"
                      className="mr-4 p-2 w-12 h-12 rounded-full bg-light"
                    />
                    <div className=" flex-1">
                      <h6 className="text-[14px]">Gray Style T-shirt</h6>
                      <p className="mb-0 text-gray text-[12px]">
                        Quantity:<span>1 x $1250</span>
                      </p>
                    </div>
                    <div className="px-2">
                      <h5 className="m-0 font-normal">$1250</h5>
                    </div>
                    <div className="pl-2">
                      <button className="btn-sm rounded hover:text-secondary bg-[#3577f11a] border-transparent">
                        <RiCloseFill className="text-[16px] mx-auto" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-2 ">
                  <div className="px-4 py-2 flex">
                    <img
                      src="https://themesbrand.com/velzon/html/default/assets/images/products/img-5.png"
                      alt="Stillbird Helmet"
                      className="mr-4 p-2 w-12 h-12 rounded-full bg-light"
                    />
                    <div className=" flex-1">
                      <h6 className="text-[14px]">Stillbird Helmet</h6>
                      <p className="mb-0 text-gray text-[12px]">
                        Quantity:<span>2 x $990</span>
                      </p>
                    </div>
                    <div className="px-2">
                      <h5 className="m-0 font-normal">$320</h5>
                    </div>
                    <div className="pl-2">
                      <button className="btn-sm rounded hover:text-secondary bg-[#3577f11a] border-transparent">
                        <RiCloseFill className="text-[16px] mx-auto" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 ">
                <div className="pb-4 flex justify-between">
                  <h5 className="mb-0 text-gray">Total:</h5>
                  <div className="px-2">
                    <h5 className="mb-0">$3399.00</h5>
                  </div>
                </div>
                <a
                  href="#!"
                  className="w-[100%] rounded-md block px-[9rem] py-2 text-white bg-success text-center"
                >
                  Checkout
                </a>
              </div>
            </div>
          </span>

          <span
            onClick={onFullScreenChange}
            className="cursor-pointer hover:bg-blue-btn-bg px-1 md:px-3 py-3 rounded-full"
          >
            {isFullScreen ? (
              <BiFullscreen
                className={`text-[23px] dark:text-gray-400 font-normal hover:text-blue ${
                  lightTop ? "" : "text-gray-400 "
                }`}
              />
            ) : (
              <BiExitFullscreen
                className={`text-[23px] dark:text-gray-400 font-normal hover:text-blue ${
                  lightTop ? "" : "text-gray-400 "
                }`}
              />
            )}
          </span>

          <ThemeSwitcher className="text-[23px] dark:text-gray-400 font-normal" />

          <span className=" cursor-pointer hover:bg-blue-btn-bg px-1 md:px-3 py-3 rounded-full relative mr-1 md:mr-4">
            <div className="" onClick={handleNotification}>
              <IoMdNotificationsOutline
                className={`text-[23px] dark:text-gray-400 font-normal hover:text-blue ${
                  lightTop ? "" : "text-gray-400 "
                }`}
              />
              <span className="absolute top-[-2px] py-[0.25em] px-[0.60em] text-white right-[-2px] text-[10px] rounded-full bg-danger">
                3
              </span>
            </div>
            <div
              className={
                notification
                  ? "dropdown-menu md:w-[320px] left-230 w-[340px] block"
                  : "hidden"
              }
            >
              <div className="bg-primary  rounded-t-md">
                <div className="p-3 flex justify-between items-center">
                  <h6 className="text-white font-semibold text-[16px]">
                    Notifications
                  </h6>
                  <span className="text-gray-100 bg-[#f3f6f91a] py-[0.35em] px-[0.65em] rounded text-[13px] font-semibold ">
                    4 New
                  </span>
                </div>
                <div className="pt-2 px-2">
                  <ul className="grid grid-cols-4 items-center">
                    <li className="py-2 px-4 bg-white  rounded-t-md border border-white">
                      <a href="#!" className="text-primary ">
                        {" "}
                        All (4)
                      </a>
                    </li>
                    <li className="py-2 px-4">
                      <a href="#!" className="text-[#ffffff99]  rounded-t-md">
                        Messages
                      </a>
                    </li>
                    <li className="py-2 px-4">
                      <a href="#!" className="text-[#ffffff99]  rounded-t-md">
                        {" "}
                        Alerts
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="px-2 py-2 max-h-[300px] flex flex-col items-center overflow-y-scroll bg-white">
                  <div className="py-3 px-4 flex items-start">
                    <div className="mr-2 w-12 h-8 rounded-full bg-[#299cdb2e] flex items-center">
                      <BiBadgeCheck className="text-[16px] min-w-full text-info mx-auto " />
                    </div>
                    <div className="">
                      <h6 className=" text-light-header-color text-[14px] mb-2">
                        Your <b>Elite</b> author Graphic Optimization{" "}
                        <span className="text-secondary">reward</span> is ready!
                      </h6>
                      <p className="text-[11px] mb-0 text-gray flex items-center">
                        <RxClock className="mr-1" />
                        JUST 30 SEC AGO
                      </p>
                    </div>
                    <input type="checkbox" className="px-2 text-[15px]" />
                  </div>
                  <div className="py-3 px-4 flex items-start">
                    <div className="mr-2 w-12 h-8 flex items-center">
                      <img
                        src="https://themesbrand.com/velzon/html/default/assets/images/users/avatar-2.jpg"
                        className=" min-w-full  rounded-full"
                      />
                    </div>
                    <div className="">
                      <h6 className=" text-light-header-color text-[14px] mb-2 font-semibold">
                        Angela Bernier
                      </h6>
                      <p className="text-gray mb-2">
                        Answered to your comment on the cash flow forecat's
                      </p>
                      <p className="text-[11px] mb-0 text-gray flex items-center">
                        <RxClock className="mr-1" />
                        48 MIN AGO
                      </p>
                    </div>
                    <input type="checkbox" className="px-2 text-[15px]" />
                  </div>
                  <div className="py-3 px-4 flex items-start">
                    <div className="mr-2 w-12 h-8 rounded-full bg-[#f065482e] flex items-center">
                      <BiMessageSquareDots className="text-[16px] min-w-full text-danger mx-auto " />
                    </div>
                    <div className="">
                      <h6 className=" text-light-header-color text-[14px] mb-2">
                        You have received{" "}
                        <span className="text-secondary">20</span> new messages
                        in the conversation
                      </h6>
                      <p className="text-[11px] mb-0 text-gray flex items-center">
                        <RxClock className="mr-1" />2 HRS AGO
                      </p>
                    </div>
                    <input type="checkbox" className="px-2 text-[15px]" />
                  </div>
                  <div className="py-3 px-4 flex items-start">
                    <div className="mr-2 w-8 h-8 ">
                      <img
                        src="https://themesbrand.com/velzon/html/default/assets/images/users/avatar-8.jpg"
                        className=" min-w-full rounded-full"
                      />
                    </div>
                    <div className="">
                      <h6 className=" text-light-header-color text-[14px]">
                        Maureen Gibson
                      </h6>
                      <p className="text-gray mb-2">
                        We talked about a project on linkedin.
                      </p>
                      <p className="text-[11px] mb-0 text-gray flex items-center">
                        <RxClock className="mr-1" />4 HRS AGO
                      </p>
                    </div>
                    <input type="checkbox" className="px-2 text-[15px]" />
                  </div>
                  <span className="text-green py-2 px-[0.9rem] flex items-center my-4 rounded-md cursor-pointer bg-[#0ab39c1a]">
                    View All Notifications
                    <RiArrowRightLine />
                  </span>
                </div>
              </div>
            </div>
          </span>

          <div
            onClick={() => setProfileModal(!profileModal)}
            className={`flex items-center gap-3  px-4 py-1 ${
              lightTop ? "bg-light-gray-bg" : "bg-dark"
            }  dark:bg-dark h-[70px] relative`}
          >
            <motion.div

            initial={{opacity:0, zIndex: '-10000', y:'-100%'}}
            animate={profileModal? {opacity:1, zIndex: '10000', y:0}: {opacity:0, zIndex: '-10000', y:'-100%'}}
            transition={{
              duration: .5
            }}
              className={`bg-white dark:bg-dark absolute bottom-[-8.5rem] right-0   py-4 rounded-md z-[999] shadow-lg`}
            >
              <h6 className="text-light-header-color dark:text-dark-header-color font-medium text-xs capitalize px-6 mb-1">
                welcome anna!
              </h6>
              <div onClick={() => nav('/profile')} className="flex items-center justify-start gap-2 px-6 hover:bg-light-gray-bg duration-150 py-1 cursor-pointer">
                <BiSolidUserCircle className="text-light-header-color dark:text-dark-para-color text-[.9rem]" />
                
                <span className="text-light-header-color dark:text-dark-para-color font-medium text-[.8rem] capitalize">
                  Profile
                </span>
              </div>
              <div  onClick={() => nav('/profile/settings')} className="flex items-center justify-start gap-2 px-6 hover:bg-light-gray-bg duration-150 py-1 cursor-pointer">
                <FiSettings className="text-light-header-color dark:text-dark-para-color text-[.9rem]" />
                
                <span className="text-light-header-color  dark:text-dark-para-color font-medium text-[.8rem] capitalize">
                  Setting
                </span>
              </div>
              <div  onClick={handleLogout} className="flex items-center justify-start gap-2 px-6 hover:bg-light-gray-bg duration-150 py-1 cursor-pointer">
                <TbLogout className="text-light-header-color dark:text-dark-para-color text-[.9rem]" />
                
                <span className="text-light-header-color  dark:text-dark-para-color font-medium text-[.8rem] capitalize">
                  Logout
                </span>
              </div>
            </motion.div>


            <div className="w-8 h-8 rounded-full overflow-hidden cursor-pointer">
              <img src={admin} alt="" />
            </div>
            <div className="font-para xl:block hidden">
              <span
                className={`text-light-header-color ${
                  lightTop ? "" : "text-dark-header-color"
                }  dark:text-dark-header-color text-[13px] font-semibold -tracking-tighter cursor-pointer`}
              >
                Anna Adame
              </span>
              <p
                className={`text-light-para-color text-[12px] font-medium -tracking-tighter cursor-pointer`}
              >
                Founder
              </p>
            </div>
          </div>
        </div>
      </div>
      {hor && <SideBarHor />}
    </div>
  );
};

export default TopBar;
