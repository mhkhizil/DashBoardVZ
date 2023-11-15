import {
    RiDashboard2Line,
    RiApps2Line,
    RiLayout3Line,
    RiAccountCircleLine,
    RiPagesLine,
    RiRocketLine,
    RiAuctionFill,
    RiLandscapeFill,
    RiArrowRightSLine,
    RiLockPasswordLine
  } from "react-icons/ri";
import { FaWpforms } from "react-icons/fa";

  import "../../node_modules/flowbite/dist/flowbite"
  
  import { useContext } from "react";
  import { StateContext } from "../Context/StateContext";
import { useNavigate } from "react-router-dom/dist";
  const SideBarHor = () => {
    const { isSideOpen, semi, hor } = useContext(StateContext);
    const nav = useNavigate()
    return (
      <div className="border-t border-gray-500 mt-4  ">
        <div className="  w-full  bg-white dark:bg-dark-bg-color hidden lg:block">
          <div className="flex items-center justify-start gap-6 px-[5rem] z-[9999] py-2">
            <div className={`cursor-pointer p-2 relative dash`}>
              <button
              onClick={() => nav('/')}
                type="button"
                className="flex items-center w-full text-gray transition duration-75 rounded-lg group  dark:text-2xl dark:hover:text-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
                <RiDashboard2Line className=" text-gray-dark  text-xl" />
                <span
                  className={`  text-[#6d7080] dark:text-gray  flex-1 ml-3 text-sm text-left whitespace-nowrap`}
                >
                  Dashboards
                </span>
                
              </button>
              
            </div>
           
            <div className={`cursor-pointer p-2 auth relative `}>
              <button
              onClick={() => nav('/password-reset')}
                type="button"
                className="flex items-center w-full text-gray transition duration-75 rounded-lg group  dark:text-2xl dark:hover:text-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
                <RiLockPasswordLine className=" text-gray-dark  text-xl" />
                <span
                  className={`  text-[#6d7080] dark:text-gray flex-1 ml-3 text-sm text-left whitespace-nowrap`}
                >
                  Password Reset
                </span>
                
              </button>
             
  
            </div>
            <div className={`cursor-pointer p-2 relative dash`}>
              <button
               onClick={() => nav('/add-blog')}
                type="button"
                className="flex items-center w-full text-gray transition duration-75 rounded-lg group  dark:text-2xl dark:hover:text-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
                <FaWpforms className=" text-gray-dark  text-xl" />
                <span
                  className={`  text-[#6d7080] dark:text-gray  flex-1 ml-3 text-sm text-left whitespace-nowrap`}
                >
                  New Blog
                </span>
                
              </button>
              
            </div>
            <div className={`cursor-pointer p-2 page relative`}>
              <button
                type="button"
                className="flex items-center w-full text-gray transition duration-75 rounded-lg group  dark:text-2xl dark:hover:text-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
                <RiPagesLine className=" text-gray-dark  text-xl" />
                <span
                  className={`
                    text-[#6d7080] dark:text-gray flex-1 ml-3 text-sm text-left whitespace-nowrap`}
                >
                  Profile
                </span>
                <svg
                  className={`  text-gray w-6 h-6`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
               
              </button>
              <div className="absolute w-[12rem] px-4 bg-white dark:bg-dark-bg-color  shadow-lg rounded-md top-[3rem] page-child left-0">
             <ul className={`w-full   py-2 space-y-2 `}>
                <button onClick={() => nav('/profile')} className="text-[#6d7080] dark:text-gray text-sm font-para">Simple Page</button>
                <button onClick={() => nav('/profile/settings')}  className="text-[#6d7080] dark:text-gray text-sm font-para">Profile Setting</button>
             </ul>
              </div>
            </div>
            
          </div>
        </div>
  
        
      </div>
    );
  };
  
  export default SideBarHor;
  
  
  

