import { useState } from "react";
import ReactApexChart from "react-apexcharts"
import { BiChevronDown } from "react-icons/bi";

const Donut = () => {

    const state = {
          
        series: [44, 55, 41, 17, 15],
        options: {
          chart: {
            type: 'donut',
          },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                // width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }],
          labels: ['Direct', 'Social', 'Email', 'other', 'Referrals'],
          legend: {
            position: 'bottom',
            fontSize: '14px',
            fontWeight: 500,
            whiteSpace: 'wrap',
            
        },
        stroke:{
          colors:['inherit']
         },
          colors: ['#405189', '#0ab39c', '#f1963b', '#f06548', '#299cdb'],
        },
    }

    const [donut, setDonut] = useState(false)

  return (
    <div className=" w-full !min-h-[300px] sxl:col-start-1 sxl:col-end-2 relative bg-white dark:bg-dark-bg-color mx-auto">
        <div className="flex items-center justify-between py-4 px-4 border-gray-300  border-b">
            <h4 className="dark:text-gray text-lg font-medium text-light-header-color">Store Visits by Source</h4>
            <span onClick={() => setDonut(!donut)} className="text text-light-header-color font-medium text-sm cursor-pointer relative">
              <span className="text-light-para-color font-normal text-[0.8rem] flex items-center justify-start gap-1">
                <span>Report</span> <BiChevronDown />
              </span>
              {donut && (

<div

className="absolute bg-white dark:bg-dark-bg-color  shadow-md text-light-header-color w-[10rem]  py-2 rounded top-[3rem] right-0 z-50">
  <span className="block text-[13px] py-1 px-4 font-normal dark:text-gray hover:bg-gray-300">Today</span>
  <span className="block text-[13px] py-1 px-4 font-normal dark:text-gray  hover:bg-gray-300">Yesterday</span>
  <span className="block text-[13px] py-1 px-4 font-normal dark:text-gray hover:bg-gray-300">Last 7 days</span>
  <span className="block text-[13px] py-1 px-4 font-normal dark:text-gray hover:bg-gray-300">Last 30 days</span>
  <span className="block text-[13px] py-1 px-4 font-normal dark:text-gray hover:bg-gray-300">This Month</span>
  <span className="block text-[13px] py-1 px-4 font-normal dark:text-gray hover:bg-gray-300">Last Month</span>

</div>
 )}
            </span>
          </div>
      <ReactApexChart options={state.options} series={state.series}  type="donut" className="py-4 md:w-[60%] w-[100%] dark:text-gray sxl:w-[100%] mx-auto z-10 " />

     
    </div>
  )
}

export default Donut
