import { useContext, useEffect } from "react";
import { StateContext } from "../Context/StateContext";

import { PiMoon } from "react-icons/pi";
import { MdOutlineLightMode } from "react-icons/md";

const ThemeSwitcher = () => {
  const { theme, setTheme,lightTop } = useContext(StateContext);

  // useEffect(() => {
  //   if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  //     setTheme("dark");
  //   } else {
  //     setTheme("light");
  //   }
  // }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");

    }
  }, [theme]);

  const handleThemeSwitcher = () => {
    theme === "light" ? setTheme('dark') : setTheme('light');

  };

  return (
      <button className="hover:bg-blue-btn-bg px-3 py-3 rounded-full" onClick={handleThemeSwitcher}>{theme === "light" ? <MdOutlineLightMode  className={`text-[23px] dark:text-gray-400 font-normal hover:text-blue ${lightTop? '': 'text-gray-400 '}`} /> : <PiMoon className={`text-[23px] dark:text-gray-400 font-normal hover:text-blue ${lightTop? '': 'text-gray-400 '}`} />}</button>
  );
};

export default ThemeSwitcher;
