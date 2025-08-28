import { NavLink } from "react-router-dom";
import darkModeLogo from "../assets/DarkMode.png";

function Navbar({ darkMode, setDarkMode }) {
  function handleDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <nav className="bg-orange-200 w-full flex justify-between items-center px-4 sm:px-6 md:px-10 py-2 sticky top-0 z-[100] shadow-md">
      
      {/* Logo */}
      <div className="text-lg sm:text-xl font-bold">
        <NavLink to="/">Logo</NavLink>
      </div>

      {/* Nav Links */}
      <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10 text-sm sm:text-base md:text-lg font-medium">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "underline underline-offset-4" : ""
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "underline underline-offset-4" : ""
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/progress"
            className={({ isActive }) =>
              isActive ? "underline underline-offset-4" : ""
            }
          >
            Progress
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Mock"
            className={({ isActive }) =>
              isActive ? "underline underline-offset-4" : ""
            }
          >
            Mock
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dsa"
            className={({ isActive }) =>
              isActive ? "underline underline-offset-4" : ""
            }
          >
            DSA
          </NavLink>
        </li>
      </ul>

      {/* Dark Mode + Profile */}
      <div className="flex items-center gap-3 sm:gap-5">
        <button onClick={handleDarkMode}>
          <img
            src={darkModeLogo}
            alt="Dark mode toggle"
            className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer transition-transform duration-700 hover:rotate-[210deg]"
          />
        </button>
        <NavLink to="/profile" className="text-sm sm:text-base md:text-lg">
          Profile
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
