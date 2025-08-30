import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

function Dashboard({darkMode}) {
  const [adminData, setAdminData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/Admin")
      .then((res) => {
        if (res.data && res.data.length > 0) {
          setAdminData(res.data[0]);
        }
      })
      .catch((err) => console.error("Error fetching Admin:", err));
  }, []);

  if (!adminData){
    return (
      <div className={darkMode ? 'mt-10 flex justify-center  text-white' : ' mt-10 flex justify-center text-black'}>
        <h1>No Admin is Assigned right now! please <NavLink to='/admin/signup' className='text-red-600'>SignUp</NavLink></h1> 
      </div>
    )
  }

  return (
    <div className="flex justify-center flex-wrap m-10">
      <div className="flex w-full h-[40rem] flex-wrap justify-evenly">
        
        {/* LEFT SECTION */}
        <div className={darkMode ? 'h-full w-[30%]  text-white border border-orange-300 rounded-2xl p-10' : 'h-full w-[30%] border border-orange-300 rounded-2xl p-10 text-black'}>
          <div className="flex flex-col flex-wrap items-center">
            <img
              src={adminData.avatar || "https://via.placeholder.com/150"}
              alt="profile"
              className="w-32 h-32 object-cover rounded-full border-4 border-orange-400 shadow-md"
            />
            <h1 className="mt-4 text-2xl font-bold tracking-wide text-orange-300">
              {adminData.firstName} {adminData.lastName}
            </h1>
          </div>

          <div className="mt-6 w-full">
            <div className="flex flex-col flex-wrap gap-4">
              <div className={darkMode ? 'flex items-center justify-start gap-5 flex-wrap text-black' : 'flex items-center justify-start  flex-wrap gap-5'}>
                <h3 className="text-sm bg-gray-400 rounded-[10px] pl-2 pr-2">Email</h3>
                <h3 className="text-sm font-medium bg-orange-200 rounded-[10px] pl-2 pr-2">{adminData.email}</h3>
              </div>
              <div className={darkMode ? 'flex items-center justify-start flex-wrap gap-5 text-black' : 'flex items-center justify-start flex-wrap gap-5'}>
                <h3 className="text-sm bg-gray-400 rounded-[10px] pl-2 pr-2">Joined</h3>
                <h3 className="text-sm font-medium bg-orange-200 rounded-[10px] pl-2 pr-2">
                  {new Date(adminData.createdAt).toLocaleDateString()}
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className={darkMode ? 'h-full w-[60%]  border border-orange-300 rounded-2xl p-10 text-white' : 'h-full w-[60%]  border border-orange-300 rounded-2xl p-10 text-black'}>
          <h2 className="text-2xl font-semibold text-orange-300 border-b border-gray-700 pb-2">
            Admin Details
          </h2>
          <div className="mt-6 space-y-4">
            <p className="">
              Welcome <span className="font-semibold text-orange-300">{adminData.firstName}</span>, 
              this section will hold more profile-related information in the future.
            </p>
            <p className="text-gray-400 italic">⚡ More data will appear here soon...</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
