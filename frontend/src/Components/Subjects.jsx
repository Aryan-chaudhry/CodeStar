import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Subjects({ darkMode }) {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [companies, setCompanies] = useState("");

async function handleSubmit(e) {
  e.preventDefault();

  const subjectData = {
    name,
    content,
    image: image.trim() !== "" ? image : null, // backend will apply default if null
    companies: companies
      .split(",")
      .map((c) => c.trim())
      .filter((c) => c !== ""), // turns "Google, Microsoft" → ["Google", "Microsoft"]
  };

  try {
    const res = await axios.post("http://localhost:5000/api/add-subjects", subjectData);

    if (res.status === 201) {
      toast.success(`${name} added successfully ✅`);
      setTimeout(() => {
        navigate("/about"); // redirect to about page
      }, 1500);
    } else if (res.status === 200) {
      toast.info("Subject processed successfully");
    } else {
      toast.warn("Unexpected response from server");
    }
  } catch (error) {
    if (error.response?.status === 400) {
      toast.error("Subject already exists ❌");
    } else if (error.response?.status === 500) {
      toast.error("Server error ⚠️, please try again later.");
    } else {
      toast.error("Something went wrong, please try again.");
    }
  }

  // Reset form
  setName("");
  setContent("");
  setImage("");
  setCompanies("");
}

  return (
    <div
      className={
        darkMode
          ? "flex justify-center items-center min-h-screen p-6"
          : "flex justify-center items-center min-h-screen p-6"
      }
    >
      <ToastContainer position="top-right" autoClose={3000} />

      <div
        className={
          darkMode
            ? "bg-black border border-orange-300 rounded-2xl shadow-lg p-10 w-[500px]"
            : "bg-white border border-orange-300 rounded-2xl shadow-lg p-10 w-[500px]"
        }
      >
        <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent drop-shadow-lg">
          Add Subject
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Subject Name */}
          <div>
            <label
              htmlFor="name"
              className={darkMode ? "block mb-2 text-sm font-medium text-white" : "block mb-2 text-sm font-medium text-black"}
            >
              Subject Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter subject name"
              required
              className={
                darkMode
                  ? "w-full p-3 rounded-lg border border-orange-300 bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-300 transition duration-300"
                  : "w-full p-3 rounded-lg border border-orange-300 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-300 transition duration-300"
              }
            />
          </div>

          {/* Content */}
          <div>
            <label
              htmlFor="content"
              className={darkMode ? "block mb-2 text-sm font-medium text-white" : "block mb-2 text-sm font-medium text-black"}
            >
              Content
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Enter subject content"
              rows="4"
              required
              className={
                darkMode
                  ? "w-full p-3 rounded-lg border border-orange-300 bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-300 transition duration-300"
                  : "w-full p-3 rounded-lg border border-orange-300 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-300 transition duration-300"
              }
            />
          </div>

          {/* Image URL */}
          <div>
            <label
              htmlFor="image"
              className={darkMode ? "block mb-2 text-sm font-medium text-white" : "block mb-2 text-sm font-medium text-black"}
            >
              Thumbnail Image (optional)
            </label>
            <input
              type="text"
              id="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="Enter image URL (leave empty for default)"
              className={
                darkMode
                  ? "w-full p-3 rounded-lg border border-orange-300 bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-300 transition duration-300"
                  : "w-full p-3 rounded-lg border border-orange-300 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-300 transition duration-300"
              }
            />
          </div>

          {/* Companies */}
          <div>
            <label
              htmlFor="companies"
              className={darkMode ? "block mb-2 text-sm font-medium text-white" : "block mb-2 text-sm font-medium text-black"}
            >
              Companies (comma separated)
            </label>
            <input
              type="text"
              id="companies"
              value={companies}
              onChange={(e) => setCompanies(e.target.value)}
              placeholder="e.g. Google, Microsoft, Amazon"
              className={
                darkMode
                  ? "w-full p-3 rounded-lg border border-orange-300 bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-300 transition duration-300"
                  : "w-full p-3 rounded-lg border border-orange-300 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-300 transition duration-300"
              }
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-orange-300 text-black font-semibold 
              hover:scale-105 hover:bg-orange-400 
              active:scale-95 
              transition-all duration-300 ease-in-out cursor-pointer"
          >
            Add Subject
          </button>
        </form>
      </div>
    </div>
  );
}

export default Subjects;
