import React, { useState, useEffect } from "react";
import { Switch, Typography } from "@material-tailwind/react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // Apply the theme to the document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="flex items-center gap-4">
      <Switch
        checked={darkMode}
        onChange={() => setDarkMode(!darkMode)}
        label={
          <div className="flex items-center gap-2">
            {darkMode ? (
              <MoonIcon className="h-5 w-5 text-blue-gray-500" />
            ) : (
              <SunIcon className="h-5 w-5 text-yellow-500" />
            )}
            <Typography
              color={darkMode ? "blue-gray" : "yellow"}
              className="font-medium"
            >
              {darkMode ? "Dark Mode" : "Light Mode"}
            </Typography>
          </div>
        }
      />
    </div>
  );
}

export default ThemeToggle;
