import React, { useEffect } from 'react'
import "../../../Css/Profile.css"
import {RiUpload2Fill,RiFileZipFill,RiEqualizerFill,RiFilePdfFill,RiImage2Fill,
  RiEyeFill,RiDeleteBinFill,RiVideoLine,RiFileExcelFill,RiFolderLine} from "react-icons/ri"
import {AiOutlineLoading} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const Docu = () => {
  const nav = useNavigate()

  const token = localStorage.getItem("token");
useEffect(()=>{
  !token&& nav('/logout')
},[])
  return (
    <div className='pt-6'>
      <div className="card doc bg-white dark:bg-dark-side-bar-color">
        <div className="card-body">
          <div className="">
            <div className="flex justify-between items-center mb-6">
              <h1 className='dark:text-white'>Documents</h1>
              <div className=' flex-shrink-0'>
                <input type="file" id='formfile' className=' bg-red text-light cursor-pointer hidden' />
                <label htmlFor="formfile" className='bg-red text-light flex items-center px-4 py-2 rounded-md '>
                  <RiUpload2Fill className='mr-2'/> {" "}
                  Upload File
                </label>
              </div>
            </div>
            <div className="relative overflow-x-auto">
                <table className="w-full text-left bg-white dark:bg-dark-side-bar-color">
                    <thead className="bg-light dark:bg-gray-800 capitalize rounded ">
                        <tr>
                            <th scope="col" className="px-3 py-4 text-xs text-black dark:text-white">
                                File name
                            </th>
                            <th scope="col" className="px-3 py-4 text-xs text-black dark:text-white">
                                Type
                            </th>
                            <th scope="col" className="px-3 py-4 text-xs text-black dark:text-white">
                                Size
                            </th>
                            <th scope="col" className="px-3 py-4 text-xs text-black dark:text-white">
                                Upload Date
                            </th>
                            <th scope="col" className="px-3 py-4 text-xs text-black dark:text-white">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-dark dark:text-white">
                            <td scope="row" className="p-3 font-medium flex items-center whitespace-nowrap">
                              <div className=" flex-shrink-0 text-primary bg-bgprimary text-[20px] p-3">
                                <RiFileZipFill className=""/>
                              </div>
                              <div className='ml-4 flex-1'>
                                <h6 className='mb-0 text-[15px] '>
                                  <a href="#!" className='text-primary dark:text-white'>Artboad-document.zip</a>
                                </h6>
                              </div>
                            </td>
                            <td className="p-3 ">
                                Zip File
                            </td>
                            <td className="p-3">
                                4.57MB
                            </td>
                            <td className="p-3">
                                12 Dec 2021
                            </td>
                            <td className=''>
                            <div className="dropdown dropdown-end">
                              <label tabIndex={0} className="btn px-3 dark:bg-gray-800 rounded focus:bg-gray-500  dark:focus:bg-gray-400 dark:focus:text-dark transition duration-500 bg-light">
                                <RiEqualizerFill className=''/>
                              </label>
                              <ul tabIndex={0} className="dropdown-content z-[1] menu py-2 bg-white shadow-md items-start dark:bg-gray-800 rounded-md dark:text-gray-500 text-gray-900 text-xs min-w-[10rem]">
                                <li><a className='py-[0.35rem] px-[1.2rem] w-full flex items-center font-normal whitespace-nowrap bg-transparent border-0 clear-both'>
                                  <RiEyeFill className='!text-gray'/>
                                  View  
                                </a></li>
                                <li><a className='py-[0.35rem] px-[1.2rem] w-full flex items-center font-normal whitespace-nowrap bg-transparent border-0 clear-both'>
                                  <RiUpload2Fill className='!text-gray'/> 
                                    Download  
                                </a></li>
                                <li className='border-t w-full border-t-gray-200 dark:border-t-gray-700 my-2 '></li>
                                <li><a className='py-[0.35rem] px-[1.2rem] w-full flex items-center font-normal whitespace-nowrap bg-transparent border-0 clear-both'>
                                  <RiDeleteBinFill className="!text-gray"/>
                                    Delete  
                                </a></li>
                              </ul>
                            </div>
                            </td>
                        </tr>

                        <tr className="text-dark dark:text-white">
                            <td scope="row" className="p-3 font-medium flex items-center whitespace-nowrap">
                              <div className=" flex-shrink-0 text-danger bg-bgdanger text-[20px] p-3">
                                <RiFilePdfFill className=""/>
                              </div>
                              <div className='ml-4 flex-1'>
                                <h6 className='mb-0 text-[15px] '>
                                  <a href="#!" className='text-primary dark:text-white'>Bank Management System</a>
                                </h6>
                              </div>
                            </td>
                            <td className="p-3 ">
                                PDF File
                            </td>
                            <td className="p-3">
                                8.89MB
                            </td>
                            <td className="p-3">
                                24 Nov 2021
                            </td>
                            <td className=''>
                            <div className="dropdown dropdown-end">
                              <label tabIndex={1} className="btn px-3 dark:bg-gray-800 rounded focus:bg-gray-500  dark:focus:bg-gray-400 dark:focus:text-dark transition duration-500 bg-light">
                                <RiEqualizerFill className=''/>
                              </label>
                              <ul tabIndex={1} className="dropdown-content z-[1] menu py-2 bg-white shadow-md items-start dark:bg-gray-800 rounded-md dark:text-gray-500 text-gray-900 text-xs min-w-[10rem]">
                                <li><a className='py-[0.35rem] px-[1.2rem] w-full flex items-center font-normal whitespace-nowrap bg-transparent border-0 clear-both'>
                                  <RiEyeFill className='!text-gray'/>
                                  View  
                                </a></li>
                                <li><a className='py-[0.35rem] px-[1.2rem] w-full flex items-center font-normal whitespace-nowrap bg-transparent border-0 clear-both'>
                                  <RiUpload2Fill className='!text-gray'/> 
                                    Download  
                                </a></li>
                                <li className='border-t w-full border-t-gray-200 dark:border-t-gray-700 my-2 '></li>
                                <li><a className='py-[0.35rem] px-[1.2rem] w-full flex items-center font-normal whitespace-nowrap bg-transparent border-0 clear-both'>
                                  <RiDeleteBinFill className="!text-gray"/>
                                    Delete  
                                </a></li>
                              </ul>
                            </div>
                            </td>
                        </tr>

                        <tr className="text-dark dark:text-white">
                            <td scope="row" className="p-3 font-medium flex items-center whitespace-nowrap">
                              <div className=" flex-shrink-0 text-info bg-bginfo text-[20px] p-3">
                                <RiVideoLine className=""/>
                              </div>
                              <div className='ml-4 flex-1'>
                                <h6 className='mb-0 text-[15px] '>
                                  <a href="#!" className='text-primary dark:text-white'>Tour-video.mp4</a>
                                </h6>
                              </div>
                            </td>
                            <td className="p-3 ">
                                MP4 File
                            </td>
                            <td className="p-3">
                                14.62MB
                            </td>
                            <td className="p-3">
                                19 Nov 2021
                            </td>
                            <td className=''>
                            <div className="dropdown dropdown-end">
                              <label tabIndex={0} className="btn px-3 dark:bg-gray-800 rounded focus:bg-gray-500  dark:focus:bg-gray-400 dark:focus:text-dark transition duration-500 bg-light">
                                <RiEqualizerFill className=''/>
                              </label>
                              <ul tabIndex={1} className="dropdown-content z-[1] menu py-2 bg-white shadow-md items-start dark:bg-gray-800 rounded-md dark:text-gray-500 text-gray-900 text-xs min-w-[10rem]">
                                <li><a className='py-[0.35rem] px-[1.2rem] w-full flex items-center font-normal whitespace-nowrap bg-transparent border-0 clear-both'>
                                  <RiEyeFill className='!text-gray'/>
                                  View  
                                </a></li>
                                <li><a className='py-[0.35rem] px-[1.2rem] w-full flex items-center font-normal whitespace-nowrap bg-transparent border-0 clear-both'>
                                  <RiUpload2Fill className='!text-gray'/> 
                                    Download  
                                </a></li>
                                <li className='border-t w-full border-t-gray-200 dark:border-t-gray-700 my-2 '></li>
                                <li><a className='py-[0.35rem] px-[1.2rem] w-full flex items-center font-normal whitespace-nowrap bg-transparent border-0 clear-both'>
                                  <RiDeleteBinFill className="!text-gray"/>
                                    Delete  
                                </a></li>
                              </ul>
                            </div>
                            </td>
                        </tr>

                        <tr className="text-dark dark:text-white">
                            <td scope="row" className="p-3 font-medium flex items-center whitespace-nowrap">
                              <div className=" flex-shrink-0 text-success bg-bgsuccess text-[20px] p-3">
                                <RiFileExcelFill className=""/>
                              </div>
                              <div className='ml-4 flex-1'>
                                <h6 className='mb-0 text-[15px] '>
                                  <a href="#!" className='text-primary dark:text-white'>Account-statement.xsl</a>
                                </h6>
                              </div>
                            </td>
                            <td className="p-3 ">
                                XSL File
                            </td>
                            <td className="p-3">
                                2.38KB
                            </td>
                            <td className="p-3">
                                14 Nov 2021
                            </td>
                            <td className=''>
                            <div className="dropdown dropdown-end">
                              <label tabIndex={2} className="btn px-3 dark:bg-gray-800 rounded focus:bg-gray-500  dark:focus:bg-gray-400 dark:focus:text-dark transition duration-500 bg-light">
                                <RiEqualizerFill className=''/>
                              </label>
                              <ul tabIndex={2} className="dropdown-content z-[1] menu py-2 bg-white shadow-md items-start dark:bg-gray-800 rounded-md dark:text-gray-500 text-gray-900 text-xs min-w-[10rem]">
                                <li><a className='py-[0.35rem] px-[1.2rem] w-full flex items-center font-normal whitespace-nowrap bg-transparent border-0 clear-both'>
                                  <RiEyeFill className='!text-gray'/>
                                  View  
                                </a></li>
                                <li><a className='py-[0.35rem] px-[1.2rem] w-full flex items-center font-normal whitespace-nowrap bg-transparent border-0 clear-both'>
                                  <RiUpload2Fill className='!text-gray'/> 
                                    Download  
                                </a></li>
                                <li className='border-t w-full border-t-gray-200 dark:border-t-gray-700 my-2 '></li>
                                <li><a className='py-[0.35rem] px-[1.2rem] w-full flex items-center font-normal whitespace-nowrap bg-transparent border-0 clear-both'>
                                  <RiDeleteBinFill className="!text-gray"/>
                                    Delete  
                                </a></li>
                              </ul>
                            </div>
                            </td>
                        </tr>

                        <tr className="text-dark dark:text-white">
                            <td scope="row" className="p-3 font-medium flex items-center whitespace-nowrap">
                              <div className=" flex-shrink-0 text-success bg-bgsuccess text-[20px] p-3">
                                <RiFolderLine className=""/>
                              </div>
                              <div className='ml-4 flex-1'>
                                <h6 className='mb-0 text-[15px] '>
                                  <a href="#!" className='text-primary dark:text-white'>Project Screenshots Collection</a>
                                </h6>
                              </div>
                            </td>
                            <td className="p-3 ">
                                Floder File
                            </td>
                            <td className="p-3">
                                97.24MB
                            </td>
                            <td className="p-3">
                                08 Nov 2021
                            </td>
                            <td className=''>
                            <div className="dropdown dropdown-top dropdown-end">
                              <label tabIndex={3} className="btn px-3 dark:bg-gray-800 rounded focus:bg-gray-500  dark:focus:bg-gray-400 dark:focus:text-dark transition duration-500 bg-light">
                                <RiEqualizerFill className=''/>
                              </label>
                              <ul tabIndex={3} className="dropdown-content z-[1] menu py-2 bg-white shadow-md items-start dark:bg-gray-800 rounded-md dark:text-gray-500 text-gray-900 text-xs min-w-[10rem]">
                                <li><a className='py-[0.35rem] px-[1.2rem] w-full flex items-center font-normal whitespace-nowrap bg-transparent border-0 clear-both'>
                                  <RiEyeFill className='!text-gray'/>
                                  View  
                                </a></li>
                                <li><a className='py-[0.35rem] px-[1.2rem] w-full flex items-center font-normal whitespace-nowrap bg-transparent border-0 clear-both'>
                                  <RiUpload2Fill className='!text-gray'/> 
                                    Download  
                                </a></li>
                                <li><a className='py-[0.35rem] px-[1.2rem] w-full flex items-center font-normal whitespace-nowrap bg-transparent border-0 clear-both'>
                                  <RiDeleteBinFill className="!text-gray"/>
                                    Delete  
                                </a></li>
                              </ul>
                            </div>
                            </td>
                        </tr>

                        <tr className="text-dark dark:text-white">
                            <td scope="row" className="p-3 font-medium flex items-center whitespace-nowrap">
                              <div className=" flex-shrink-0 text-danger bg-bgdanger text-[20px] p-3">
                                <RiImage2Fill className=""/>
                              </div>
                              <div className='ml-4 flex-1'>
                                <h6 className='mb-0 text-[15px] '>
                                  <a href="#!" className='text-primary dark:text-white'>Velzon-logo.png</a>
                                </h6>
                              </div>
                            </td>
                            <td className="p-3 ">
                                PNG File
                            </td>
                            <td className="p-3">
                                879KB
                            </td>
                            <td className="p-3">
                                02 Nov 2021
                            </td>
                            <td className=''>
                            <div className="dropdown dropdown-top dropdown-end">
                              <label tabIndex={4} className="btn px-3 dark:bg-gray-800 rounded focus:bg-gray-500  dark:focus:bg-gray-400 dark:focus:text-dark transition duration-500 bg-light">
                                <RiEqualizerFill className=''/>
                              </label>
                              <ul tabIndex={4} className="dropdown-content z-[1] menu py-2 bg-white shadow-md items-start dark:bg-gray-800 rounded-md dark:text-gray-500 text-gray-900 text-xs min-w-[10rem]">
                                <li><a className='py-[0.35rem] px-[1.2rem] w-full flex items-center font-normal whitespace-nowrap bg-transparent border-0 clear-both'>
                                  <RiEyeFill className='!text-gray'/>
                                  View  
                                </a></li>
                                <li><a className='py-[0.35rem] px-[1.2rem] w-full flex items-center font-normal whitespace-nowrap bg-transparent border-0 clear-both'>
                                  <RiUpload2Fill className='!text-gray'/> 
                                    Download  
                                </a></li>
                                <li><a className='py-[0.35rem] px-[1.2rem] w-full flex items-center font-normal whitespace-nowrap bg-transparent border-0 clear-both'>
                                  <RiDeleteBinFill className="!text-gray"/>
                                    Delete  
                                </a></li>
                              </ul>
                            </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='flex justify-center items-center'>
              <a href="#" className='text-success flex'><AiOutlineLoading className="animate-spin-slow mr-2 text-xl"/>{" "} Load more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Docu