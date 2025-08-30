import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from "react-router-dom";

function AddProblem({ darkMode }) {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [difficulty, setDifficulty] = useState("Easy");
  const [constraints, setConstraints] = useState("");
  const [inputFormat, setInputFormat] = useState("");
  const [outputFormat, setOutputFormat] = useState("");
  const [sampleTestCases, setSampleTestCases] = useState([{ input: "", output: "" }]);

  const handleSampleChange = (index, field, value) => {
    const updated = [...sampleTestCases];
    updated[index][field] = value;
    setSampleTestCases(updated);
  };

  const addSampleTestCase = () => {
    setSampleTestCases([...sampleTestCases, { input: "", output: "" }]);
  };

  const removeSampleTestCase = (index) => {
    const updated = sampleTestCases.filter((_, i) => i !== index);
    setSampleTestCases(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // validation
    if (sampleTestCases.some(tc => !tc.input || !tc.output)) {
      toast.error("Please fill all sample test cases!");
      return;
    }

    const problemData = {
      title,
      description,
      difficulty,
      constraints: constraints.split("\n").map(c => c.trim()).filter(c => c),
      inputFormat: inputFormat.split("\n").map(f => f.trim()).filter(f => f),
      outputFormat: outputFormat.split("\n").map(f => f.trim()).filter(f => f),
      sampleTestCases
    };

    try {
      const res = await axios.post('http://localhost:5000/api/admin/problems', problemData);
      if (res.status === 201) {
        toast.success("Problem created successfully!");
        setTimeout(() => navigate("/Admin"), 1500);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong!");
    }

    // reset form
    setTitle("");
    setDescription("");
    setDifficulty("Easy");
    setConstraints("");
    setInputFormat("");
    setOutputFormat("");
    setSampleTestCases([{ input: "", output: "" }]);
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-6">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className={darkMode ? "bg-black border border-orange-300 rounded-2xl shadow-lg p-10 w-[600px]" : "bg-white border border-orange-300 rounded-2xl shadow-lg p-10 w-[600px]"}>
        <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent drop-shadow-lg">
          Add New Problem
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Problem Title"
              required
              className={darkMode
                ? "w-full p-3 rounded-lg border border-orange-300 bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-300"
                : "w-full p-3 rounded-lg border border-orange-300 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-300"
              }
            />
          </div>

          {/* Description */}
          <div>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Problem Description"
              required
              rows={5}
              className={darkMode
                ? "w-full p-3 rounded-lg border border-orange-300 bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-300"
                : "w-full p-3 rounded-lg border border-orange-300 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-300"
              }
            />
          </div>

          {/* Difficulty */}
          <div>
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className={darkMode
                ? "w-full p-3 rounded-lg border border-orange-300 bg-black text-white focus:outline-none focus:ring-2 focus:ring-orange-300"
                : "w-full p-3 rounded-lg border border-orange-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-orange-300"
              }
            >
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </div>

          {/* Constraints */}
          <div>
            <textarea
              value={constraints}
              onChange={(e) => setConstraints(e.target.value)}
              placeholder="Constraints (one per line)"
              rows={2}
              className={darkMode
                ? "w-full p-3 rounded-lg border border-orange-300 bg-black text-white focus:outline-none focus:ring-2 focus:ring-orange-300"
                : "w-full p-3 rounded-lg border border-orange-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-orange-300"
              }
            />
          </div>

          {/* Input & Output Format */}
          <div>
            <textarea
              value={inputFormat}
              onChange={(e) => setInputFormat(e.target.value)}
              placeholder="Input Format (one per line)"
              rows={2}
              className={darkMode
                ? "w-full p-3 rounded-lg border border-orange-300 bg-black text-white focus:outline-none focus:ring-2 focus:ring-orange-300"
                : "w-full p-3 rounded-lg border border-orange-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-orange-300"
              }
            />
            <textarea
              value={outputFormat}
              onChange={(e) => setOutputFormat(e.target.value)}
              placeholder="Output Format (one per line)"
              rows={2}
              className={darkMode
                ? "w-full p-3 mt-2 rounded-lg border border-orange-300 bg-black text-white focus:outline-none focus:ring-2 focus:ring-orange-300"
                : "w-full p-3 mt-2 rounded-lg border border-orange-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-orange-300"
              }
            />
          </div>

          {/* Sample Test Cases */}
          <div>
            <h2 className={darkMode ? "text-white mb-2 font-semibold" : "text-black mb-2 font-semibold"}>Sample Test Cases</h2>
            {sampleTestCases.map((test, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  placeholder="Input"
                  value={test.input}
                  onChange={(e) => handleSampleChange(index, 'input', e.target.value)}
                  className={darkMode
                    ? "w-1/2 p-2 rounded-lg border border-orange-300 bg-black text-white"
                    : "w-1/2 p-2 rounded-lg border border-orange-300 bg-white text-black"
                  }
                />
                <input
                  type="text"
                  placeholder="Output"
                  value={test.output}
                  onChange={(e) => handleSampleChange(index, 'output', e.target.value)}
                  className={darkMode
                    ? "w-1/2 p-2 rounded-lg border border-orange-300 bg-black text-white"
                    : "w-1/2 p-2 rounded-lg border border-orange-300 bg-white text-black"
                  }
                />
                <button type="button" onClick={() => removeSampleTestCase(index)} className="text-red-500 font-bold">X</button>
              </div>
            ))}
            <button type="button" onClick={addSampleTestCase} className="text-orange-400 font-semibold hover:underline">+ Add Test Case</button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-orange-300 text-black font-semibold hover:scale-105 hover:bg-orange-400 active:scale-95 transition-all duration-300 ease-in-out cursor-pointer"
          >
            Create Problem
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProblem;
