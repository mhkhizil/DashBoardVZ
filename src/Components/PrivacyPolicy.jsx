import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="p-4 dark:text-light">
      <h2 className="underline mb-4 text-xl dark:text-light">Security:</h2>
      {/* two-factor authentication */}
      <div className="flex flex-col sm:flex-row justify-between items-start gap-3 mb-3">
        <div className="">
          <p className="font-semibold">Two-factor Authentication</p>
          <p className="opacity-70">
            Two-factor authentication is an enhanced security meansur. Once
            enabled, you'll be required to give two types of identification when
            you log into Google Authentication and SMS are Supported.
          </p>
        </div>
        <button className="whitespace-nowrap p-1 text-white bg-light-side-bar-color rounded text-sm my-2 sm:my-0">
          Enable Two-factor authentication
        </button>
      </div>
      {/* secondary Verification */}
      <div className="flex flex-col sm:flex-row justify-between items-start gap-3 mb-3">
        <div className="">
          <p className="font-semibold">Secondary Verification</p>
          <p className="opacity-70">
            The first factor is a password and the second commonly includes a
            text with a code sent to your smartphone, or biometrics using your
            fingerprint, face, or retina.
          </p>
        </div>
        <button className="whitespace-nowrap p-1 text-white bg-light-side-bar-color rounded text-sm my-2 sm:my-0">
          Set up secondary method
        </button>
      </div>
      {/* backup codes */}
      <div className="flex flex-col sm:flex-row justify-between items-start gap-3 mb-3">
        <div className="">
          <p className="font-semibold">Backup Codes</p>
          <p className="opacity-70">
            A backup code is automatically generated for you when you turn on
            two-factor authentication through your iOS or Android Twitter app.
            You can also generate a backup code on twitter.com.
          </p>
        </div>
        <button className="whitespace-nowrap p-1 text-white bg-light-side-bar-color rounded text-sm my-2 sm:my-0">
          Generate Backup codes
        </button>
      </div>

      <br />
      <h2 className="underline mb-4 text-xl dark:text-light">Application Notifications:</h2>
      {/* direct message */}
      <div className="w-full flex justify-between items-start gap-3 mb-3">
        <div className="">
          <p className="font-semibold">Direct messages</p>
          <p className="opacity-70">Messages from people you follow</p>
        </div>

        <div>
          <div className="flex items-center justify-center w-full mb-12">
            <label
              for="directMsg"
              className="relative flex items-center cursor-pointer"
            >
              <input type="checkbox" id="directMsg" className="sr-only" />
              <div className="bgtoggle block bg-white dark:bg-gray-800 border border-gray w-7 h-5 rounded-full"></div>
              <div className="dot absolute left-1 top-1 bg-gray dark:bg-white w-3 h-3 rounded-full transition"></div>
            </label>
          </div>
        </div>
      </div>
      {/* show desktop notification */}
      <div className="w-full flex justify-between items-start gap-3 mb-3">
        <div className="">
          <p className="font-semibold">Show desktop notifications</p>
          <p className="opacity-70">
            Choose the option you want as your default setting. Block a site:
            Next to "Not allowed to send notifications," click Add.
          </p>
        </div>

        <div>
          <div className="flex items-center justify-center w-full mb-12">
            <label
              for="desktopNoti"
              className="relative flex items-center cursor-pointer"
            >
              <input type="checkbox" id="desktopNoti" className="sr-only" />
              <div className="bgtoggle block bg-white dark:bg-gray-800 border border-gray w-7 h-5 rounded-full"></div>
              <div className="dot absolute left-1 top-1 bg-gray dark:bg-white w-3 h-3 rounded-full transition"></div>
            </label>
          </div>
        </div>
      </div>
      {/* show email notification */}
      <div className="w-full flex justify-between items-start gap-3 mb-3">
        <div className="">
          <p className="font-semibold">Show email notifications</p>
          <p className="opacity-70">
            Under Settings, choose Notifications. Under Select an account,
            choose the account to enable notifications for.
          </p>
        </div>

        <div>
          <div className="flex items-center justify-center w-full mb-12">
            <label
              for="emailNoti"
              className="relative flex items-center cursor-pointer"
            >
              <input type="checkbox" id="emailNoti" className="sr-only" />
              <div className="bgtoggle block bg-white dark:bg-gray-800 border border-gray w-7 h-5 rounded-full"></div>
              <div className="dot absolute left-1 top-1 bg-gray dark:bg-white w-3 h-3 rounded-full transition"></div>
            </label>
          </div>
        </div>
      </div>
      {/* show chat notification */}
      <div className="w-full flex justify-between items-start gap-3 mb-3">
        <div className="">
          <p className="font-semibold">Show chat notifications</p>
          <p className="opacity-70">
            To prevent duplicate mobile notifications from the Gmail and Chat
            apps, in settings, turn off Chat notifications.
          </p>
        </div>

        <div>
          <div className="flex items-center justify-center w-full mb-12">
            <label
              for="chatNoti"
              className="relative flex items-center cursor-pointer"
            >
              <input type="checkbox" id="chatNoti" className="sr-only" />
              <div className="bgtoggle block bg-white dark:bg-gray-800 border border-gray w-7 h-5 rounded-full"></div>
              <div className="dot absolute left-1 top-1 bg-gray dark:bg-white w-3 h-3 rounded-full transition"></div>
            </label>
          </div>
        </div>
      </div>
      {/* show purchase  notification */}
      <div className="w-full flex justify-between items-start gap-3 mb-3">
        <div className="">
          <p className="font-semibold">Show purchase notifications</p>
          <p className="opacity-70">
            Get real-time purchase alerts to protect yourself from fraudulent
            charges.
          </p>
        </div>

        <div>
          <div className="flex items-center justify-center w-full mb-12">
            <label
              for="purchaseNoti"
              className="relative flex items-center cursor-pointer"
            >
              <input type="checkbox" id="purchaseNoti" className="sr-only" />
              <div className="bgtoggle block bg-white dark:bg-gray-800 border border-gray w-7 h-5 rounded-full"></div>
              <div className="dot absolute left-1 top-1 bg-gray dark:bg-white w-3 h-3 rounded-full transition"></div>
            </label>
          </div>
        </div>
      </div>

      <h2 className="underline mb-4 text-xl dark:text-light">Delete This Account:</h2>
      <p className="opacity-70">
        Go to the Data & Privacy section of your profile Account. Scroll to
        "Your data & privacy options." Delete your Profile Account. Follow the
        instructions to delete your account :
      </p>
      <form className=" my-3">
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <input
            className="appearance-none block w-full text-sm bg-white dark:bg-gray-800 text-gray-700 dark:text-light border border-gray-300 dark:border-gray-800 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-400"
            id="grid-first-name"
            type="password"
            value="hayhoware"
            placeholder="Enter your password"
          />
        </div>
        <div className="flex gap-3">
          <button className=" font-semibold text-red p-2 bg-light-gray-bg dark:bg-gray-800 rounded">
            Close & Delete This Account
          </button>
          <button className="p-2 bg-light-gray-bg dark:bg-gray-800 rounded">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default PrivacyPolicy;