import TopBar from "./TopBar";

import { PiPulse } from "react-icons/pi";
import { RiCalendar2Line } from "react-icons/ri";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FiArrowUpRight } from "react-icons/fi";
import { FiArrowDownRight } from "react-icons/fi";
import { BiDollarCircle } from "react-icons/bi";
import { BiUserCircle } from "react-icons/bi";
import { BiWallet } from "react-icons/bi";
import { BiShoppingBag } from "react-icons/bi";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import { RiBarChartFill } from "react-icons/ri";
import { RiFileList3Fill } from "react-icons/ri";

import Chart from "react-apexcharts";

import "flatpickr/dist/themes/material_orange.css";
import RangeCalendar from "./Date";

import WorldMap from "./WorldMap";
import Donut from "../Components/Donut";
import { useContext, useEffect, useState } from "react";
import { motion, transform } from "framer-motion";
import SettingBar from "../Components/SettingBar";
import { StateContext } from "../Context/StateContext";
import { useNavigate } from "react-router-dom";

const Ecommerce = () => {
  const options = {
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "July",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },

    yaxis: {
      labels: {
        formatter: function (value) {
          return value + ".00";
        },
      },

      min: 0, // minimum value of the Y-axis
      max: 120.0, // maximum value of the Y-axis
      tickAmount: 4, // the number of ticks or intervals on the Y-axis
      axisBorder: {
        show: false, // Set this to false to remove the y-axis line
      },
      tooltip: {
        shared: true,
        intersect: true,
      },
    },

    fill: {
      opacity: [0.85, 1, 1],
      type: ["gradient", "solid", "solid"],
      gradient: {
        inverseColors: false,
        shade: "light",
        type: "vertical",
        opacityFrom: [0.5, 1, 1],
        opacityTo: [0.5, 1, 1],
        stops: [0, 100, 100, 100],
      },
    },

    chart: {
      height: 350,
      foreColor: "#878a99",
      fontFamily: "Poppins, sans-serif",
      type: "line",
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "35%",
      },
    },

    stroke: {
      width: [2, 0, 3], // Set the stroke width for the series (0 for area and bar, 3 for the dashed line)
      dashArray: [0, 0, 5], // Set the dash array for the series (0 for area and bar, 5 for the dashed line)
    },
    grid: {
      borderColor: "#fff",
      clipMarkers: false,
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
  };

  const series = [
    {
      name: "Order",
      data: [34, 65, 46, 68, 49, 62, 42, 44, 78, 52, 63, 67],
      type: "area",
      tooltip: {
        enabled: true,
      },

      color: "#405189",
    },
    {
      name: "Earnings",
      type: "bar",
      data: [45, 60, 30, 58, 70, 90, 80, 95, 110, 118, 78, 44],
      tooltip: {
        enabled: true,
      },
      color: "#0ab396",

      opacity: 1,
    },
    {
      name: "Refunds",
      type: "line",
      data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35],
      tooltip: {
        enabled: true,
      },
      color: "#f1963b",
      opacity: 1,
    },
  ];

  const {semi, boxed,detached,smallHover} = useContext(StateContext)
  
  const [sort, setSort] = useState(false);
  const [report, setReport] = useState(false);
  
  const nav = useNavigate()

  const token = localStorage.getItem("token");
useEffect(()=>{
  !token&& nav('/logout')
},[])
  

  useEffect(() => {
    let valueDisplay = document.querySelector('.num1')
    let interval = 3000
    let startVal = 0
    let endVal = parseInt(valueDisplay.getAttribute('data-target'))
    let duration = Math.floor(interval/endVal)
    let counter = setInterval(() => {
      startVal+=2
      valueDisplay.textContent = startVal >= endVal?`559.5` : startVal
      if(startVal >= endVal){
        clearInterval(counter)
      }
    }, duration);
  }, [])

  useEffect(() => {
    let valueDisplay = document.querySelector('.num2')
    let interval = 3000
    let startVal = 0
    let endVal = parseInt(valueDisplay.getAttribute('data-target'))
    let duration = Math.floor(interval/endVal)
    let counter = setInterval(() => {
      startVal+=100
      valueDisplay.textContent = startVal >= endVal?`36,894` : startVal
      if(startVal >= endVal){
        clearInterval(counter)
      }
    }, duration);
  }, [])

  useEffect(() => {
    let valueDisplay = document.querySelector('.num3')
    let interval = 3000
    let startVal = 0
    let endVal = parseInt(valueDisplay.getAttribute('data-target'))
    let duration = Math.floor(interval/endVal)
    let counter = setInterval(() => {
      startVal+=2
      valueDisplay.textContent = startVal >= endVal?`183.35` : startVal
      if(startVal >= endVal){
        clearInterval(counter)
      }
    }, duration);
  }, [])
  useEffect(() => {
    let valueDisplay = document.querySelector('.num4')
    let interval = 3000
    let startVal = 0
    let endVal = parseInt(valueDisplay.getAttribute('data-target'))
    let duration = Math.floor(interval/endVal)
    let counter = setInterval(() => {
      startVal+=2
      valueDisplay.textContent = startVal >= endVal?`165.89` : startVal
      if(startVal >= endVal){
        clearInterval(counter)
      }
    }, duration);
  }, [])

  useEffect(() => {
    let valueDisplay = document.querySelector('.num5')
    let interval = 3000
    let startVal = 0
    let endVal = parseInt(valueDisplay.getAttribute('data-target'))
    let duration = Math.floor(interval/endVal)
    let counter = setInterval(() => {
      startVal+=100
      valueDisplay.textContent = startVal >= endVal?`7,585` : startVal
      if(startVal >= endVal){
        clearInterval(counter)
      }
    }, duration);
  }, [])

  useEffect(() => {
    let valueDisplay = document.querySelector('.num6')
    // let interval = 3000
    let startVal = 0
    let endVal = parseInt(valueDisplay.getAttribute('data-target'))
    // let duration = Math.floor(interval/endVal)
    let counter = setInterval(() => {
      startVal+=1
      valueDisplay.textContent = startVal >= endVal?`22.89` : startVal
      if(startVal >= endVal){
        clearInterval(counter)
      }
    }, 20);
  }, [])

  useEffect(() => {
    let valueDisplay = document.querySelector('.num7')
    let interval = 3000
    let startVal = 0
    let endVal = parseInt(valueDisplay.getAttribute('data-target'))
    let duration = Math.floor(interval/endVal)
    let counter = setInterval(() => {
      startVal+=2
      valueDisplay.textContent =  startVal
      if(startVal >= endVal){
        clearInterval(counter)
      }
    }, duration);
  }, [])

  useEffect(() => {
    let valueDisplay = document.querySelector('.num8')
    // let interval = 3000
    let startVal = 0
    let endVal = parseInt(valueDisplay.getAttribute('data-target'))
    // let duration = Math.floor(interval/endVal)
    let counter = setInterval(() => {
      startVal+=1
      valueDisplay.textContent = startVal >= endVal?`18.92` : startVal
      if(startVal >= endVal){
        clearInterval(counter)
      }
    }, 100);
  }, [])





  

  return (
    <div className={`z-50 bg-light-gray-bg dark:bg-dark flex-1 min-h-screen overflow-y-auto  w-full relative  ${semi? 'px-[10rem]': ''} ${boxed? 'mx-[0rem]': ''} ${smallHover?'ml-[4rem]':''}`}>
      
     {!detached&& ( <TopBar />)}
     

      <div className={` grid grid-cols-1 slg:grid-cols-2 gap-3 slg:gap-0 justify-between mt-5 ${semi? 'px-0 ':'px-6 '}`}>
        <div className="">
          <h2 className=" text-light-header-color dark:text-dark-header-color font-medium font-para">
            Good Morning, Anna!
          </h2>
          <p className="text-light-para-color text-[13px] mt-1">
            Here's what's happening with your store today.
          </p>
        </div>
        <div className="flex items-center justify-start slg:justify-end gap-4 ">
          <div className="bg-white  dark:text-gray-400 dark:bg-dark-bg-color w-[16rem] flex items-center justify-between  h-[2.35rem] pl-3 overflow-hidden rounded">
            <RangeCalendar className="bg-transparent flex-1 basis-[90%]" />
            <div className="bg-primary text-white  w-[2.9rem] h-[2.35rem] grid place-items-center">
              <RiCalendar2Line className="text-[13.5px]" />
            </div>
          </div>
          <button className="flex items-center justify-start  bg-green-btn-bg px-2  hover:bg-green text-green hover:text-white duration-150 py-2 rounded-sm gap-2">
            <AiOutlinePlusCircle className="text-[13.5px] text-inherit " />

            <span className="md:text-[10px] lg:text-[13.5px] text-[10px] font-normal text-inherit ">
              Add Product
            </span>
          </button>
          <button className=" bg-blue-btn-bg p-3 rounded-sm  hover:bg-transparent hover:text-light-heading-text-color duration-150">
            <PiPulse className="text-blue" />
          </button>
        </div>
      </div>


      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6   mt-5 flex-wrap  ${semi? 'px-0':'px-6 '}`}>
        <div className="bg-white dark:bg-dark-bg-color  py-4 px-4 rounded-md shadow-md hover:translate-y-[-4px] duration-[.4s] hover:shadow-xl">
          <div className="flex items-center justify-between">
            <h2 className=" text-light-para-color font-medium text-[12px] tracking-wider">
              TOTAL EARNINGS
            </h2>
            <div className="flex items-center justify-start gap-1 text-green font-medium">
              <FiArrowUpRight className="text-sm font-medium" />
              <span className="text-sm font-medium">+16.24 %</span>
            </div>
          </div>
          <h2 className="text-[1.35rem] font-semibold text-light-header-color dark:text-dark-header-color mt-5 tracking-wide">
            $
            <span className="num1" data-target="559.25">
              0
            </span>
             k
          </h2>
          <div className="flex items-end justify-between">
            <a
              href=""
              className="underline text-light-header-color dark:text-dark-header-color text-[13px] font-normal "
            >
              View net earnings
            </a>
            <div className="bg-gr bg-green-btn-bg px-3 py-3 rounded-md">
              <BiDollarCircle className="text-green text-2xl" />
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-dark-bg-color py-4 px-4 rounded-md shadow-md hover:translate-y-[-4px] duration-[.4s] hover:shadow-xl">
          <div className="flex items-center justify-between">
            <h2 className=" text-light-para-color font-medium text-[13px] tracking-wide">
              ORDERS
            </h2>
            <div className="flex items-center justify-start gap-1 text-red font-medium">
              <FiArrowDownRight className="text-sm font-medium" />
              <span className="text-sm font-medium">-3.57 %</span>
            </div>
          </div>
          <h2 className="text-[1.35rem] font-semibold text-light-header-color dark:text-dark-header-color mt-5 tracking-wide">
            
            <span className="num2" data-target="36894">
              0
            </span>
          </h2>
          <div className="flex items-end justify-between">
            <a
              href=""
              className="underline text-light-header-color dark:text-dark-header-color text-[13px] font-normal "
            >
              View net earnings
            </a>
            <div className="bg-gr bg-blue-btn-bg px-3 py-3 rounded-md">
              <BiShoppingBag className="text-blue text-2xl" />
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-dark-bg-color py-4 px-4 rounded-md shadow-md hover:translate-y-[-4px] duration-[.4s] hover:shadow-xl">
          <div className="flex items-center justify-between">
            <h2 className=" text-light-para-color font-medium text-[13px] tracking-wide">
              CUSTOMERS
            </h2>
            <div className="flex items-center justify-start gap-1 text-green font-medium">
              <FiArrowUpRight className="text-sm font-medium" />
              <span className="text-sm font-medium">+29.08 %</span>
            </div>
          </div>
          <h2 className="text-[1.35rem] font-semibold text-light-header-color dark:text-dark-header-color mt-5 tracking-wide">
            <span className="num3" data-target="183.35">
              0
            </span>
            M
          </h2>
          <div className="flex items-end justify-between">
            <a
              href=""
              className="underline text-light-header-color dark:text-dark-header-color text-[13px] font-normal "
            >
              See Details
            </a>
            <div className="bg-gr bg-orange-btn-bg px-3 py-3 rounded-md">
              <BiUserCircle className="text-orange text-2xl" />
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-dark-bg-color py-4 px-4 rounded-md shadow-md hover:translate-y-[-4px] duration-[.4s] hover:shadow-xl">
          <div className="flex items-center justify-between">
            <h2 className=" text-light-para-color font-medium text-[12px] tracking-wider uppercase">
              My Balance
            </h2>
            <div className="flex items-center justify-start gap-1 text-light-para-color font-medium">
              <span className="text-sm font-medium">+0.00 %</span>
            </div>
          </div>
          <h2 className="text-[1.35rem] font-semibold text-light-header-color dark:text-dark-header-color mt-5 tracking-wide">
            $
            <span className="num4" data-target="165.89">
              0
            </span>
            k
          </h2>
          <div className="flex items-end justify-between">
            <a
              href=""
              className="underline text-light-header-color dark:text-dark-header-color text-[13px] font-normal "
            >
              withdraw money
            </a>
            <div className="bg-gr bg-gray-200 dark:bg-blue-btn-bg px-3 py-3 rounded-md">
              <BiWallet className="text-light-para-color dark:text-blue text-2xl" />
            </div>
          </div>
        </div>
      </div>



      <div className={`grid grid-cols-1 place-items-stretch sxl:grid-cols-3 gap-6  mt-3 pt-4 pb-2 sxl:overflow-hidden  ${semi? 'px-0':'px-6 '}`}>
        <div className=" col-start-1 col-end-3 chart-container bg-white dark:bg-dark-bg-color   pt-4 rounded-md">
          <div className="flex items-center justify-between px-4">
            <h4 className="font-medium text-light-header-color dark:text-dark-header-color text-[16px] ">
              Revenue
            </h4>
            <div className="flex items-center justify-start gap-1">
              <span className="b bg-blue-btn-bg px-2 py-2 rounded-sm text-[10px] tracking-widest text-blue cursor-pointer hover:text-white hover:bg-blue duration-100">
                ALL
              </span>
              <span className=" bg-blue-btn-bg px-2 py-2 rounded-sm text-[10px] tracking-widest text-blue  cursor-pointer hover:text-white hover:bg-blue duration-100">
                1M
              </span>
              <span className="b bg-blue-btn-bg px-2 py-2 rounded-sm text-[10px] tracking-widest text-blue  cursor-pointer hover:text-white hover:bg-blue duration-100">
                6M
              </span>
              <span className="bg-light-gray-bg dark:bg-dark dark:text-gray px-2 py-2 rounded-sm text-[10px] tracking-widest cursor-pointer hover:bg-light-side-bar-color hover:text-white">
                1Y
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between mt-4 bg-[#fdfdfe]  dark:bg-dark-bg-color  flex-wrap sm:flex-nowrap">
            <div className="basis-1/2 sm:basis-1/4  grid place-items-center py-3 border-r border-y border-gray-300 bg dark:border-gray-dark border-dashed ">
              <h5>
                <span className="text-[16px] font-medium tracking-wide font-para text-light-header-color dark:text-dark-header-color num5" 
                data-target='7585'>
                  0
                </span>
              </h5>
              <p className=" text-light-para-color text-sm font-normal">
                Orders
              </p>
            </div>
            <div className="basis-1/2 sm:basis-1/4  grid place-items-center py-3 border-r border-y border-gray-300 bg dark:border-gray-dark border-dashed ">
              <h5>
                <span className="text-[16px] font-medium tracking-wide font-para text-light-header-color dark:text-dark-header-color">
                  $<span className="num6"  data-target='22'>0</span>k
                </span>
              </h5>
              <p className=" text-light-para-color text-sm font-normal">
                Earnings
              </p>
            </div>
            <div className="basis-1/2 sm:basis-1/4  grid place-items-center py-3 border-r border-y border-gray-300 bg dark:border-gray-dark border-dashed ">
              <h5>
                <span className="text-[16px] font-medium tracking-wide font-para text-light-header-color dark:text-dark-header-color">
                  <span  className="num7"  data-target='367'>367</span>
                </span>
              </h5>
              <p className=" text-light-para-color text-sm font-normal">
                Refunds
              </p>
            </div>
            <div className="basis-1/2 sm:basis-1/4  grid place-items-center py-3  border-y border-gray-300 bg dark:border-gray-dark border-dashed ">
              <h5>
                <span className="text-[16px] font-medium tracking-wide font-para text-green">
                  <span  className="num8"  data-target='18'>18.92</span>%
                </span>
              </h5>
              <p className=" text-light-para-color text-sm font-normal">
                Conversation Ratio
              </p>
            </div>
          </div>
          <Chart options={options} series={series} height={"370"} type="area" className="dark:text-gray text-gray" />
        </div>

        <WorldMap />
      </div>

      <div className={`grid grid-cols-1 lg:grid-cols-2 mt-5 gap-6 rounded-md  ${semi? 'px-0':'px-6 '}`}>
        <div className="bg-white dark:bg-dark-bg-color   overflow-auto">
          <div className="flex items-center justify-between py-4 px-4 border-gray-300 border-b dark:border-gray-dark">
            <h4 className="dark:text-dark-header-color text-[16px] font-medium">Best Selling Products</h4>
            <span
              onClick={() => setSort(!sort)}
              className="text parent font-medium  flex items-center justify-normal gap-1 cursor-pointer relative"
            >
              <span className="text-xs font-semibold uppercase text-light-header-color dark:text-dark-header-color">
                Sort By:
              </span>
              <span className="text-light-para-color font-normal text-[0.8rem] flex items-center justify-start gap-1">
                <span>Today</span> <BiChevronDown />
              </span>
              {sort && (
                <motion.div
                  initial={"closed"}
                  variants={"variants"}
                  animate={sort ? "open" : "closed"}
                  className="absolute bg-white dark:bg-dark-bg-color shadow-md text-light-header-color dark:text-dark-header-color w-[10rem]  py-2 rounded top-[3rem] right-0"
                >
                  <span className="block text-[13px] py-1 px-4 font-normal hover:bg-gray-300">
                    Today
                  </span>
                  <span className="block text-[13px] py-1 px-4 font-normal hover:bg-gray-300">
                    Yesterday
                  </span>
                  <span className="block text-[13px] py-1 px-4 font-normal hover:bg-gray-300">
                    Last 7 days
                  </span>
                  <span className="block text-[13px] py-1 px-4 font-normal hover:bg-gray-300">
                    Last 30 days
                  </span>
                  <span className="block text-[13px] py-1 px-4 font-normal hover:bg-gray-300">
                    This Month
                  </span>
                  <span className="block text-[13px] py-1 px-4 font-normal hover:bg-gray-300">
                    Last Month
                  </span>
                </motion.div>
              )}
<motion.div
                  
                  className="absolute child hidden bg-white dark:bg-dark-bg-color shadow-md text-light-header-color dark:text-dark-header-color w-[10rem]  py-2 rounded top-[1rem] right-0"
                >
                  <span className="block text-[13px] py-1 px-4 font-normal hover:bg-gray-300">
                    Today
                  </span>
                  <span className="block text-[13px] py-1 px-4 font-normal hover:bg-gray-300">
                    Yesterday
                  </span>
                  <span className="block text-[13px] py-1 px-4 font-normal hover:bg-gray-300">
                    Last 7 days
                  </span>
                  <span className="block text-[13px] py-1 px-4 font-normal hover:bg-gray-300">
                    Last 30 days
                  </span>
                  <span className="block text-[13px] py-1 px-4 font-normal hover:bg-gray-300">
                    This Month
                  </span>
                  <span className="block text-[13px] py-1 px-4 font-normal hover:bg-gray-300">
                    Last Month
                  </span>
                </motion.div>

            </span>
          </div>

          <div className="overflow-x-auto w-full">
            <div className=" ">
              <table className=" w-full table-auto whitespace-nowrap">
                <tbody className="">
                  <tr className="border-b dark:border-gray-dark border-gray-300 hover:bg-gray-00 duration-100  cursor-pointer">
                    <td className="img flex items-center justify-start gap-2">
                      <div className="w-10 h-10 bg-blue-btn-bg px-1 py-1 rounded-sm">
                        <img
                          src="https://themesbrand.com/velzon/html/default/assets/images/products/img-1.png"
                          className=" block"
                          alt=""
                        />
                      </div>
                      <div className="">
                        <span className="block text-[0.88rem] font-medium text-light-header-color dark:text-dark-header-color">
                          Branded T-Shirts
                        </span>
                        <span className="block text-[13px] capitalize text-light-para-color font-normal">
                          24 Apr 2021
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="">
                        <span className="block text-[0.88rem] text-light-header-color dark:text-dark-header-color font-normal">
                          $29.00
                        </span>
                        <span className="block text-[13px] capitalize text-light-para-color font-normal">
                          price
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="">
                        <span className="block text-[0.88rem] text-light-header-color dark:text-dark-header-color font-normal">
                          62
                        </span>
                        <span className="block text-[13px] capitalize text-light-para-color font-normal">
                          orders
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="">
                        <span className="block text-[0.88rem] text-light-header-color dark:text-dark-header-color font-normal">
                          510
                        </span>
                        <span className="block text-[13px] capitalize text-light-para-color font-normal">
                          stocks
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="">
                        <span className="block text-[0.88rem] text-light-header-color dark:text-dark-header-color font-normal">
                          $1,798
                        </span>
                        <span className="block text-[13px] capitalize text-light-para-color font-normal">
                          Amount
                        </span>
                      </div>
                    </td>
                  </tr>

                  <tr className="border-b dark:border-gray-dark border-gray-300 hover:bg-gray-00 duration-100  cursor-pointer">
                    <td className="img flex items-center justify-start gap-2">
                      <div className="w-10 h-10 bg-blue-btn-bg px-1 py-1 rounded-sm">
                        <img
                          src="https://themesbrand.com/velzon/html/default/assets/images/products/img-1.png"
                          className=" block"
                          alt=""
                        />
                      </div>
                      <div className="">
                        <span className="block text-[0.88rem] font-medium text-light-header-color dark:text-dark-header-color">
                          Branded T-Shirts
                        </span>
                        <span className="block text-[13px] capitalize text-light-para-color font-normal">
                          24 Apr 2021
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="">
                        <span className="block text-[0.88rem] text-light-header-color dark:text-dark-header-color font-normal">
                          $29.00
                        </span>
                        <span className="block text-[13px] capitalize text-light-para-color font-normal">
                          price
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="">
                        <span className="block text-[0.88rem] text-light-header-color dark:text-dark-header-color font-normal">
                          62
                        </span>
                        <span className="block text-[13px] capitalize text-light-para-color font-normal">
                          orders
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="">
                        <span className="block text-[0.88rem] text-light-header-color dark:text-dark-header-color font-normal">
                          510
                        </span>
                        <span className="block text-[13px] capitalize text-light-para-color font-normal">
                          stocks
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="">
                        <span className="block text-[0.88rem] text-light-header-color dark:text-dark-header-color font-normal">
                          $1,798
                        </span>
                        <span className="block text-[13px] capitalize text-light-para-color font-normal">
                          Amount
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b dark:border-gray-dark border-gray-300 hover:bg-gray-00 duration-100  cursor-pointer">
                    <td className="img flex items-center justify-start gap-2">
                      <div className="w-10 h-10 bg-blue-btn-bg px-1 py-1 rounded-sm">
                        <img
                          src="https://themesbrand.com/velzon/html/default/assets/images/products/img-1.png"
                          className=" block"
                          alt=""
                        />
                      </div>
                      <div className="">
                        <span className="block text-[0.88rem] font-medium text-light-header-color dark:text-dark-header-color">
                          Branded T-Shirts
                        </span>
                        <span className="block text-[13px] capitalize text-light-para-color font-normal">
                          24 Apr 2021
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="">
                        <span className="block text-[0.88rem] text-light-header-color dark:text-dark-header-color font-normal">
                          $29.00
                        </span>
                        <span className="block text-[13px] capitalize text-light-para-color font-normal">
                          price
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="">
                        <span className="block text-[0.88rem] text-light-header-color dark:text-dark-header-color font-normal">
                          62
                        </span>
                        <span className="block text-[13px] capitalize text-light-para-color font-normal">
                          orders
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="">
                        <span className="block text-[0.88rem] text-light-header-color dark:text-dark-header-color font-normal">
                          510
                        </span>
                        <span className="block text-[13px] capitalize text-light-para-color font-normal">
                          stocks
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="">
                        <span className="block text-[0.88rem] text-light-header-color dark:text-dark-header-color font-normal">
                          $1,798
                        </span>
                        <span className="block text-[13px] capitalize text-light-para-color font-normal">
                          Amount
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b dark:border-gray-dark border-gray-300 hover:bg-gray-00 duration-100  cursor-pointer">
                    <td className="img flex items-center justify-start gap-2">
                      <div className="w-10 h-10 bg-blue-btn-bg px-1 py-1 rounded-sm">
                        <img
                          src="https://themesbrand.com/velzon/html/default/assets/images/products/img-1.png"
                          className=" block"
                          alt=""
                        />
                      </div>
                      <div className="">
                        <span className="block text-[0.88rem] font-medium text-light-header-color dark:text-dark-header-color">
                          Branded T-Shirts
                        </span>
                        <span className="block text-[13px] capitalize text-light-para-color font-normal">
                          24 Apr 2021
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="">
                        <span className="block text-[0.88rem] text-light-header-color dark:text-dark-header-color font-normal">
                          $29.00
                        </span>
                        <span className="block text-[13px] capitalize text-light-para-color font-normal">
                          price
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="">
                        <span className="block text-[0.88rem] text-light-header-color dark:text-dark-header-color font-normal">
                          62
                        </span>
                        <span className="block text-[13px] capitalize text-light-para-color font-normal">
                          orders
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="">
                        <span className="block text-[0.88rem] text-light-header-color dark:text-dark-header-color font-normal">
                          510
                        </span>
                        <span className="block text-[13px] capitalize text-light-para-color font-normal">
                          stocks
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="">
                        <span className="block text-[0.88rem] text-light-header-color dark:text-dark-header-color font-normal">
                          $1,798
                        </span>
                        <span className="block text-[13px] capitalize text-light-para-color font-normal">
                          Amount
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b dark:border-gray-dark border-gray-300 hover:bg-gray-00 duration-100  cursor-pointer">
                    <td className="img flex items-center justify-start gap-2">
                      <div className="w-10 h-10 bg-blue-btn-bg px-1 py-1 rounded-sm">
                        <img
                          src="https://themesbrand.com/velzon/html/default/assets/images/products/img-1.png"
                          className=" block"
                          alt=""
                        />
                      </div>
                      <div className="">
                        <span className="block text-[0.88rem] font-medium text-light-header-color dark:text-dark-header-color">
                          Branded T-Shirts
                        </span>
                        <span className="block text-[13px] capitalize text-light-para-color font-normal">
                          24 Apr 2021
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="">
                        <span className="block text-[0.88rem] text-light-header-color dark:text-dark-header-color font-normal">
                          $29.00
                        </span>
                        <span className="block text-[13px] capitalize text-light-para-color font-normal">
                          price
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="">
                        <span className="block text-[0.88rem] text-light-header-color dark:text-dark-header-color font-normal">
                          62
                        </span>
                        <span className="block text-[13px] capitalize text-light-para-color font-normal">
                          orders
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="">
                        <span className="block text-[0.88rem] text-light-header-color dark:text-dark-header-color font-normal">
                          510
                        </span>
                        <span className="block text-[13px] capitalize text-light-para-color font-normal">
                          stocks
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="">
                        <span className="block text-[0.88rem] text-light-header-color dark:text-dark-header-color font-normal">
                          $1,798
                        </span>
                        <span className="block text-[13px] capitalize text-light-para-color font-normal">
                          Amount
                        </span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="px-4 flex items-center justify-between py-4">
            <p className="t text-light-para-color font-normal">
              Showing{" "}
              <span className="text-light-header-color dark:text-dark-header-color font-medium">5</span> of{" "}
              <span className="text-light-header-color dark:text-dark-header-color font-medium">25</span>{" "}
              results
            </p>
            <div className="flex items-center justify-start gap-3 font-medium">
              <span className=" py-1 px-2 border border-gray-300 rounded-sm grid place-items-center">
                <BsArrowLeft className="text-xs text-light-para-color" />
              </span>
              <span className="text-xs px-2 py-1 rounded-sm  border border-gray-300 cursor-pointer hover:bg-gray-300 duration-100 text-light-para-color">
                1
              </span>
              <span className="text-xs px-2 py-1 rounded-sm  border border-gray-300 cursor-pointer bg-primary duration-100 text-white">
                2
              </span>
              <span className="text-xs px-2 py-1 rounded-sm  border border-gray-300 cursor-pointer hover:bg-gray-300 duration-100 text-light-para-color">
                3
              </span>
              <span className=" py-1 px-2 border border-gray-300 rounded-sm">
                <BsArrowRight className="text-xs text-light-para-color" />
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-dark-bg-color  overflow-x-auto">
          <div className="flex items-center justify-between py-4 px-4 border-gray-300 border-b dark:border-gray-dark">
            <h4 className="dark:text-dark-header-color text-[16px] font-medium">Top Seller</h4>
            <span
              onClick={() => (setSort(false), setReport(!report))}
              className="text  font-medium  flex items-center justify-normal gap-1 cursor-pointer relative"
            >
              <span className="text-light-para-color font-normal text-[0.8rem] flex items-center justify-start gap-1">
                <span>Report</span> <BiChevronDown />
              </span>

              {report && (
                <motion.div
                  initial={"closed"}
                  variants={"variants"}
                  animate={sort ? "open" : "closed"}
                  className="absolute bg-white dark:bg-dark-bg-color shadow-md text-light-header-color dark:text-dark-header-color w-[10rem]  py-2 rounded top-[3rem] right-0"
                >
                  <span className="block text-[13px] py-1 px-4 font-normal hover:bg-gray-300">
                    Today
                  </span>
                  <span className="block text-[13px] py-1 px-4 font-normal hover:bg-gray-300">
                    Yesterday
                  </span>
                  <span className="block text-[13px] py-1 px-4 font-normal hover:bg-gray-300">
                    Last 7 days
                  </span>
                  <span className="block text-[13px] py-1 px-4 font-normal hover:bg-gray-300">
                    Last 30 days
                  </span>
                  <span className="block text-[13px] py-1 px-4 font-normal hover:bg-gray-300">
                    This Month
                  </span>
                  <span className="block text-[13px] py-1 px-4 font-normal hover:bg-gray-300">
                    Last Month
                  </span>
                </motion.div>
              )}
            </span>
          </div>

          <div className="overflow-x-auto w-full">
            <div className="">
              <table className="table-auto whitespace-nowrap w-full">
                <tbody className="">
                  <tr className="border-b dark:border-gray-dark border-gray-300 hover:bg-gray-00 duration-100  cursor-pointer">
                    <td className="img flex items-center justify-start gap-2">
                      <div className="w-10 h-10  px-1 py-1 rounded-sm">
                        <img
                          src="https://themesbrand.com/velzon/html/default/assets/images/companies/img-1.png"
                          className=" block"
                          alt=""
                        />
                      </div>
                      <div className="">
                        <span className="block text-[0.88rem] font-medium text-light-header-color dark:text-dark-header-color">
                          iTest Factory
                        </span>
                        <span className="block text-[13px] capitalize text-light-para-color font-normal">
                          Oliver Tyler
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="">
                        <span className="block text-[0.88rem] text-light-header-color dark:text-dark-header-color font-normal">
                          Bags and Wallets
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="">
                        <span className="block text-[0.88rem] text-light-header-color dark:text-dark-header-color font-normal">
                          8547
                        </span>
                        <span className="block text-[13px] capitalize text-light-para-color font-normal">
                          stock
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="">
                        <span className="block text-[0.88rem] text-light-header-color dark:text-dark-header-color font-normal">
                          $541200
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center justify-start gap-2">
                        <span className="block text-[0.88rem] text-light-header-color dark:text-dark-header-color font-normal">
                          32%
                        </span>
                        <span className="block text-[13px] capitalize text-light-para-color font-normal">
                          <RiBarChartFill className="fill-green text-lg" />
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b dark:border-gray-dark border-gray-300 hover:bg-gray-00 duration-100  cursor-pointer">
                    <td className="img flex items-center justify-start gap-2">
                      <div className="w-10 h-10  px-1 py-1 rounded-sm">
                        <img
                          src="https://themesbrand.com/velzon/html/default/assets/images/companies/img-1.png"
                          className=" block"
                          alt=""
                        />
                      </div>
                      <div className="">
                        <span className="block text-[0.88rem] font-medium text-light-header-color dark:text-dark-header-color">
                          iTest Factory
                        </span>
                        <span className="block text-[13px] capitalize text-light-para-color font-normal">
                          Oliver Tyler
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="">
                        <span className="block text-[0.88rem] text-light-header-color dark:text-dark-header-color font-normal">
                          Bags and Wallets
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="">
                        <span className="block text-[0.88rem] text-light-header-color dark:text-dark-header-color font-normal">
                          8547
                        </span>
                        <span className="block text-[13px] capitalize text-light-para-color font-normal">
                          stock
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="">
                        <span className="block text-[0.88rem] text-light-header-color dark:text-dark-header-color font-normal">
                          $541200
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center justify-start gap-2">
                        <span className="block text-[0.88rem] text-light-header-color dark:text-dark-header-color font-normal">
                          32%
                        </span>
                        <span className="block text-[13px] capitalize text-light-para-color font-normal">
                          <RiBarChartFill className="fill-green text-lg" />
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b dark:border-gray-dark border-gray-300 hover:bg-gray-00 duration-100  cursor-pointer">
                    <td className="img flex items-center justify-start gap-2">
                      <div className="w-10 h-10  px-1 py-1 rounded-sm">
                        <img
                          src="https://themesbrand.com/velzon/html/default/assets/images/companies/img-1.png"
                          className=" block"
                          alt=""
                        />
                      </div>
                      <div className="">
                        <span className="block text-[0.88rem] font-medium text-light-header-color dark:text-dark-header-color">
                          iTest Factory
                        </span>
                        <span className="block text-[13px] capitalize text-light-para-color font-normal">
                          Oliver Tyler
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="">
                        <span className="block text-[0.88rem] text-light-header-color dark:text-dark-header-color font-normal">
                          Bags and Wallets
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="">
                        <span className="block text-[0.88rem] text-light-header-color dark:text-dark-header-color font-normal">
                          8547
                        </span>
                        <span className="block text-[13px] capitalize text-light-para-color font-normal">
                          stock
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="">
                        <span className="block text-[0.88rem] text-light-header-color dark:text-dark-header-color font-normal">
                          $541200
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center justify-start gap-2">
                        <span className="block text-[0.88rem] text-light-header-color dark:text-dark-header-color font-normal">
                          32%
                        </span>
                        <span className="block text-[13px] capitalize text-light-para-color font-normal">
                          <RiBarChartFill className="fill-green text-lg" />
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b dark:border-gray-dark border-gray-300 hover:bg-gray-00 duration-100  cursor-pointer">
                    <td className="img flex items-center justify-start gap-2">
                      <div className="w-10 h-10  px-1 py-1 rounded-sm">
                        <img
                          src="https://themesbrand.com/velzon/html/default/assets/images/companies/img-1.png"
                          className=" block"
                          alt=""
                        />
                      </div>
                      <div className="">
                        <span className="block text-[0.88rem] font-medium text-light-header-color dark:text-dark-header-color">
                          iTest Factory
                        </span>
                        <span className="block text-[13px] capitalize text-light-para-color font-normal">
                          Oliver Tyler
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="">
                        <span className="block text-[0.88rem] text-light-header-color dark:text-dark-header-color font-normal">
                          Bags and Wallets
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="">
                        <span className="block text-[0.88rem] text-light-header-color dark:text-dark-header-color font-normal">
                          8547
                        </span>
                        <span className="block text-[13px] capitalize text-light-para-color font-normal">
                          stock
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="">
                        <span className="block text-[0.88rem] text-light-header-color dark:text-dark-header-color font-normal">
                          $541200
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center justify-start gap-2">
                        <span className="block text-[0.88rem] text-light-header-color dark:text-dark-header-color font-normal">
                          32%
                        </span>
                        <span className="block text-[13px] capitalize text-light-para-color font-normal">
                          <RiBarChartFill className="fill-green text-lg" />
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b dark:border-gray-dark border-gray-300 hover:bg-gray-00 duration-100  cursor-pointer">
                    <td className="img flex items-center justify-start gap-2">
                      <div className="w-10 h-10  px-1 py-1 rounded-sm">
                        <img
                          src="https://themesbrand.com/velzon/html/default/assets/images/companies/img-1.png"
                          className=" block"
                          alt=""
                        />
                      </div>
                      <div className="">
                        <span className="block text-[0.88rem] font-medium text-light-header-color dark:text-dark-header-color">
                          iTest Factory
                        </span>
                        <span className="block text-[13px] capitalize text-light-para-color font-normal">
                          Oliver Tyler
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="">
                        <span className="block text-[0.88rem] text-light-header-color dark:text-dark-header-color font-normal">
                          Bags and Wallets
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="">
                        <span className="block text-[0.88rem] text-light-header-color dark:text-dark-header-color font-normal">
                          8547
                        </span>
                        <span className="block text-[13px] capitalize text-light-para-color font-normal">
                          stock
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="">
                        <span className="block text-[0.88rem] text-light-header-color dark:text-dark-header-color font-normal">
                          $541200
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center justify-start gap-2">
                        <span className="block text-[0.88rem] text-light-header-color dark:text-dark-header-color font-normal">
                          32%
                        </span>
                        <span className="block text-[13px] capitalize text-light-para-color font-normal">
                          <RiBarChartFill className="fill-green text-lg" />
                        </span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="px-4 flex items-center justify-between py-4">
            <p className="t text-light-para-color font-normal">
              Showing{" "}
              <span className="text-light-header-color dark:text-dark-header-color font-medium">5</span> of{" "}
              <span className="text-light-header-color dark:text-dark-header-color font-medium">25</span>{" "}
              results
            </p>
            <div className="flex items-center justify-start gap-3 font-medium">
              <span className=" py-1 px-2 border border-gray-300 rounded-sm grid place-items-center">
                <BsArrowLeft className="text-xs text-light-para-color" />
              </span>
              <span className="text-xs px-2 py-1 rounded-sm  border border-gray-300 cursor-pointer hover:bg-gray-300 duration-100 text-light-para-color">
                1
              </span>
              <span className="text-xs px-2 py-1 rounded-sm  border border-gray-300 cursor-pointer bg-primary duration-100 text-white">
                2
              </span>
              <span className="text-xs px-2 py-1 rounded-sm  border border-gray-300 cursor-pointer hover:bg-gray-300 duration-100 text-light-para-color">
                3
              </span>
              <span className=" py-1 px-2 border border-gray-300 rounded-sm">
                <BsArrowRight className="text-xs text-light-para-color" />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className={`grid  place-items-stretch sxl:grid-cols-3 grid-cols-1 gap-4 justify-between mt-5  mb-2  ${semi? 'px-0':'px-6 '}`}>
        <Donut className="" />
        <div className=" bg-white dark:bg-dark-bg-color overflow-x-auto sxl:col-start-2 sxl:col-end-4">
          <div className="flex items-center justify-between py-4 px-4 border-gray-300 border-b dark:border-gray-dark">
            <h4 className="dark:text-gray text-lg font-medium text-light-header-color">Recent Orders</h4>
            <span
              onClick={() => setSort(!sort)}
              className="text  font-medium  flex items-center justify-normal gap-1 cursor-pointer relative"
            >
              <span className="text-blue text-xs hover:bg-blue hover:text-white duration-150 rounded-sm font-normal bg-blue-btn-bg px-2 py-2 text-[0.8rem] flex items-center justify-start gap-1">
                <RiFileList3Fill />  <span>Generate Report</span>
              </span>
            </span>
          </div>

          <div className="w-full overflow-x-auto">
            <table className="w-full donut-table whitespace-nowrap">
              <thead className=" bg-light-gray-bg dark:bg-[rgba(255,255,255,0.05)] ">
                <tr>
                  <th className="capitalize">Order ID</th>
                  <th>Customer</th>
                  <th>Product</th>
                  <th>Amount</th>
                  <th>Vendor</th>
                  <th>Status</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-[13px] font-medium text-primary">
                    #VZ2112
                  </td>
                  <td className="flex items-center justify-start gap-2">
                    <div className="w-8 h-8 rounded-full overflow-hidden">
                      <img
                        src="https://themesbrand.com/velzon/html/default/assets/images/users/avatar-1.jpg"
                        className="block"
                        alt=""
                      />
                    </div>
                    <span className="text-sm font-normal text-dark dark:text-gray  tracking-wider">
                      Alex Smith
                    </span>
                  </td>
                  <td className="text-sm font-normal text-dark tracking-wider">
                    Clothes
                  </td>
                  <td className="text-sm font-normal text-green tracking-wider">
                    $109.00
                  </td>
                  <td className="text-sm font-normal text-dark tracking-wider">
                    Zoetic Fashion
                  </td>
                  <td>
                    <span className="text-xs font-medium text-green tracking-wider bg-green-btn-bg px-2 py-1 rounded-md">
                      paid
                    </span>
                  </td>
                  <td className="text-[15px] font-medium text-dark tracking-wider">
                    5.0
                    <span className="text-[12px] font-medium pl-1">
                      (61 votes)
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="text-[13px] font-medium text-primary">
                    #VZ2112
                  </td>
                  <td className="flex items-center justify-start gap-2">
                    <div className="w-8 h-8 rounded-full overflow-hidden">
                      <img
                        src="https://themesbrand.com/velzon/html/default/assets/images/users/avatar-1.jpg"
                        className="block"
                        alt=""
                      />
                    </div>
                    <span className="text-sm font-normal text-dark dark:text-gray  tracking-wider">
                      Alex Smith
                    </span>
                  </td>
                  <td className="text-sm font-normal text-dark tracking-wider">
                    Clothes
                  </td>
                  <td className="text-sm font-normal text-green tracking-wider">
                    $109.00
                  </td>
                  <td className="text-sm font-normal text-dark tracking-wider">
                    Zoetic Fashion
                  </td>
                  <td>
                    <span className="text-xs font-medium text-green tracking-wider bg-green-btn-bg px-2 py-1 rounded-md">
                      paid
                    </span>
                  </td>
                  <td className="text-[15px] font-medium text-dark tracking-wider">
                    5.0
                    <span className="text-[12px] font-medium pl-1">
                      (61 votes)
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="text-[13px] font-medium text-primary">
                    #VZ2112
                  </td>
                  <td className="flex items-center justify-start gap-2">
                    <div className="w-8 h-8 rounded-full overflow-hidden">
                      <img
                        src="https://themesbrand.com/velzon/html/default/assets/images/users/avatar-1.jpg"
                        className="block"
                        alt=""
                      />
                    </div>
                    <span className="text-sm font-normal text-dark dark:text-gray  tracking-wider">
                      Alex Smith
                    </span>
                  </td>
                  <td className="text-sm font-normal text-dark tracking-wider">
                    Clothes
                  </td>
                  <td className="text-sm font-normal text-green tracking-wider">
                    $109.00
                  </td>
                  <td className="text-sm font-normal text-dark tracking-wider">
                    Zoetic Fashion
                  </td>
                  <td>
                    <span className="text-xs font-medium text-green tracking-wider bg-green-btn-bg px-2 py-1 rounded-md">
                      paid
                    </span>
                  </td>
                  <td className="text-[15px] font-medium text-dark tracking-wider">
                    5.0
                    <span className="text-[12px] font-medium pl-1">
                      (61 votes)
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="text-[13px] font-medium text-primary">
                    #VZ2112
                  </td>
                  <td className="flex items-center justify-start gap-2">
                    <div className="w-8 h-8 rounded-full overflow-hidden">
                      <img
                        src="https://themesbrand.com/velzon/html/default/assets/images/users/avatar-1.jpg"
                        className="block"
                        alt=""
                      />
                    </div>
                    <span className="text-sm font-normal text-dark dark:text-gray  tracking-wider">
                      Alex Smith
                    </span>
                  </td>
                  <td className="text-sm font-normal text-dark tracking-wider">
                    Clothes
                  </td>
                  <td className="text-sm font-normal text-green tracking-wider">
                    $109.00
                  </td>
                  <td className="text-sm font-normal text-dark tracking-wider">
                    Zoetic Fashion
                  </td>
                  <td>
                    <span className="text-xs font-medium text-green tracking-wider bg-green-btn-bg px-2 py-1 rounded-md">
                      paid
                    </span>
                  </td>
                  <td className="text-[15px] font-medium text-dark tracking-wider">
                    5.0
                    <span className="text-[12px] font-medium pl-1">
                      (61 votes)
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="text-[13px] font-medium text-primary">
                    #VZ2112
                  </td>
                  <td className="flex items-center justify-start gap-2">
                    <div className="w-8 h-8 rounded-full overflow-hidden">
                      <img
                        src="https://themesbrand.com/velzon/html/default/assets/images/users/avatar-1.jpg"
                        className="block"
                        alt=""
                      />
                    </div>
                    <span className="text-sm font-normal text-dark dark:text-gray  tracking-wider">
                      Alex Smith
                    </span>
                  </td>
                  <td className="text-sm font-normal text-dark tracking-wider">
                    Clothes
                  </td>
                  <td className="text-sm font-normal text-green tracking-wider">
                    $109.00
                  </td>
                  <td className="text-sm font-normal text-dark tracking-wider">
                    Zoetic Fashion
                  </td>
                  <td>
                    <span className="text-xs font-medium text-green tracking-wider bg-green-btn-bg px-2 py-1 rounded-md">
                      paid
                    </span>
                  </td>
                  <td className="text-[15px] font-medium text-dark tracking-wider">
                    5.0
                    <span className="text-[12px] font-medium pl-1">
                      (61 votes)
                    </span>
                  </td>
                </tr>
                
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className={`flex items-center justify-between bg-white dark:bg-dark-bg-color mt-4  py-4  ${semi? 'px-0':'px-6 '}`}>
        <p className="text-[13px] text-light-para-color">2023 &#169; Velzon</p>
        <p className="text-[13px] text-light-para-color">
          Design & Develop by Themesbrand
        </p>
      </div>
    </div>
  );
};

export default Ecommerce;
