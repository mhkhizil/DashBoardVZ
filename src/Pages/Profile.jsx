
import { useContext, useEffect } from "react";
import "../../Css/Profile.css";
import bg from "../../Image/profile-bg.jpg";
import user from "../../Image/admin.jpg";

import {
  RiMapPinUserLine,
  RiBuildingLine,
  RiEditBoxLine,
  RiAirplayFill,
  RiListUnordered,
  RiPriceTagLine,
  RiFolder4Line,
} from "react-icons/ri";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { StateContext } from "../Context/StateContext";
import TopBar from "./TopBar";



const Profile = () => {
  
  const nav = useNavigate()

  const token = localStorage.getItem("token");
useEffect(()=>{
  !token&& nav('/logout')
},[])
  const {semi,detached} = useContext(StateContext)
  const location = useLocation()

  useEffect(()=>{
    const navLinks = document.querySelectorAll('.nav-edite li');

    navLinks.forEach((link)=>{
      const anchor = link.querySelector('a');
      if(anchor && anchor.getAttribute('href') === location.pathname){
        link.classList.add('active')
      }else{
        link.classList.remove('active')
      }

    })
  })

  return (
    <div className={`z-50 bg-light-gray-bg dark:bg-black flex-1 min-h-screen overflow-y-auto overflow-x-hidden w-full relative  ${semi? 'px-[10rem]': ''}`} >
      {!detached && <TopBar/>}
      
      <div className="profile-content ">
        <div className=" w-[100%]  relative">
          {/* <---bg img---> */}
          <div className="bg-[url('https://themesbrand.com/velzon/html/default/assets/images/profile-bg.jpg')] py-4 relative bg-cover bg-center w-full h-full px-4">
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#171e32] to-[#405189] opacity-70 z-[1]" ></div>
            <div className="absolute top-0 z-[1000] right-0 left-0 bottom-0 opacity-[.9] bg-[linear-gradient(to top, #171e32, #405189)] "></div>
            {/* <img
              src='https://themesbrand.com/velzon/html/default/assets/images/profile-bg.jpg'
              className="w-[100%] h-[100%] object-cover"
              alt="tttt"
            /> */}
          

          {/* <---profile top----> */}
          <div className="flex flex-wrap items-start md:items-center pt-6 lg:pb-4 relative z-[100]">
         
            <div className="">
              <div className="">
                <img
                  src={user}
                  className="rounded-full h-[6rem] w-[6rem] border-#e9ebec border bg-white p-[0.25rem]"
                  alt=""
                />
              </div>
            </div>
            <div className="grow px-4">
              <div className="p-2">
                <div className="">
                  <h1 className="text-white anna mb-1">Anna Adame</h1>
                  <p className="text-gray-300 mb-4 text-[14px]">Owner & Founder</p>
                </div>
                <div className="flex text-gray-500">
                  <div className="mr-2 flex">
                    <RiMapPinUserLine className="text-[16px]  mr-1" />
                    California,United States
                  </div>
                  <RiBuildingLine className="text-[16px] mr-1" /> Themesbrand
                </div>
              </div>
            </div>
            <div className="mt-6 md:mt-0 grid grid-cols-3">
              <div className="text-center p-2 px-6">
                <h1 className=" text-white text-xl">24.3K</h1>
                <p className="text-[14px] text-gray">Followers</p>
              </div>
              <div className="text-center p-2 px-6">
                <h1 className=" text-white text-xl ">1.3K</h1>
                <p className="text-[14px] text-gray">Following</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center z-[10000] relative">
              <ul className="flex nav-edite">
                <li className="" >
                  <NavLink to={'/profile'} >
                  <span className="nav-link text-[14px] block md:hidden">
                    <RiAirplayFill className="" />
                  </span>
                  <span className="nav-link hidden md:block">Overview</span>
                  </NavLink>
                </li>
                <li className="">
                <NavLink to={"activities"}>
                <span className="nav-link text-[14px] block md:hidden">
                    <RiListUnordered />
                  </span>
                  <span className="nav-link hidden md:block">Activities</span>
                </NavLink>
                </li>
                <li className="">
                  <NavLink to={"projects"}>
                  <span className="nav-link text-[14px] block md:hidden">
                    <RiPriceTagLine />
                  </span>
                  <span className="nav-link hidden md:block">Projects</span>
                  </NavLink>
                </li>
                <li className="">
                  <NavLink to={"documents"}>
                  <span className="nav-link text-[14px] block md:hidden">
                    <RiFolder4Line />
                  </span>
                  <span className="nav-link hidden md:block">Documents</span>
                  </NavLink>
                </li>
              </ul>
              <div onClick={() => nav('/profile/settings')} className="bg-green text-white py-2 cursor-pointer px-[0.9rem] rounded-md border border-[#0ab39c] flex items-center">
                <RiEditBoxLine className="mr-1" />
                <span className="">Edite Profile</span>
              </div>
          </div>
          </div>

          {/* <----profile container----> */}
          <div className={`pf  mt-6 lg:mt-4 ${semi? 'px-0': 'px-4'}`}>
            {/* <div className="flex justify-between items-center">
              <ul className="flex nav-edite">
                <li className="">
                  <span className="nav-link text-[14px] block md:hidden">
                    <RiAirplayFill className="" />
                  </span>
                  <span className="nav-link hidden md:block">Overview</span>
                </li>
                <li>
                  <span className="nav-link text-[14px] block md:hidden">
                    <RiListUnordered />
                  </span>
                  <span className="nav-link hidden md:block">Activities</span>
                </li>
                <li>
                  <span className="nav-link text-[14px] block md:hidden">
                    <RiPriceTagLine />
                  </span>
                  <span className="nav-link hidden md:block">Projects</span>
                </li>
                <li>
                  <span className="nav-link text-[14px] block md:hidden">
                    <RiFolder4Line />
                  </span>
                  <span className="nav-link hidden md:block">Documents</span>
                </li>
              </ul>
              <div className="bg-[#0ab39c] text-white py-2 px-[0.9rem] rounded-md border border-[#0ab39c] flex items-center">
                <RiEditBoxLine className="mr-1" />
                <span className="">Edite Profile</span>
              </div>
            </div> */}
            <Outlet />
          </div>
        </div>

        <footer className="footer dark:bg-dark-side-bar-color flex justify-between">
          <div className="px-6">
            <script>document.write(new Date().getFullYear())</script>
            2023 © Velzon.
          </div>
          <div className="px-6 ">Design &amp; Develop by Themesbrand</div>
        </footer>
      </div>
    </div>
  );
};

export default Profile;
