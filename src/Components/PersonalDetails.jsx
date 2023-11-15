import React, { useState } from "react";
import MultiSelectSearch from "./MultiSelectSearch ";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PersonalDetails = () => {
  const [startDate, setStartDate] = useState(new Date());

  const [firstName,setFirstName] = useState('Adame')
  const [lastName,setLastName] = useState('Adame')
  const [phone,setPhone] = useState('Adame')
  return (
    <form className="w-full px-4 py-6">
      {/* names */}
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block tracking-wide text-gray-700 dark:text-light text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            First Name
          </label>
          <input
            className="appearance-none block w-full text-sm bg-white dark:bg-gray-800 text-gray-700 dark:text-light border border-gray-300 dark:border-gray-800 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-400"
            defaultValue={firstName}
            readOnly
            onChange={(e) => setFirstName(e.target.value)}
            id="grid-first-name"
            type="text"
            placeholder="Enter your firstname"
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block tracking-wide text-gray-700 dark:text-light text-xs font-bold mb-2"

            htmlFor="grid-last-name"
          >
            Last Name
          </label>
          <input
            className="appearance-none block w-full text-sm bg-white dark:bg-gray-800 text-gray-700 dark:text-light border border-gray-300 dark:border-gray-800 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-400"
            defaultValue={lastName}
            readOnly
            onChange={(e) => setLastName(e.target.value)}
            id="grid-last-name"
            type="text"
            placeholder="Enter your lastname"
          />
        </div>
      </div>
      {/* phone number and email */}
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block tracking-wide text-gray-700 dark:text-light text-xs font-bold mb-2"
            htmlFor="phoneNumber"
          >
            Phone Number
          </label>
          <input
            className="appearance-none block w-full text-sm bg-white dark:bg-gray-800 text-gray-700 dark:text-light border border-gray-300 dark:border-gray-800 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-400"
            defaultValue="+(1) 987 6543"
            readOnly
            id="phoneNumber"
            type="text"
            placeholder="Enter your phone number"
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block tracking-wide text-gray-700 dark:text-light text-xs font-bold mb-2"
            htmlFor="emailAddress"
          >
            Email Address
          </label>
          <input
            className="appearance-none block w-full text-sm bg-white dark:bg-gray-800 text-gray-700 dark:text-light border border-gray-300 dark:border-gray-800 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-400"
            id="emailAddress"
            defaultValue="daveadame@velzon.com"
            readOnly
            type="text"
            placeholder="Enter your email"
          />
        </div>
      </div>
      {/* select date */}
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block tracking-wide text-gray-700 dark:text-light text-xs font-bold mb-2"
            htmlFor="joiningDate"
          >
            Joining Date
          </label>
          {/* <input
            className="appearance-none block w-full text-sm bg-white dark:bg-gray-800 text-gray-700 dark:text-light border border-gray-300 dark:border-gray-800 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-400"
            id="joiningDate"
            defaultValue="24 Nov, 2021"
            readOnly
            type="text"
            placeholder="Select Date"
          /> */}
          <DatePicker
            selected={startDate}
            className={`appearance-none block w-full text-sm bg-white dark:bg-gray-800 text-gray-700 dark:text-light border border-gray-300 dark:border-gray-800 rounded py-3 px-4 mb-3 eading-tight focus:outline-none focus:border-gray-400`}
            onChange={(date) => setStartDate(date)}
          />
        </div>
      </div>
      {/* skills */}
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block tracking-wide text-gray-700 dark:text-light text-xs font-bold mb-2 focus:bg-transparent"
            htmlFor="skillsSelect"
          >
            Skills
          </label>
          <MultiSelectSearch  />
        </div>
      </div>
      {/* designation and website */}
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block tracking-wide text-gray-700 dark:text-light text-xs font-bold mb-2"
            htmlFor="designation"
          >
            Designation
          </label>
          <input
            className="appearance-none block w-full text-sm bg-white dark:bg-gray-800 text-gray-700 dark:text-light border border-gray-300 dark:border-gray-800 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-400"
            defaultValue="Lead Designer / Developer"
            readOnly
            id="designation"
            type="text"
            placeholder="Designation"
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block tracking-wide text-gray-700 dark:text-light text-xs font-bold mb-2"
            htmlFor="website"
          >
            Website
          </label>
          <input
            className="appearance-none block w-full text-sm bg-white dark:bg-gray-800 text-gray-700 dark:text-light border border-gray-300 dark:border-gray-800 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-400"
            id="website"
            defaultValue="www.velzon.com"
            readOnly
            type="text"
            placeholder="www.example.com"
          />
        </div>
      </div>
      {/* city, country and zip code */}
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            className="block tracking-wide text-gray-700 dark:text-light text-xs font-bold mb-2"
            htmlFor="city"
          >
            City
          </label>
          <input
            className="appearance-none block w-full text-sm bg-white dark:bg-gray-800 text-gray-700 dark:text-light border border-gray-300 dark:border-gray-800 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-400"
            defaultValue="California"
            readOnly
            id="city"
            type="text"
            placeholder="City"
          />
        </div>
        <div className="w-full md:w-1/3 px-3">
          <label
            className="block tracking-wide text-gray-700 dark:text-light text-xs font-bold mb-2"
            htmlFor="country"
          >
            Country
          </label>
          <input
            className="appearance-none block w-full text-sm bg-white dark:bg-gray-800 text-gray-700 dark:text-light border border-gray-300 dark:border-gray-800 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-400"
            defaultValue="United States"
            readOnly
            id="country"
            type="text"
            placeholder="Country"
          />
        </div>
        <div className="w-full md:w-1/3 px-3">
          <label
            className="block tracking-wide text-gray-700 dark:text-light text-xs font-bold mb-2"
            htmlFor="zipCode"
          >
            Zip Code
          </label>
          <input
            className="appearance-none block w-full text-sm bg-white dark:bg-gray-800 text-gray-700 dark:text-light border border-gray-300 dark:border-gray-800 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-400"
            defaultValue="90011"
            readOnly
            id="zipCode"
            type="text"
            placeholder="Enter zipcode"
          />
        </div>
      </div>
      {/* description */}
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block tracking-wide text-gray-700 dark:text-light text-xs font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className="appearance-none block w-full text-sm bg-white dark:bg-gray-800 text-gray-700 dark:text-light border border-gray-300 dark:border-gray-800 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-400"
            defaultValue="Hi I'm Anna Adame,It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is European languages are members of the same family."
            readOnly
            id="description"
            placeholder="Enter your description"
            rows={3}
          />
        </div>
      </div>

      <div className="flex justify-end gap-3">
        <button className="bg-light-side-bar-color text-white px-3 py-2 rounded">
          Update
        </button>
        <button className="bg-light dark:bg-gray-dark text-light-side-bar-color dark:text-gray-400 px-3 py-2 rounded">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default PersonalDetails;