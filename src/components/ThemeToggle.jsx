import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/Theme/themeSlice";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  // Sync the theme class with the root HTML element
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="flex items-center justify-center p-2 transition bg-gray-200 rounded-full shadow-md dark:bg-gray-800"
    >
      {theme === "light" ? (
        <MoonIcon className="h-5 w-5 text-blue-gray-500" />
      ) : (
        <SunIcon className="h-5 w-5 text-yellow-700" />
      )}
    </button>
  );
};

export default ThemeToggle;
