import React, { useState } from "react";
import Chat from "../assets/Chat.png";

function About({ darkMode }) {
  const [clickedAi, setClickedAi] = useState(false);

  function handleClick() {
    setClickedAi(!clickedAi); 
  }

  return (
    <div className="h-screen">
     
      <div className="p-10">
        
      </div>

      
      <div className="fixed bottom-5 right-5 flex flex-col items-end space-y-2">
      
        {clickedAi && (
          <div
            className={
              darkMode
                ? " border border-blue-600 bg-blue-200 text-white rounded-2xl  w-80 h-100 p-4 "
                : " border border-blue-600 bg-blue-200 text-black rounded-2xl  w-80 h-100 p-4 "
            }
          >
            
          </div>
        )}

        {/* Chat Button */}
        <button
          onClick={handleClick}
          className="w-14 h-14  hover:scale-110 transition-transform cursor-pointer"
        >
          <img src={Chat} alt="chat" className="w-full h-full" />
        </button>
      </div>
    </div>
  );
}

export default About;
