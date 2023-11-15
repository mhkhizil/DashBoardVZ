import React from "react";
import { RiSmartphoneLine, RiTabletLine, RiMacbookLine } from "react-icons/ri";

const ChangePassword = () => {
  return (
    <form className="w-full px-4 py-6">
      <div className="flex flex-wrap -mx-3">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            className="block tracking-wide text-gray-700 dark:text-light text-xs font-bold mb-2"
            for="oldPassword"

          >
            Old Password*
          </label>
          <input
            className="appearance-none block w-full text-sm bg-white dark:bg-gray-800 text-gray-700 dark:text-light border border-gray-300 dark:border-gray-800 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-400"
            id="oldPassword"
            type="text"
            placeholder="Enter current password"
          />
        </div>
        <div className="w-full md:w-1/3 px-3">
          <label

            className="block tracking-wide text-gray-700 dark:text-light text-xs font-bold mb-2"
            for="newPassword"

          >
            New Password*
          </label>
          <input
            className="appearance-none block w-full text-sm bg-white dark:bg-gray-800 text-gray-700 dark:text-light border border-gray-300 dark:border-gray-800 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-400"
            id="newPassword"
            type="text"
            placeholder="Enter New password"
          />
        </div>
        <div className="w-full md:w-1/3 px-3">
          <label

            className="block tracking-wide text-gray-700 dark:text-light text-xs font-bold mb-2"
            for="confirmPassword"

          >
            Confirm Password
          </label>
          <input
            className="appearance-none block w-full text-sm bg-white dark:bg-gray-800 text-gray-700 dark:text-light border border-gray-300 dark:border-gray-800 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-400"
            id="confirmPassword"
            type="text"
            placeholder="Confirm Password"
          />
        </div>
      </div>
      <p className="text-sm text-light-side-bar-color dark:text-light-side-bar-text-color underline mb-6">
        Forget Password?
      </p>
      <div className="flex justify-end">
        <button className="text-sm p-2 bg-green text-white rounded">
          Change Password
        </button>
      </div>
      <div className="mt-4 dark:text-light">
        <div className="flex justify-between border-b-[1px] border-light-gray-bg dark:border-gray-dark py-4 mb-4">
          <h3 className="text-base dark:text-light">Login History</h3>
          <p>All Logout</p>
        </div>
        <div className="flex justify-between text-sm mb-4">
          <div className="flex gap-3">
            <div className="p-4 rounded bg-light-gray-bg dark:bg-gray-800 dark:text-light-side-bar-text-color">
              <RiSmartphoneLine />
            </div>
            <div>
              <p>iPhone 12 Pro</p>
              <p className="font-header-light opacity-50">
                Los Angeles, United States - March 16 at 2:47PM
              </p>
            </div>
          </div>
          <button className="text-sm cursor-pointer">Logout</button>
        </div>
        <div className="flex justify-between text-sm mb-4">
          <div className="flex gap-3">
            <div className="p-4 rounded bg-light-gray-bg dark:bg-gray-800 dark:text-light-side-bar-text-color">
              <RiTabletLine />
            </div>
            <div>
              <p>Apple iPad Pro</p>
              <p className="font-header-light opacity-50">
                Washington, United States - November 06 at 10:43AM
              </p>
            </div>
          </div>
          <button className="text-sm cursor-pointer">Logout</button>
        </div>
        <div className="flex justify-between text-sm mb-4">
          <div className="flex gap-3">
            <div className="p-4 rounded bg-light-gray-bg dark:bg-gray-800 dark:text-light-side-bar-text-color">
              <RiSmartphoneLine />
            </div>
            <div>
              <p>Galaxy S21 Ultra 5G</p>
              <p className="font-header-light opacity-50">
                Conneticut, United States - June 12 at 3:24PM
              </p>
            </div>
          </div>
          <button className="text-sm cursor-pointer">Logout</button>
        </div>
        <div className="flex justify-between text-sm">
          <div className="flex gap-3">
            <div className="p-4 rounded bg-light-gray-bg dark:bg-gray-800 dark:text-light-side-bar-text-color">
              <RiMacbookLine />
            </div>
            <div>
              <p>Dell Inspiron 14</p>
              <p className="font-header-light opacity-50">
                Phoenix, United States - July 26 at 8:10AM
              </p>
            </div>
          </div>
          <button className="text-sm cursor-pointer">Logout</button>
        </div>
      </div>
    </form>
  );
};

export default ChangePassword;