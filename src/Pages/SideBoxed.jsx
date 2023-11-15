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
} from "react-icons/ri";
import { AiOutlineArrowRight } from "react-icons/ai";
import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { StateContext } from "../Context/StateContext";
import { useNavigate } from "react-router-dom";
import SideBar from "./SideBar";
const SideBoxed = () => {
  const {
    isSideOpen,
    setIsSideOpen,
    tCol,
    sideLight,
    sideDark,
    sideGradient,
  } = useContext(StateContext);

  const [isHover, setIsHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={`absolute h-screen`}
    >
        {isHover? (
            <SideBar/>
        ): (

            <div
              className={`w-[4rem]  h-full   ${sideLight ? "bg-white" : ""} ${
                sideDark ? "bg-[#3a4b84]" : ""
              } ${sideGradient ? " bg-sideGradient" : ""}`}
            >
              <div className=" grid place-items-center py-6 mb-4">
                <img
                  src="https://themesbrand.com/velzon/html/default/assets/images/logo-sm.png"
                  className="w-6 h-6"
                  alt=""
                />
              </div>
              <div className="grid  place-items-center gap-4">
                <div className={` cursor-pointer p-2`}>
                  <RiDashboard2Line className="text-[#abb9e8] text-2xl" />
                </div>
                <div className={` cursor-pointer p-2`}>
                  <RiApps2Line className="text-[#abb9e8] text-2xl" />
                </div>
                <div className={` cursor-pointer p-2`}>
                  <RiLayout3Line className="text-[#abb9e8] text-2xl " />
                </div>
                <div className={` cursor-pointer p-2`}>
                  <RiAuctionFill className="text-[#abb9e8] text-2xl " />
                </div>
                <div className={` cursor-pointer p-2`}>
                  <RiPagesLine className="text-[#abb9e8] text-2xl " />
                </div>
                <div className={` cursor-pointer p-2`}>
                  <RiLandscapeFill className="text-[#abb9e8] text-2xl " />
                </div>
              </div>
            </div>
        )}

    </div>
  );
};

export default SideBoxed;
