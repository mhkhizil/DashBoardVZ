import { Route, Routes } from "react-router-dom";
import SideBar from "./Pages/SideBar";

// import Home from "./Pages/Home";
import ProfileSettings from "./Pages/ProfileSettings";
// import TopBar from "./Pages/TopBar";
import Test from "./Pages/Test";

import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Ecommerce from "./Pages/Ecommerce";
import { motion } from "framer-motion";
import { FiSettings } from "react-icons/fi";
import { useContext, useState } from "react";
import { StateContext } from "./Context/StateContext";
import SettingBar from "./Components/SettingBar";
import SideBarTwo from "./Pages/SideBarTwo";
import PasswordReset from "./Pages/PassReset";
import { useLocation } from "react-router-dom/dist";
import SideSmallHover from "./Pages/SideSmallHover";
import SideBoxed from "./Pages/SideBoxed";
import SideCompact from "./Pages/SideCompact";
import TopBar from "./Pages/TopBar";
import SideBarHor from "./Pages/SideBarHor";
import SmallIconView from "./Pages/SmallIconView";
import { useMediaQuery } from "react-responsive";
import Overview from "./Pages/Profile/Overview";
import Activities from "./Pages/Profile/Activities";
import Projects from "./Pages/Profile/Projects";
import Docu from "./Pages/Profile/Docu";
import Login from "./Pages/Login";
import Logout from "./Pages/Logout";
import SignUp from "./Pages/SignUp";
import Addblog from "./Pages/AddBlog";

const App = () => {
  const tablet = useMediaQuery({
    query: "(min-width: 1024px)",
  });
  const variant = {
    open: { rotate: 360, transition: { duration: 3, repeat: Infinity } },
    closed: { transition: { duration: 0 } },
  };

  const {
    setting,
    setSetting,
    tCol,
    hor,
    detached,
    ver,
    compact,
    boxed,
    smallIcon,
    smallHover,
  } = useContext(StateContext);

  const location = useLocation();
  const token = localStorage.getItem("token");
  return (
    <>
      {detached ? (
        <div className="max-h-screen">
          <TopBar />
          <div
            className={`flex items-stretch justify-start   font-para relative bg-light-gray-bg  dark:bg-dark  ${
              boxed ? "px-[6rem]" : ""
            }`}
          >
            {location.pathname == "/password-reset" ||
            location.pathname == "/login" ||
            location.pathname == "/logout" ||
            location.pathname == "/signup" ? (
              <div className="w-0 h-0"></div>
            ) : tablet ? (
              hor ? (
                ""
              ) : tCol ? (
                <SideBarTwo />
              ) : (
                <SideBar />
              )
            ) : (
              <SideBar />
            )}

            <motion.span
              initial={"closed"}
              animate={"open"}
              variants={variant}
              onClick={() => setSetting(!setting)}
              className="fixed z-[1000] px-4 py-4 rounded-full bg-info bottom-[2rem] right-[2rem] cursor-pointer hidden md:block"
            >
              <FiSettings className=" text-white font-semibold text-xl " />
            </motion.span>
            <SettingBar />

            <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/profile/settings" element={<ProfileSettings />} />
            <Route path="/test" element={<Test />} />

            {/* <Route path="/" element={<Home />} /> */}
            <Route exact path="/profile" element={<Profile />}>
              <Route index element={<Overview />} />
              <Route path="activities" element={<Activities />} />
              <Route path="projects" element={<Projects />} />
              <Route path="documents" element={<Docu />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/password-reset" element={<PasswordReset />} />
            <Route path="/" element={<Ecommerce />} />
            <Route path="/add-blog" element={<Addblog />} />
          </Routes>
          </div>
        </div>
      ) : (
        <div
          className={`flex items-stretch justify-start max-h-screen  font-para relative bg-light-gray-bg  dark:bg-dark  ${
            boxed ? "px-[6rem]" : ""
          }`}
        >
          {location.pathname == "/password-reset" ||
          location.pathname == "/login" ||
          location.pathname == "/logout" ||
          location.pathname == "/signup" ? (
            <div className="w-0 h-0"></div>
          ) : tablet ? (
            hor ? (
              ""
            ) : tCol ? (
              <SideBarTwo />
            ) : (
              <SideBar />
            )
          ) : (
            <SideBar />
          )}

          <motion.span
            initial={"closed"}
            animate={"open"}
            variants={variant}
            onClick={() => setSetting(!setting)}
            className="fixed z-[1000] px-4 py-4 rounded-full bg-info bottom-[2rem] right-[2rem] cursor-pointer hidden lg:block"
          >
            <FiSettings className=" text-white font-semibold text-xl " />
          </motion.span>
          <SettingBar />
          

          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/profile/settings" element={<ProfileSettings />} />
            <Route path="/test" element={<Test />} />

            {/* <Route path="/" element={<Home />} /> */}
            <Route exact path="/profile" element={<Profile />}>
              <Route index element={<Overview />} />
              <Route path="activities" element={<Activities />} />
              <Route path="projects" element={<Projects />} />
              <Route path="documents" element={<Docu />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/password-reset" element={<PasswordReset />} />
            <Route path="/" element={<Ecommerce />} />
            <Route path="/add-blog" element={<Addblog />} />
          </Routes>
        </div>
      )}
    </>
  );
};

export default App;
