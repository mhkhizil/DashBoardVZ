import  { useEffect } from 'react'
import {RiArrowLeftSLine,RiArrowRightSLine} from "react-icons/ri"
import "../../../Css/Profile.css"
import admin from "../../../Image/admin.jpg"
import james from "../../../Image/user/avatar-3.jpg";
import ticket from "../../../Image/activity/avatar-8.jpg";
import lewis from "../../../Image/rece/avatar-7.jpg";
import john from "../../../Image/activity/avatar-6.jpg";
import jac from "../../../Image/user/avatar-4.jpg";
import geo from "../../../Image/user/avatar-5.jpg";
import jacqueline from "../../../Image/rece/avatar-2.jpg";
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const nav = useNavigate()

  const token = localStorage.getItem("token");
useEffect(()=>{
  !token&& nav('/logout')
},[])
  return (
    <div className='pt-6'>
      <div className="card dark:bg-dark-side-bar-color">
        <div className="card-body">
          <div className="flex flex-col">
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div className="card profile-project-card dark:bg-dark-side-bar-color dark:border-gray-700 dark:border-l-yellow border-l-yellow">
              <div className="card-body p-6">
                  <div className="flex ">
                    <div className="grow">
                      <h5 className="text-[14px] dark:text-white text-dark font-medium mb-1">
                        Chat App Update
                      </h5>
                      <p className="text-gray mb-0">
                        Last Upate:{" "}
                        <span className="text-gray-700 dark:text-white font-semibold">
                          2 hr Ago
                        </span>
                      </p>
                    </div>
                    <div className=" flex-shrink-0 ml-2">
                      <div className="text-yellow bg-bgyellow px-[0.3em] rounded fs-sm">
                        {" "}
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
                          src={admin}
                          className="max-w-[100%] h-auto rounded-full border-2 border-white dark:border-dark-side-bar-color hover:translate-y-[-2px]"
                          alt=""
                        />
                      </div>
                      <div className="w-9 h-9 ">
                        <img
                          src={james}
                          className="max-w-[100%] h-auto rounded-full border-2 border-white dark:border-dark-side-bar-color hover:translate-y-[-2px]"
                          alt=""
                        />
                      </div>
                      <div className="w-8 h-8 text-center leading-8">
                        <p className="max-w-[100%] h-auto bg-light dark:bg-gray-8  text-[14px] text-primary rounded-full border-2 border-white dark:border-dark-side-bar-color hover:translate-y-[-2px]">
                          J
                        </p>
                      </div>
                    </div>
                  </div>
              </div>
            </div>

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
                        2 month Ago
                      </span>
                    </p>
                  </div>
                  <div className=" flex-shrink-0 ml-2">
                    <div className="text-primary bg-bgprimary px-[0.3em] rounded fs-sm">
                      {" "}
                      <small className=" font-semibold">progress</small>
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
                        src={ticket}
                        className="max-w-[100%] h-auto rounded-full border-2 border-white dark:border-dark-side-bar-color hover:translate-y-[-2px]"
                        alt=""
                      />
                    </div>
                    <div className="w-9 h-9 ">
                      <img
                        src={lewis}
                        className="max-w-[100%] h-auto rounded-full border-2 border-white dark:border-dark-side-bar-color hover:translate-y-[-2px]"
                        alt=""
                      />
                    </div>
                    <div className="w-9 h-9 text-center leading-9">
                      <img
                        src={john}
                        className="max-w-[100%] h-auto rounded-full border-2 border-white dark:border-dark-side-bar-color hover:translate-y-[-2px]"
                        alt=""
                      />
                    </div>
                    <div className="w-8 h-8 text-center leading-8">
                      <p className="max-w-[100%] h-auto bg-primary dark:bg-gray-8  text-[14px] text-light rounded-full border-2 border-white dark:border-dark-side-bar-color hover:translate-y-[-2px]">
                        2+
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
                      Client - Frank Hook
                    </h5>
                    <p className="text-gray mb-0">
                      Last Upate:{" "}
                      <span className="text-gray-700 dark:text-white font-semibold">
                        1 hr Ago
                      </span>
                    </p>
                  </div>
                  <div className=" flex-shrink-0 ml-2">
                    <div className="text-info bg-bginfo px-[0.3em] rounded fs-sm">
                     <small className=" font-semibold">New</small>
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
                        src={jac}
                        className="max-w-[100%] h-auto rounded-full border-2 border-white dark:border-dark-side-bar-color hover:translate-y-[-2px]"
                        alt=""
                      />
                    </div>
                    <div className="w-8 h-8 text-center leading-8">
                      <p className="max-w-[100%] h-auto bg-light dark:bg-gray-8  text-[14px] text-primary rounded-full border-2 border-white dark:border-dark-side-bar-color hover:translate-y-[-2px]">
                        M
                      </p>
                    </div>
                    <div className="w-9 h-9 text-center leading-9">
                      <img
                        src={james}
                        className="max-w-[100%] h-auto rounded-full border-2 border-white dark:border-dark-side-bar-color hover:translate-y-[-2px]"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card profile-project-card dark:bg-dark-side-bar-color dark:border-gray-700 !dark:border-l-primary !border-l-primary">
              <div className="card-body p-6">
                <div className="flex ">
                  <div className="grow">
                    <h5 className="text-[14px] dark:text-white text-dark font-medium mb-1">
                      Velzon Project
                    </h5>
                    <p className="text-gray mb-0">
                      Last Upate:{" "}
                      <span className="text-gray-700 dark:text-white font-semibold">
                        11 hr Ago
                      </span>
                    </p>
                  </div>
                  <div className=" flex-shrink-0 ml-2">
                    <div className="text-green bg-bggreen p-[0.3em] rounded fs-sm">
                      <small className=" font-semibold">Completed</small>
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
                        src={lewis}
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

            <div className="card profile-project-card dark:bg-dark-side-bar-color dark:border-gray-700 dark:border-l-red border-l-red">
              <div className="card-body p-6">
                <div className="flex ">
                  <div className="grow">
                    <h5 className="text-[14px] dark:text-white text-dark font-medium mb-1">
                      Brand Logo Design
                    </h5>
                    <p className="text-gray mb-0">
                      Last Upate:{" "}
                      <span className="text-gray-700 dark:text-white font-semibold">
                        10 min Ago
                      </span>
                    </p>
                  </div>
                  <div className=" flex-shrink-0 ml-2">
                    <div className="text-info bg-bginfo px-[0.3em] rounded fs-sm">
                      {" "}
                      <small className=" font-semibold">New</small>
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
                        src={lewis}
                        className="max-w-[100%] h-auto rounded-full border-2 border-white dark:border-dark-side-bar-color hover:translate-y-[-2px]"
                        alt=""
                      />
                    </div>
                    <div className="w-9 h-9 ">
                      <img
                        src={john}
                        className="max-w-[100%] h-auto rounded-full border-2 border-white dark:border-dark-side-bar-color hover:translate-y-[-2px]"
                        alt=""
                      />
                    </div>
                    <div className="w-8 h-8 text-center leading-8">
                      <p className="max-w-[100%] h-auto bg-light dark:bg-gray-8  text-[14px] text-primary rounded-full border-2 border-white dark:border-dark-side-bar-color hover:translate-y-[-2px]">
                          E
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card profile-project-card dark:bg-dark-side-bar-color dark:border-gray-700 !dark:border-l-primary !border-l-primary">
              <div className="card-body p-6">
                <div className="flex ">
                  <div className="grow">
                    <h5 className="text-[14px] dark:text-white text-dark font-medium mb-1">
                      Chat App
                    </h5>
                    <p className="text-gray mb-0">
                      Last Upate:{" "}
                      <span className="text-gray-700 dark:text-white font-semibold">
                        8 hr Ago
                      </span>
                    </p>
                  </div>
                  <div className=" flex-shrink-0 ml-2">
                    <div className="text-yellow bg-bgyellow p-[0.3em] rounded fs-sm">
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
                  <div className="w-8 h-8 text-center leading-8">
                      <p className="max-w-[100%] h-auto bg-light dark:bg-gray-8  text-[14px] text-primary rounded-full border-2 border-white dark:border-dark-side-bar-color hover:translate-y-[-2px]">
                          R
                      </p>
                    </div>
                  <div className="w-9 h-9 ">
                      <img
                        src={james}
                        className="max-w-[100%] h-auto rounded-full border-2 border-white dark:border-dark-side-bar-color hover:translate-y-[-2px]"
                        alt=""
                      />
                    </div>
                    <div className="w-9 h-9 ">
                      <img
                        src={ticket}
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
                      Project Update
                    </h5>
                    <p className="text-gray mb-0">
                      Last Upate:{" "}
                      <span className="text-gray-700 dark:text-white font-semibold">
                        48 min Ago
                      </span>
                    </p>
                  </div>
                  <div className=" flex-shrink-0 ml-2">
                    <div className="text-yellow bg-bgyellow p-[0.3em] rounded fs-sm">
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
                        src={john}
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
                    <div className="w-9 h-9 ">
                      <img
                        src={jac}
                        className="max-w-[100%] h-auto rounded-full border-2 border-white dark:border-dark-side-bar-color hover:translate-y-[-2px]"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div> 
            
            <div className="card profile-project-card dark:bg-dark-side-bar-color dark:border-gray-700 dark:border-l-green border-l-green">
              <div className="card-body p-6">
                <div className="flex ">
                  <div className="grow">
                    <h5 className="text-[14px] dark:text-white text-dark font-medium mb-1">
                      Client - Jennifer
                    </h5>
                    <p className="text-gray mb-0">
                      Last Upate:{" "}
                      <span className="text-gray-700 dark:text-white font-semibold">
                        30 min Ago
                      </span>
                    </p>
                  </div>
                  <div className=" flex-shrink-0 ml-2">
                    <div className="text-primary bg-bgprimary px-[0.3em] rounded fs-sm">
                      {" "}
                      <small className=" font-semibold">progress</small>
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
                        src={admin}
                        className="max-w-[100%] h-auto rounded-full border-2 border-white dark:border-dark-side-bar-color hover:translate-y-[-2px]"
                        alt=""
                      />
                    </div>
                   
                  </div>
                </div>
              </div>
            </div>

            <div className="card profile-project-card dark:bg-dark-side-bar-color dark:border-gray-700 dark:border-l-info border-l-info">
              <div className="card-body p-6">
                <div className="flex ">
                  <div className="grow">
                    <h5 className="text-[14px] dark:text-white text-dark font-medium mb-1">
                      Business Template - UI/UX design
                    </h5>
                    <p className="text-gray mb-0">
                      Last Upate:{" "}
                      <span className="text-gray-700 dark:text-white font-semibold">
                        7 month Ago
                      </span>
                    </p>
                  </div>
                  <div className=" flex-shrink-0 ml-2">
                    <div className="text-green bg-bggreen px-[0.3em] rounded fs-sm">
                      {" "}
                      <small className=" font-semibold">Completed</small>
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
                        src={jacqueline}
                        className="max-w-[100%] h-auto rounded-full border-2 border-white dark:border-dark-side-bar-color hover:translate-y-[-2px]"
                        alt=""
                      />
                    </div>
                    <div className="w-9 h-9 ">
                      <img
                        src={james}
                        className="max-w-[100%] h-auto rounded-full border-2 border-white dark:border-dark-side-bar-color hover:translate-y-[-2px]"
                        alt=""
                      />
                    </div>
                    <div className="w-9 h-9 text-center leading-9">
                      <img
                        src={jac}
                        className="max-w-[100%] h-auto rounded-full border-2 border-white dark:border-dark-side-bar-color hover:translate-y-[-2px]"
                        alt=""
                      />
                    </div>
                    <div className="w-8 h-8 text-center leading-8">
                      <p className="max-w-[100%] h-auto bg-primary dark:bg-gray-8  text-[14px] text-light rounded-full border-2 border-white dark:border-dark-side-bar-color hover:translate-y-[-2px]">
                        2+
                      </p>
                    </div>
                   
                  </div>
                </div>
              </div>
            </div>

            <div className="card profile-project-card dark:bg-dark-side-bar-color dark:border-gray-700 dark:border-l-green border-l-green">
              <div className="card-body p-6">
                <div className="flex ">
                  <div className="grow">
                    <h5 className="text-[14px] dark:text-white text-dark font-medium mb-1">
                      Update Project
                    </h5>
                    <p className="text-gray mb-0">
                      Last Upate:{" "}
                      <span className="text-gray-700 dark:text-white font-semibold">
                        1 month Ago
                      </span>
                    </p>
                  </div>
                  <div className=" flex-shrink-0 ml-2">
                    <div className="text-info bg-bginfo px-[0.3em] rounded fs-sm">
                      {" "}
                      <small className=" font-semibold">New</small>
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
                        src={lewis}
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

            <div className="card profile-project-card dark:bg-dark-side-bar-color dark:border-gray-700 dark:border-l-red border-l-red">
              <div className="card-body p-6">
                <div className="flex ">
                  <div className="grow">
                    <h5 className="text-[14px] dark:text-white text-dark font-medium mb-1">
                      Business Template - UI/UX design
                    </h5>
                    <p className="text-gray mb-0">
                      Last Upate:{" "}
                      <span className="text-gray-700 dark:text-white font-semibold">
                        7 month Ago
                      </span>
                    </p>
                  </div>
                  <div className=" flex-shrink-0 ml-2">
                    <div className="text-green bg-bggreen px-[0.3em] rounded fs-sm">
                      {" "}
                      <small className=" font-semibold">Completed</small>
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
                        src={lewis}
                        className="max-w-[100%] h-auto rounded-full border-2 border-white dark:border-dark-side-bar-color hover:translate-y-[-2px]"
                        alt=""
                      />
                    </div>
                    <div className="w-9 h-9 ">
                      <img
                        src={john}
                        className="max-w-[100%] h-auto rounded-full border-2 border-white dark:border-dark-side-bar-color hover:translate-y-[-2px]"
                        alt=""
                      />
                    </div>
                    <div className="w-9 h-9 text-center leading-9">
                      <img
                        src={geo}
                        className="max-w-[100%] h-auto rounded-full border-2 border-white dark:border-dark-side-bar-color hover:translate-y-[-2px]"
                        alt=""
                      />
                    </div>
                    <div className="w-8 h-8 text-center leading-8">
                      <p className="max-w-[100%] h-auto bg-primary dark:bg-gray-8  text-[14px] text-light rounded-full border-2 border-white dark:border-dark-side-bar-color hover:translate-y-[-2px]">
                        2+
                      </p>
                    </div>
                   
                  </div>
                </div>
              </div>
            </div>

            <div className="card profile-project-card dark:bg-dark-side-bar-color dark:border-gray-700 !dark:border-l-primary !border-l-primary">
              <div className="card-body p-6">
                <div className="flex ">
                  <div className="grow">
                    <h5 className="text-[14px] dark:text-white text-dark font-medium mb-1">
                      PSD to HTML Convert
                    </h5>
                    <p className="text-gray mb-0">
                      Last Upate:{" "}
                      <span className="text-gray-700 dark:text-white font-semibold">
                        29 min Ago
                      </span>
                    </p>
                  </div>
                  <div className=" flex-shrink-0 ml-2">
                    <div className="text-info bg-bginfo px-[0.3em] rounded fs-sm">
                      {" "}
                      <small className=" font-semibold">New</small>
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
                        src={lewis}
                        className="max-w-[100%] h-auto rounded-full border-2 border-white dark:border-dark-side-bar-color hover:translate-y-[-2px]"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <nav aria-label="Page navigation example " className='mx-auto'>
            <ul className="flex projects gap-2 items-center -space-x-px h-8 text-sm">
              <li>
                <a href="#" className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  <span className="sr-only">Previous</span>
                  <RiArrowLeftSLine className="text-primary"/>
                </a>
              </li>
              <li>
                <a href="#" ria-current="page"  className="rounded-md  bg-primary flex items-center justify-center px-3 h-9 leading-tight text-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
              </li>
              <li>
                <a href="#" className="rounded-md flex items-center justify-center px-3 h-9 leading-tight text-primary bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
              </li>
              <li>
                <a href="#" className="rounded-md flex items-center justify-center px-3 h-9 leading-tight text-primary bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">3</a>
              </li>
              <li>
                <a href="#" className="rounded-md flex items-center justify-center px-3 h-9 leading-tight text-primary bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
              </li>
              <li>
                <a href="#" className="rounded-md flex items-center justify-center px-3 h-9 leading-tight text-primary bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
              </li>
              <li>
                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  <span className="sr-only">Next</span>
                  <RiArrowRightSLine className='text-primary'/>
                </a>
              </li>
            </ul>
          </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects