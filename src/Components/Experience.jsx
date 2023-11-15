import React from "react";

const Experience = () => {
  return (
    <form className="w-full px-4 py-6">
      <div className="flex flex-wrap -mx-3 mb-6">
        {/* jobTitle */}
        <div className="w-full px-3">
          <label
            className="block tracking-wide text-gray-700 dark:text-light text-xs font-bold mb-2"
            for="jobTitle"
          >
            Job Title
          </label>
          <input
            className="appearance-none block w-full text-sm bg-white dark:bg-gray-800 text-gray-700 dark:text-light border border-gray-300 dark:border-gray-800 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-400"
            id="jobTitle"
            type="text"
            value="Lead Designer / Developer"
            placeholder="Job title"
          />
        </div>
        {/* companyName and Experience */}
        <div className=" w-full flex flex-wrap  mb-6">
          {/* companyName */}
          <div className="w-full md:w-2/4 px-3 mb-6 md:mb-0">
            <label
              className="block tracking-wide text-gray-700 dark:text-light text-xs font-bold mb-2"
              for="companyName"
            >
              Company Name
            </label>
            <input
              className="appearance-none block w-full text-sm bg-white dark:bg-gray-800 text-gray-700 dark:text-light border border-gray-300 dark:border-gray-800 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-400"
              id="companyName"
              type="text"
              value="Themesbrand"
              placeholder="Company name"
            />
          </div>
          {/* Experience */}
          <div className="w-full md:w-2/4 px-3">
            <label
              className="block tracking-wide text-gray-700 dark:text-light text-xs font-bold mb-2"
              for="fromExp"
            >
              Experience Years
            </label>
            <div className="flex ">
              <select
                id="fromExp"
                value="2017"
                class="bg-gray-50 border dark:text-light dark:bg-gray-800 border-gray-300 dark:border-gray-800 focus:outline-none text-sm rounded block w-full p-2.5 "
              >
                <option selected>Select years</option>
                <option value="2001">2001</option>
                <option value="2002">2002</option>
                <option value="2003">2003</option>
                <option value="2004">2004</option>
                <option value="2005">2005</option>
                <option value="2006">2006</option>
                <option value="2007">2007</option>
                <option value="2008">2008</option>
                <option value="2009">2009</option>
                <option value="2010">2010</option>
                <option value="2011">2011</option>
                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
              </select>
              <p className="p-3">to</p>
              <select
                id="toExp"
                value="2020"
                class="bg-gray-50 dark:bg-gray-800 dark:text-light border border-gray-300 dark:border-gray-800 focus:outline-none text-sm rounded block w-full p-2.5 "
              >
                <option selected>Select years</option>
                <option value="2001">2001</option>
                <option value="2002">2002</option>
                <option value="2003">2003</option>
                <option value="2004">2004</option>
                <option value="2005">2005</option>
                <option value="2006">2006</option>
                <option value="2007">2007</option>
                <option value="2008">2008</option>
                <option value="2009">2009</option>
                <option value="2010">2010</option>
                <option value="2011">2011</option>
                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
              </select>
            </div>
          </div>
        </div>
        {/* jobDescription */}
        <div className="w-full flex flex-wrap mb-6">
          <div className="w-full px-3">
            <label
              className="block tracking-wide text-gray-700 dark:text-light text-xs font-bold mb-2"
              for="jobDescription"
            >
              Job Description
            </label>
            <textarea
              className="appearance-none block w-full text-sm bg-white dark:bg-gray-800 text-gray-700 dark:text-light border border-gray-300 dark:border-gray-800 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-400"
              id="jobDescription"
              placeholder="Enter description"
              value="You always want to make sure that your fonts work well together and try to limit the number of fonts you use to three or less. Experiment and play around with the fonts that you already have in the software you're working with reputable font websites. "
              rows={3}
            />
            <div className="flex justify-end">
              <button className="px-3 py-2 bg-green text-white rounded">
                Delete
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-3 mx-3">
          <button className="px-3 py-2 bg-green text-white rounded">
            Update
          </button>
          <button className="px-3 py-2 bg-light-side-bar-color text-white rounded">
            Add New
          </button>
        </div>
      </div>
    </form>
  );
};

export default Experience;