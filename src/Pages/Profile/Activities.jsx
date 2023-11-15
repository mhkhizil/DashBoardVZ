import React, { useEffect } from 'react'
import '../../../Css/Profile.css'
import admin from '../../../Image/admin.jpg'
import james from "../../../Image/user/avatar-3.jpg";
import jac from "../../../Image/user/avatar-4.jpg";
import john from "../../../Image/activity/avatar-6.jpg";
import ticket from "../../../Image/activity/avatar-8.jpg";
import acbeach from "../../../Image/activity/img-3.jpg";
import acbg from "../../../Image/popular/s.jpg";
import acpeople from "../../../Image/activity/img-2.jpg"
import erica from "../../../Image/rece/erica.jpg";
import lewis from "../../../Image/rece/avatar-7.jpg";
import {RiLineChartLine,RiFileTextLine,RiShoppingBagLine} from 'react-icons/ri'
import { useNavigate } from 'react-router-dom';
const Activities = () => {
  const nav = useNavigate()

  const token = localStorage.getItem("token");
useEffect(()=>{
  !token&& nav('/logout')
},[])
  return (
    <div className='pt-6'>
        <div className=" card dark:bg-dark-side-bar-color border dark:border-dark-side-bar-color border-white">
        <div className="card-body">
        <div className="flex items-center justify-between grow">
         <h1 className=" text-dark-side-bar-color dark:text-white ml-2 mb-0 text-[14px]">Activities</h1>
        </div>
          <div className="collapse before:dark:border-gray-700 relative dark:bg-dark-side-bar-color">
            <input type="checkbox" />
            <div className="collapse-title p-2">
              <div className="flex justify-center items-start">
                <div className=" flex-shrink-0 h-8 w-8 z-10">
                  <img
                    src={admin}
                    alt="james profile"
                    className=" max-w-[100%] h-auto rounded-full"
                  />
                </div>
                <div className=" grow ml-4 text-gray">
                  <h6 className="text-black dark:text-white mb-1">
                    Ollver Phllllps
                    <small className='px-2 ml-2 rounded text-primary font-medium bg-bgprimary'>New</small>
                  </h6>
                  <p className='mb-2'>We talked about a project on Linkein.</p>
                  <small className=" mb-0">
                    Today
                  </small>
                </div>
              </div>
            </div>
          </div>

          <div className="collapse relative before:dark:border-gray-700 dark:bg-dark-side-bar-color">
            <input type="checkbox" />
            <div className="collapse-title p-2">
              <div className="flex justify-center items-start">
                <div className=" flex-shrink-0 h-8 w-8 z-10 flex text-center leading-8 rounded-full dark:bg-gray-800 bg-bgsuccess">
                  <p className="max-w-[100%] text-success h-auto">
                    N
                  </p>
                </div>
                <div className="text-gray grow ml-4">
                  <h6 className=" text-black dark:text-white mb-1">
                    Nancy Martino 
                    <small className='text-secondary ml-2 rounded bg-bgsecondary px-2'>In Progress</small>
                  </h6>
                  <p className='mb-2 flex items-center'>
                    <RiFileTextLine className=''/> Create new project Building product
                  </p>
                  <div className="avatar-group mb-2 flex -space-x-3">
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
                  <small className=" mb-0">
                    Yesterday
                  </small>
                </div>
              </div>
            </div>
          </div>

          <div className="collapse relative before:dark:border-gray-700 dark:bg-dark-side-bar-color">
            <input type="checkbox" />
            <div className="collapse-title p-2">
              <div className="flex justify-center items-start">
                <div className=" flex-shrink-0 h-8 w-8 z-10">
                  <img
                    src={erica}
                    alt="erica profile"
                    className=" max-w-[100%] h-auto rounded-full"
                  />
                </div>
                <div className="text-gray grow ml-4">
                  <h6 className=" text-black dark:text-white mb-1">
                    Natasha Carey 
                    <small className='text-success ml-2 px-2 rounded bg-bgsuccess'>completed</small>
                  </h6>
                  <p className='mb-2'>Adding a new event with attachments</p>
                  <div className='grow gap-5 p-2 mb-2 grid grid-cols-3 border-gray-300 dark:border-gray-700 border border-dashed '>
                    <img src={acpeople} alt="" className='max-width-[100%]' />
                    <img src={acbeach} alt="" className='max-width-[100%]'/>
                    <img src={acbg} alt="" className='max-width-[100%]'/>
                  </div>
                  <small className=" mb-0">
                    25 Nov
                  </small>
                </div>
              </div>
            </div>
          </div> 

          <div className="collapse relative before:dark:border-gray-700 dark:bg-dark-side-bar-color">
            <input type="checkbox" />
            <div className="collapse-title p-2">
              <div className="flex justify-center items-start">
                <div className=" flex-shrink-0 h-8 w-8 z-10">
                  <img
                    src={john}
                    alt="james profile"
                    className=" max-w-[100%] h-auto rounded-full"
                  />
                </div>
                <div className=" grow ml-4 text-gray">
                  <h6 className=" text-black dark:text-white mb-1">Bethany Johnson</h6>
                  <p className="mb-2">added a new member to velzon dashboard</p>
                  <small className="mb-0">
                    19 Nov
                  </small>
                </div>
              </div>
            </div>
          </div>

          <div className="collapse relative before:dark:border-gray-700 dark:bg-dark-side-bar-color">
            <input type="checkbox" />
            <div className="collapse-title p-2">
              <div className="flex justify-center items-start">
                <div className=" flex-shrink-0 h-8 w-8 z-10 flex justify-center bg-bgdanger rounded-full">
                  <RiShoppingBagLine className=" max-w-[100%] text-danger h-auto" />
                </div>
                <div className=" grow ml-4 text-gray">
                  <h6 className=" text-black dark:text-white mb-1">
                    Your order is placed 
                    <small className="px-2 rounded ml-2 text-danger bg-bgdanger">Out of Delivery</small>
                  </h6>
                  <p className='mb-2'>These customers can rest assured their order has been placed.</p>
                  <small className=" mb-0">
                    16 Nov
                  </small>
                </div>
              </div>
            </div>
          </div>

          <div className="collapse relative before:dark:border-gray-700 dark:bg-dark-side-bar-color">
            <input type="checkbox" />
            <div className="collapse-title p-2">
              <div className="flex justify-center items-start">
                <div className=" flex-shrink-0 h-8 w-8 z-10">
                  <img
                    src={lewis}
                    alt="james profile"
                    className=" max-w-[100%] h-auto rounded-full"
                  />
                </div>
                <div className=" grow ml-4 text-gray">
                  <h6 className=" text-black dark:text-white mb-1">Lewis Pratt</h6>
                  <p className='mb-2 break-words'>They all have something to say beyound the words on the page. They can came accross as casual or neutral, exotic or graphic.</p>
                  <small className=" mb-0">
                    22 Oct
                  </small>
                </div>
              </div>
            </div>
          </div>

          <div className="collapse relative before:dark:border-gray-700 dark:bg-dark-side-bar-color">
            <input type="checkbox" />
            <div className="collapse-title p-2">
              <div className="flex justify-center items-start">
                <div className=" flex-shrink-0 h-8 w-8 z-10 flex justify-center bg-bginfo rounded-full">
                  <RiLineChartLine className=" max-w-[100%] text-info h-auto" />
                </div>
                <div className=" grow ml-4 text-gray">
                  <h6 className=" text-black dark:text-white mb-1">
                    Monthly sales report
                  </h6>
                  <p className='mb-2'><span className='text-danger'>2 days left{" "}</span>notification to submit the monthly sales reprot.{" "}<a href="#" className='text-yellow underline'>Reports Builder</a> </p>
                  <small className=" mb-0">
                    15 Oct
                  </small>
                </div>
              </div>
            </div>
          </div>

          <div className="collapse relative before:dark:border-gray-700 dark:bg-dark-side-bar-color">
            <input type="checkbox" />
            <div className="collapse-title p-2">
              <div className="flex justify-center items-start">
                <div className=" flex-shrink-0 h-8 w-8 z-10">
                  <img
                    src={ticket}
                    alt="james profile"
                    className=" max-w-[100%] h-auto rounded-full"
                  />
                </div>
                <div className=" grow ml-4 text-gray">
                  <h6 className=" text-black dark:text-white mb-1">
                    New ticket received
                    <small className='text-success bg-bgsuccess px-2 ml-2 rounded'>completed</small>
                  </h6>
                  <p className='mb-2 break-words'>User {" "}<span className='text-info'>Erica245</span> submitted a ticket.</p>
                  <small className=" mb-0">
                    26 Aug
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Activities