import React, { useEffect, useState } from "react";
import axios from "axios";
import Chat from "../assets/Chat.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function About({ darkMode, userId }) {
  const [clickedAi, setClickedAi] = useState(false);
  const [subjects, setSubjects] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); 
  const [enrollments, setEnrollments] = useState({}); // track enrollment per subject

  // Fetch subjects and existing enrollments for the user
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Get subjects
        const subjectsRes = await axios.get("http://localhost:5000/api/subjects");
        setSubjects(subjectsRes.data);

        // Get user's enrollments
        const enrollRes = await axios.get(`http://localhost:5000/api/enrollments/${userId}`);
        const enrollmentMap = {};
        enrollRes.data.forEach(e => {
          enrollmentMap[e.subjectName] = e.progress || 0;
        });
        setEnrollments(enrollmentMap);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [userId]);

  // Handle enrollment
 // Only relevant parts, using your previous About.jsx
const handleEnroll = async (subject) => {
  try {
    await axios.post("http://localhost:5000/api/enrollments", {
      userId, 
      subjectName: subject.name
    });

    toast.success(`You are enrolled in ${subject.name}`);
    setEnrollments(prev => ({ ...prev, [subject.name]: 0 }));
  } catch (err) {
    toast.error(err.response?.data?.message || "Something went wrong");
  }
};


  // Filter subjects by search query (optional)
  const displayedSubjects = subjects.filter(subject =>
    subject.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen p-10">
      <ToastContainer position="top-right" autoClose={3000} />

      {/* Header & Search */}
      <div className={darkMode ? 'flex justify-between flex-wrap text-white' : 'flex justify-between flex-wrap'}>
        <h1 className="text-3xl font-bold mb-6">Subjects</h1>
        <input
          type="text"
          placeholder="Search subjects..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={darkMode
            ? 'text-white w-80 p-2 mb-6 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
            : 'w-80 p-2 mb-6 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'}
        />
      </div>

      {/* Subject Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedSubjects.map(subject => (
          <div key={subject._id} className="bg-white shadow-lg rounded-2xl p-4 hover:scale-105 transition-transform">
            <img
              src={subject.image || "https://via.placeholder.com/150"}
              alt={subject.name}
              className="w-full h-40 object-cover rounded-xl mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{subject.name}</h2>
            <p className="text-gray-600 text-sm mb-2">{subject.content}</p>

            <div className="flex justify-between items-center mt-2">
              <div className="flex flex-wrap gap-2">
                {subject.companies?.slice(0, 3).map((company, i) => (
                  <span key={i} className="bg-gray-800 text-white text-sm px-3 py-1 rounded-full">{company}</span>
                ))}
                {subject.companies && subject.companies.length > 3 && (
                  <span className="bg-gray-500 text-white text-sm px-3 py-1 rounded-full">
                    +{subject.companies.length - 3} more
                  </span>
                )}
              </div>

              <button
                onClick={() => handleEnroll(subject)}
                className={
                  enrollments[subject.name] !== undefined
                    ? "w-20 h-full bg-green-500 rounded-2xl text-white"
                    : "w-20 h-full border-2 border-green-500 rounded-2xl hover:bg-green-500 hover:text-white hover:cursor-pointer transition-colors duration-200"
                }
              >
                {enrollments[subject.name] !== undefined ? "Enrolled" : "Enroll"}
              </button>
            </div>

            {enrollments[subject.name] !== undefined && (
              <div className="mt-2 w-full bg-gray-200 h-2 rounded-full">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: `${enrollments[subject.name]}%` }}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Floating AI Chat */}
      <div className="fixed bottom-5 right-5 flex flex-col items-end space-y-2">
        {clickedAi && (
          <div className={darkMode
            ? "border border-blue-600 bg-blue-200 text-white rounded-2xl w-80 h-100 p-4"
            : "border border-blue-600 bg-blue-200 text-black rounded-2xl w-80 h-100 p-4"}>
            {/* AI content */}
          </div>
        )}
        <button
          onClick={() => setClickedAi(!clickedAi)}
          className="w-14 h-14 hover:scale-110 transition-transform cursor-pointer"
        >
          <img src={Chat} alt="chat" className="w-full h-full" />
        </button>
      </div>
    </div>
  );
}

export default About;
