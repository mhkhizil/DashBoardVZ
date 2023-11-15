import React, { useContext, useEffect, useState } from "react";
import TopBar from "./TopBar";
import {
  RiImageEditLine,
  RiCameraFill,
  RiEditBoxLine,
  RiAddFill,
  RiGlobalLine,
  RiBasketballLine,
  RiPinterestFill,
} from "react-icons/ri";
import { VscGithub } from "react-icons/vsc";
import ChangePassword from "../components/ChangePassword";
import Experience from "../components/Experience";
import PersonalDetails from "../components/PersonalDetails";
import PrivacyPolicy from "../components/PrivacyPolicy";
import { motion, AnimatePresence } from "framer-motion";
import { StateContext } from "../Context/StateContext";
import { useNavigate } from "react-router-dom";

const ProfileSettings = () => {
  const [tab, setTab] = useState("PersonalDetails");

  const { semi, detached } = useContext(StateContext);
  const nav = useNavigate();

  const token = localStorage.getItem("token");
  useEffect(() => {
    !token && nav("/logout");
  }, []);

  return (
    <div
      className={`z-50 bg-light-gray-bg dark:bg-dark-bg-color flex-1 font-header-regular min-h-screen overflow-y-auto  w-full relative  ${
        semi ? "px-[10rem]" : ""
      }`}
    >
      {!detached && <TopBar />}

      <div className="relative md:h-[260px] font-para">
        <img
          src="https://themesbrand.com/velzon/html/default/assets/images/profile-bg.jpg"
          alt="Cover"
          className="w-full h-full object-cover bg-no-repeat"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171e32] to-[#405189] opacity-90"></div>
        <button className="absolute flex items-center text-xs sm:text-sm gap-1 rounded-md bg-light-gray-bg dark:bg-dark-bg-color dark:text-light top-4 end-4 p-2">
          <RiImageEditLine />
          <span>Change Cover</span>
        </button>
      </div>

      <div className=" lg:flex bg-light-gray-bg dark:bg-dark-bg-color font-para">
        <aside className="w-full lg:w-1/4 flex flex-col items-center p-4 gap-16 mb-10 lg:mb-0">
          <div className="w-full p-4 relative text-center bg-white dark:bg-gray-900 rounded-lg -mt-10">
            <div className="relative inline-block my-3">
              <img
                className="w-28 h-28 object-cover rounded-full p-1 bg-light-gray-bg dark:bg-dark-bg-color border border-light dark:border-gray-dark max-w-full"
                src="https://themesbrand.com/velzon/html/default/assets/images/users/avatar-1.jpg"
                alt="profile"
              />
              <div className="absolute right-0 left-auto bottom-0 cursor-pointer mx-auto mb-4">
                <input
                  type="file"
                  className="hidden"
                  id="profile-img-file-input"
                />
                <label
                  htmlFor="profile-img-file-input"
                  className="absolute right-0 left-auto bottom-0 w-8 h-8 bg-light dark:bg-dark dark:text-light flex justify-center items-center rounded-full"
                >
                  <RiCameraFill />
                </label>
              </div>
            </div>
            <h5 className="text-lg dark:text-light">Anna Adame</h5>
            <p className="mb-0 text-sm text-slate-500 dark:text-gray text-opacity-50">
              Lead Designer / Developer
            </p>
          </div>

          <div className="w-full p-4 relative text-center bg-white dark:bg-gray-900 rounded-lg -mt-10 flex flex-col gap-10">
            <div className="flex justify-between">
              <h3 className="dark:text-light text-lg">Complete Your Profile</h3>
              <button className="px-2 py-1 bg-light-gray-bg dark:bg-dark-bg-color text-light-side-bar-color dark:text-light flex justify-center items-center text-xs rounded">
                <RiEditBoxLine />
                <span>Edit</span>
              </button>
            </div>
            <div className="w-full relative">
              <div className="shadow w-full bg-light-gray-bg dark:bg-dark-bg-color rounded-full p-1 flex">
                <div className="bg-orange w-[30%] text-xs leading-none py-1 text-center text-white rounded-full"></div>
                <div className="w-2 h-2 bg-white -ms-2.5 rounded-full"></div>
                <div className="text-xs p-1 absolute left-16 -top-7 text-white bg-light-side-bar-color rounded">
                  30%
                </div>
              </div>
            </div>
          </div>

          <div className="w-full p-4 relative text-center bg-white dark:bg-gray-900 rounded-lg -mt-10">
            <div className="flex justify-between mb-5">
              <h3 className="text-lg dark:text-light">Portfolio</h3>
              <button className="px-2 py-1 bg-light-gray-bg dark:bg-dark-bg-color text-light-side-bar-color dark:text-light flex justify-center items-center text-xs rounded">
                <RiAddFill />
                <span>Add</span>
              </button>
            </div>
            <div className="w-full flex justify-between items-center mb-4">
              <label
                htmlFor="githubLink"
                className=" w-8 h-8 bg-black dark:bg-white flex justify-center items-center rounded-full"
              >
                <VscGithub className="text-black dark:text-white bg-white dark:bg-gray-900 rounded-full" />
              </label>
              <input
                className="appearance-none block w-5/6 text-sm px-3 py-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-light border border-gray-300 rounded leading-tight focus:outline-none focus:border-gray-400"
                value="@daveadame"
                id="githubLink"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="w-full flex justify-between items-center mb-4 ">
              <label
                htmlFor="globalLink"
                className=" w-8 h-8 bg-light-side-bar-color flex justify-center items-center rounded-full"
              >
                <RiGlobalLine className="text-light-side-bar-color dark:text-light bg-white dark:bg-gray-900  rounded-full" />
              </label>
              <input
                className="appearance-none block w-5/6 text-sm px-3 py-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-light border border-gray-300 rounded leading-tight focus:outline-none focus:border-gray-400"
                value="www.velzon.com"
                id="globalLink"
                type="text"
                placeholder="www.example.com"
              />
            </div>
            <div className="w-full flex justify-between items-center mb-4">
              <label
                htmlFor="globalLink1"
                className=" w-8 h-8 bg-green flex justify-center items-center rounded-full"
              >
                <RiBasketballLine className="text-white bg-green rounded-full" />
              </label>
              <input
                className="appearance-none block w-5/6 text-sm px-3 py-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-light border border-gray-300 rounded leading-tight focus:outline-none focus:border-gray-400"
                value="@dave_adame"
                id="globalLink1"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="w-full flex justify-between items-center mb-4">
              <label
                htmlFor="pinterestName"
                className=" w-8 h-8 bg-red flex justify-center items-center rounded-full"
              >
                <RiPinterestFill className="text-white bg-red rounded-full" />
              </label>
              <input
                className="appearance-none block w-5/6 text-sm px-3 py-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-light border border-gray-300 rounded leading-tight focus:outline-none focus:border-gray-400"
                value="Advance Dave"
                id="pinterestName"
                type="text"
                placeholder="Username"
              />
            </div>
          </div>
        </aside>
        <section className="w-full lg:w-3/4 h-full p-4">
          <div className="w-full relative bg-white dark:bg-gray-900 -mt-10 rounded-lg">
            <nav className="w-full border-b-[1px] border-gray-300 dark:border-gray-dark">
              <AnimatePresence>
                <ul className="flex cursor-pointer text-light-side-bar-color dark:text-light ps-2">
                  <li
                    onClick={(e) => setTab("PersonalDetails")}
                    className={`p-3   ${
                      tab === "PersonalDetails" &&
                      "active dark:text-light-side-bar-text-color"
                    }`}
                    transition={{ delay: 1 }}
                  >
                    <p>Personal Detail</p>
                  </li>
                  <li
                    onClick={(e) => setTab("ChangePassword")}
                    className={`p-3  ${
                      tab === "ChangePassword" &&
                      "active dark:text-light-side-bar-text-color"
                    }`}
                    transition={{ delay: 1 }}
                  >
                    Change Password
                  </li>
                  <li
                    onClick={(e) => setTab("Experience")}
                    className={`p-3  ${
                      tab === "Experience" &&
                      "active dark:text-light-side-bar-text-color"
                    }`}
                  >
                    Experience
                  </li>
                  <li
                    onClick={(e) => setTab("PrivacyPolicy")}
                    className={`p-3  ${
                      tab === "PrivacyPolicy" &&
                      "active dark:text-light-side-bar-text-color"
                    }`}
                  >
                    Privacy Policy
                  </li>
                </ul>
              </AnimatePresence>
            </nav>
            {tab === "PersonalDetails" && <PersonalDetails />}
            {tab === "ChangePassword" && <ChangePassword />}
            {tab === "Experience" && <Experience />}
            {tab === "PrivacyPolicy" && <PrivacyPolicy />}
          </div>
        </section>
      </div>

      <footer className=" w-full flex justify-between items-center bg-white dark:bg-gray-900 text-gray p-4">
        <p>2023 © Velzon.</p>
        <p>Design & Develop by Themesbrand</p>
      </footer>
    </div>
  );
};

export default ProfileSettings;
