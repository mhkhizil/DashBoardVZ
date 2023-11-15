import React, { useContext, useEffect, useRef, useState } from "react";
import TopBar from "./TopBar";
import { RiImageEditLine, RiCalendar2Line } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import { StateContext } from "../Context/StateContext";
import { useNavigate } from "react-router-dom";
import blog from "../../Image/blogging.svg";

const Addblog = () => {
  const [tab, setTab] = useState("PersonalDetails");

  const { semi, detached } = useContext(StateContext);
  const [isImage, setIsImage] = useState(null);
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [post, setPost] = useState("");
  const nav = useNavigate();

  const inputRef = useRef();

  const token = localStorage.getItem("token");
  useEffect(() => {
    !token && nav("/logout");
  }, []);

  const label = {
    open: {
      opacity: 1,
      visibility: "visible",
      y: 0,
      transition: { duration: 0.3 },
    },
    closed: {
      opacity: 0,
      visibility: "hidden",
      y: "1.4rem",
      transition: { duration: 0.3 },
    },
  };

  return (
    <div
      className={`z-50 bg-light-gray-bg min-h-screen md:!max-h-screen dark:bg-dark-bg-color flex-1 font-header-regular overflow-y-auto  w-full relative flex flex-col justify-between ${
        semi ? "px-[10rem]" : ""
      } `}
    >
      {!detached && <TopBar />}

      <section className=" dark:bg-dark-bg-color p-6 shadow  flex flex-col md:!flex-row md:!items-center md:!justify-between gap-16 min-h-[80vh] md:!mn-h-[80vh] md:!overflow-hidden overflow-y-auto mt-6">
        <form action="" className="md:basis-1/2 basis-full">
          <div className="relative">
            <motion.label
              initial={"closed"}
              animate={name != "" ? "open" : "closed"}
              variants={label}
              htmlFor="title"
              className="font-para text-light-para-color dark:text-dark-para-color absolute top-[-.5rem] ml-3  text-[.9rem]  bg-light-gray-bg dark:bg-dark-bg-color px-2"
            >
              Your Name
            </motion.label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              id="title"
              placeholder="Your Name"
              className="focus:outline-none text-[.9rem] border border-gray-400  px-4 py-4 rounded-md font-para text-light-para-color dark:text-dark-para-color bg-transparent w-full"
            />
          </div>
          <div className="relative my-6">
            <motion.label
              initial={"closed"}
              animate={title != "" ? "open" : "closed"}
              variants={label}
              htmlFor="title"
              className="font-para text-light-para-color dark:text-dark-para-color absolute top-[-.5rem] ml-3  text-[.9rem]   bg-light-gray-bg dark:bg-dark-bg-color px-2"
            >
              Blog Title
            </motion.label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              id="title"
              placeholder="Blog Title"
              className="focus:outline-none text-[.9rem] border border-gray-400  px-4 py-4 rounded-md font-para text-light-para-color dark:text-dark-para-color bg-transparent w-full"
            />
          </div>
          <div className="relative">
            <motion.label
              initial={"closed"}
              animate={post != "" ? "open" : "closed"}
              variants={label}
              htmlFor="title"
              className="font-para text-light-para-color dark:text-dark-para-color absolute top-[-.5rem] ml-3  text-[.9rem]   bg-light-gray-bg dark:bg-dark-bg-color px-2"
            >
              Blog Post
            </motion.label>
            <textarea
              value={post}
              onChange={(e) => setPost(e.target.value)}
              type="text"
              id="title"
              placeholder="Blog Post"
              className="focus:outline-none text-[.9rem] border border-gray-400  px-4 py-4 rounded-md font-para text-light-para-color dark:text-dark-para-color bg-transparent w-full"
            />
          </div>

          <div className=" mt-6">
            <select
              name="type"
              id="type"
              className="focus:outline-none w-full border border-gray-400  px-4 py-4 rounded-md font-para  text-light-para-color dark:text-dark-para-color bg-transparent"
            >
              <option className="font-para  text-light-para-color dark:text-dark-para-color  bg-light-gray-bg dark:bg-dark-bg-color " value="generalKnowledge">General Knowledge</option>
              <option  className="font-para  text-light-para-color dark:text-dark-para-color  bg-light-gray-bg dark:bg-dark-bg-color" value="texhnology">Technology</option>
              <option  className="font-para  text-light-para-color dark:text-dark-para-color  bg-light-gray-bg dark:bg-dark-bg-color" value="frontendDevelopment">Frontend Development</option>
              <option  className="font-para  text-light-para-color dark:text-dark-para-color  bg-light-gray-bg dark:bg-dark-bg-color" value="backendDevelopment">Backend Development</option>
            </select>
          </div>

          <div className="w-full text-end">
            <button  onClick={(e) => e.preventDefault()} className="border border-secondary bg-secondary duration-150 focus:outline-none px-6 py-2 hover:bg-transparent hover:text-primary rounded-md mt-6 text-white shadow font-bold">
              <input type="submit" />
            </button>
          </div>



          

        </form>
        <div className="md:!basis-1/2 basis-full cursor-pointer md:!h-auto">
          <div className="w-full  md:!overflow-hidden max-h-[60vh] md:!h-auto">
          {isImage ? (
            <img
            onClick={() => inputRef.current.click()}

              src={URL.createObjectURL(isImage)}
              alt=""
              className=" block w-full bg-center  object-cover "
            />
          ) : (
            <h6
              onClick={() => inputRef.current.click()}
              className="font-header text-light-header-color dark:text-dark-header-color text-xl"
            >
              Click here to choose blog image
            </h6>
          )}
          </div>

          <input
            ref={inputRef}
            type="file"
            className="hidden"
            name="image"
            id="image"
            accept="image/*"
            onChange={(event) => {
              setIsImage(event.target.files[0]);
            }}
          />
          
        </div>
      </section>

      <footer className=" w-full flex justify-between items-center bg-white dark:bg-gray-900 text-gray p-4 mt-4">
        <p>2023 © Velzon.</p>
        <p>Design & Develop by Themesbrand</p>
      </footer>
    </div>
  );
};

export default Addblog;

// <div className="basis-1/2 hidden sm:block">
//           <img src={blog} alt="" />
//         </div>

//         <form action="" className="basis-full sm:basis-1/2">
//         <div className="">
//             <label
//               htmlFor="image"
//               className={`w-40 h-32 md:!w-40 md:!h-40 rounded-md overflow-hidden ${isImage? 'bg-transparent':
//                'bg-[#709ff5] dark:bg-[#88aae9]'} dark:text-gray-200  flex justify-center items-center cursor-pointer`}
//             >
//               {isImage ? (
//                 <img
//                   src={URL.createObjectURL(isImage)}
//                   alt=""
//                   className=" block"
//                 />
//               ) : (
//                 <RiImageEditLine className="text-2xl text-white" />
//               )}
//               `
//             </label>
//             `
//             <input
//               type="file"
//               className="hidden"
//               name="image"
//               id="image"
//               accept="image/*"
//               onChange={(event) => {
//                 setIsImage(event.target.files[0]);
//               }}
//             />
//           </div>
//           <div className="relative">
//             <motion.label
//               initial={"closed"}
//               animate={title != "" ? "open" : "closed"}
//               variants={label}
//               htmlFor="title"
//               className="font-para text-light-para-color dark:text-dark-para-color absolute top-[-.5rem] ml-3  text-[.9rem]  bg-white dark:bg-dark-bg-color px-2"
//             >
//               Blog Title
//             </motion.label>
//             <input
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               type="text"
//               id="title"
//               placeholder="Blog Title"
//               className="focus:outline-none text-[.9rem] border border-gray-400  px-4 py-4 rounded-md font-para text-light-para-color dark:text-dark-para-color bg-transparent w-full"
//             />
//           </div>
//           <div className="relative mt-8">
//             <motion.label
//               initial={"closed"}
//               animate={post != "" ? "open" : "closed"}
//               variants={label}
//               htmlFor="title"
//               className="font-para text-light-para-color dark:text-dark-para-color absolute top-[-.5rem] ml-3  text-[.9rem]  bg-white  dark:bg-dark-bg-color px-2"
//             >
//               Blog Post
//             </motion.label>
//             <textarea
//               value={post}
//               onChange={(e) => setPost(e.target.value)}
//               type="text"
//               id="title"
//               rows={6}
//               placeholder="Blog Post"
//               className="focus:outline-none  text-[.9rem] border border-gray-400  px-4 py-4  font-para text-light-para-color dark:text-dark-para-color bg-transparent  w-full rounded-md"
//             />
//           </div>
//           <div className="w-full text-end">
//             <button  onClick={(e) => e.preventDefault()} className="border border-secondary bg-secondary duration-150 focus:outline-none px-6 py-2 hover:bg-transparent hover:text-primary rounded-full mt-6 text-white shadow font-bold">
//               <input type="submit" />
//             </button>
//           </div>
//         </form>
