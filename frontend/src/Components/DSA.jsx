import React from "react";
import ds from '../assets/DSA.png';
import { NavLink, Outlet } from "react-router-dom";

function DSA({ darkMode }) {
  return (
    <div className="w-[90%] h-[30rem] ml-[5%] mt-10">
      <div className="border border-orange-300 w-100 h-80 rounded-2xl">
        <div className="h-[80%] w-full">
          <img src={ds} alt="" className="overflow-hidden rounded-2xl w-full h-full border border-orange-300" />
        </div>
        <div className="h-[20%] w-full flex justify-center mt-[20px]">
          <NavLink
            to="sheet"
            className={darkMode ? 'text-2xl text-white' : 'text-2xl text-black'}
          >
            Start Solving
          </NavLink>
        </div>
      </div>
      {/* Child route will render here */}
      <Outlet />
    </div>
  );
}

export default DSA;
