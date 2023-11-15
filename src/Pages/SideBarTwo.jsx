import "flowbite/dist/flowbite.min.js";
import {
  RiDashboard2Line,
  RiApps2Line,
  RiLayout3Line,
  RiAccountCircleLine,
  RiPagesLine,
  RiRocketLine,
  RiAuctionFill,
  RiLandscapeFill,
  RiLockPasswordLine
} from "react-icons/ri";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";

import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { StateContext } from "../Context/StateContext";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
const SideBarTwo = () => {
  const {
    isSideOpen,
    setIsSideOpen,
    sideLight,
    sideDark,
    sideGradient,
    detached,
    img,
    img1,
    img2,
    img3,
    img4,
  } = useContext(StateContext);
  const [dash, setDash] = useState(true);
  const [form, setForm] = useState(false);
  const [layout, setLayout] = useState(false);
  const [auth, setAuth] = useState(false);
  const [page, setPage] = useState(false);
  const [landing, setLanding] = useState(false);



  const sideVariant = {
    open: {
      width: "16rem",
      transition: {
        damping: 40,
      },
    },
    closed: {
      width: "4.5rem",
      transition: {
        damping: 40,
      },
    },
  };

  const nav = useNavigate();

  const BgImg =
    (img1 &&
      `bg-[url('https://themesbrand.com/velzon/html/default/assets/images/sidebar/img-1.jpg')]`) ||
    (img2 &&
      `bg-[url('https://themesbrand.com/velzon/html/default/assets/images/sidebar/img-2.jpg')]`) ||
    (img3 &&
      `bg-[url('https://themesbrand.com/velzon/html/default/assets/images/sidebar/img-3.jpg')]`) ||
    (img4 &&
      `bg-[url('https://themesbrand.com/velzon/html/default/assets/images/sidebar/img-4.jpg')]`);

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

  const [profile, setProfile] = useState(false);

  return (
    <motion.div
      variants={!tablet ? Sidebar_animationR : Sidebar_animation}
      animate={isSideOpen ? "open" : "closed"}
      className={`${
        BgImg ? BgImg : "bg-light-side-bar-color"
      }  z-[9999] absolute    overflow-y-auto sideBar lg:relative ${
        isSideOpen ? "!w-[18rem] " : "!w-[4rem] "
      } flex justify-start items-stretch ${
        img && sideLight ? "bg-white text-gray" : ""
      } ${
        img && sideDark
          ? "bg-light-side-bar-color dark:bg-dark-side-bar-color"
          : ""
      } ${img && sideGradient ? " bg-sideGradient" : ""} ${
        detached ? "min-h-screen" : "h-screen"
      }`}
    >
      <motion.div
        onClick={() => setIsSideOpen(false)}
        className={`bg-gray-btn-bg z-[-1] fixed  lg:scale-0 lg:ml-0 ml-[18rem] h-screen top-0 left-0  lg:hidden px-1 ${
          isSideOpen ? "!w-full" : "w-0"
        }`}
      ></motion.div>

      {(sideDark && (
        <div className="absolute inset-0 h-full bg-gradient-to-t from-[#171e32] to-[#405189] opacity-80 z-[-1]"></div>
      )) ||
        (sideGradient && (
          <div className="absolute inset-0  h-full bg-sideGradient opacity-80  z-[-1]"></div>
        )) ||
        (sideLight && (
          <div className="absolute inset-0 h-full bg-gradient-to-t from-[#fff] to-[#fff] opacity-90 z-[-5]"></div>
        ))}

      <div
        className={`w-[4rem]  h-full    ${
          sideLight ? "bg-white text-gray" : ""
        } ${sideDark ? "bg-[#3a4b84] dark:bg-dark-side-bar-color" : ""} ${
          sideGradient ? " bg-sideGradient" : ""
        }`}
      >
        <div className=" grid place-items-center py-6 mb-4">
          <img
            src="https://themesbrand.com/velzon/html/default/assets/images/logo-sm.png"
            className="w-6 h-6"
            alt=""
          />
        </div>
        <div className="grid  place-items-center gap-4">
          <div
            onClick={() => (
              setDash(true),
              setLayout(false),
              setAuth(false),
              setPage(false),
              setLanding(false),
              setIsSideOpen(true),
              setForm(false)
            )}
            className={`${
              dash ? "bg-gray-btn-bg rounded-md" : ""
            } cursor-pointer p-2`}
          >
            <RiDashboard2Line
              className={` text-2xl ${
                !sideLight ? "text-[#abb9ea] " : "text-gray-500"
              }`}
            />
          </div>

          <div
            onClick={() => (
              setDash(false),
              setLayout(false),
              setAuth(true),
              setPage(false),
              setLanding(false),
              setIsSideOpen(true),
              setForm(false)
            )}
            className={`${
              auth ? "bg-gray-btn-bg rounded-md" : ""
            } cursor-pointer p-2`}
          >
            <RiLockPasswordLine
              className={` text-2xl ${
                !sideLight ? "text-[#abb9ea] " : "text-gray-500"
              }`}
            />
          </div>
          <div
            onClick={() => (
              setDash(false),
              setLayout(false),
              setAuth(false),
              setPage(true),
              setLanding(false),
              setIsSideOpen(true),
              setForm(false)
            )}
            className={`${
              page ? "bg-gray-btn-bg rounded-md" : ""
            } cursor-pointer p-2`}
          >
            <RiPagesLine
              className={` text-2xl ${
                !sideLight ? "text-[#abb9ea] " : "text-gray-500"
              }`}
            />
          </div>
          <div
            onClick={() => (
              setDash(false),
              setLayout(false),
              setAuth(false),
              setPage(false),
              setForm(true)
            )}
            className={`${
              form ? "bg-gray-btn-bg rounded-md" : ""
            } cursor-pointer p-2`}
          >
            <FaWpforms
              className={` text-2xl ${
                !sideLight ? "text-[#abb9ea] " : "text-gray-500"
              }`}
            />
          </div>
        </div>
      </div>
      

      <div
        className={` ${
          detached ? "min-h-screen" : "max-h-screen"
        } overflow-y-auto sideBar flex-1 ${isSideOpen ? "block" : "hidden"}`}
      >
        <div className=" grid place-items-center py-6 mb-4">
          <img
            src="https://themesbrand.com/velzon/html/default/assets/images/logo-light.png"
            className="w-24 h-auto"
            alt=""
          />
        </div>
        <div className={`${sideDark || sideGradient ? "text-white" : ""}`}>
          <ul
            id="dropdown-example"
            className={`w-full   py-2 space-y-2 ${dash ? "block" : "hidden"}`}
          >
            <li
              onClick={() => nav("/")}
              className=" text-inherit pb-2 flex  w-1/3 items-center"
            >
              <span className={`${sideLight? 'text-light-side-bar-color':'text-light-side-bar-text-color duration-200 group-hover:text-white'} text-[1.1rem] font-header-medium font-normal px-2`}>
                Ecommerce
              </span>
            </li>
          </ul>
          <ul
            id="dropdown-example"
            className={`w-full   py-2 space-y-2 ${auth ? "block" : "hidden"}`}
          >
            <li
              onClick={() => nav("/password-reset")}
              className=" text-inherit pb-2 flex   items-center cursor-pointer"
            >
              <span className={`${sideLight? 'text-light-side-bar-color':'text-light-side-bar-text-color duration-200 group-hover:text-white'} text-[1.1rem] font-header-medium font-normal px-2`}>
                Password Reset
              </span>
            </li>
          </ul>

          <ul
            id="dropdown-example12"
            className={`w-full   py-2 space-y-2 ${page ? "block" : "hidden"}`}
          >
            <button className=" w-full mt-4 relative group">
              <div
                onClick={() => setProfile(!profile)}
                className="flex items-center justify-between w-full"
              >
                <span
                  className={`${sideLight? 'text-light-side-bar-color':'text-light-side-bar-text-color duration-200 group-hover:text-white'} text-[1.1rem] font-header-medium font-normal px-2`}
                >
                  Profile
                </span>
                {profile ? (
                  <MdOutlineKeyboardArrowDown
                    className={`${
                      sideLight ? "text-light-side-bar-color" : "text-light-side-bar-text-color duration-200 group-hover:text-white"
                    }  text-xl ${!isSideOpen ? "hidden" : "inline-block"}`}
                  />
                ) : (
                  <MdOutlineKeyboardArrowRight
                    className={`${
                      sideLight ? "text-light-side-bar-color" : "text-white"
                    }  text-xl ${!isSideOpen ? "hidden" : "inline-block"}`}
                  />
                )}
              </div>
              <motion.div
                initial={{ opacity: 0, y: -60, display: "none" }}
                animate={
                  profile
                    ? { opacity: 1, y: 0, display: "block" }
                    : { opacity: 0, y: -60, display: "none" }
                }
                transition={{
                  duration: 0.4,
                }}
                className="mt-2"
              >
                <div className=" text-start px-10">
                  <span
                    onClick={() => nav("/profile")}
                    className={`${
                      sideLight ? "text-light-side-bar-color" : "text-light-side-bar-text-color duration-200 hover:text-white"
                    } text-[.95rem]`}
                  >
                    simple page
                  </span>
                </div>
                <div className=" text-start px-10">
                  <span
                    onClick={() => nav("/profile/settings")}
                    className={`${
                      sideLight ? "text-light-side-bar-color" : "text-light-side-bar-text-color duration-200 hover:text-white pt-2"
                    } text-[.95rem] mt-3`}
                  >
                    profile setting
                  </span>
                </div>
              </motion.div>
            </button>
          </ul>
          <ul
            id="dropdown-example"
            className={`w-full   py-2 space-y-2 ${form ? "block" : "hidden"}`}
          >
            <li
               onClick={() => nav('/add-blog')}
              className=" text-inherit pb-2 flex   items-center cursor-pointer"
            >
              <span className={`${sideLight? 'text-light-side-bar-color':'text-light-side-bar-text-color duration-200 group-hover:text-white'} text-[1.1rem] font-header-medium font-normal px-2`}>
                New Blog
              </span>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default SideBarTwo;
