import React, { useEffect, useState } from "react";
import axios from 'axios';

function DSASheet() {
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(null);

  const [page, setPage] = useState(0);
  const limit = 100;

  useEffect(() => {
    const fetchProblems = async () => {
      try {
        page === 0 ? setLoading(true) : setLoadingMore(true);

        const res = await axios.get(
          `http://localhost:5000/api/problems?limit=${limit}&skip=${page * limit}`
        );
        setProblems(prev => [...prev, ...res.data]);

        setLoading(false);
        setLoadingMore(false);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch problems");
        setLoading(false);
        setLoadingMore(false);
      }
    };

    fetchProblems();
  }, [page]);

  if (loading)
    return <div className="text-center mt-10 text-xl">Loading problems...</div>;
  if (error)
    return <div className="text-center mt-10 text-red-500">{error}</div>;

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-5 text-center">DSA Problem Sheet</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {problems.map((problem, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 shadow-md hover:shadow-lg transition bg-white dark:bg-gray-800"
          >
            <h2 className="font-semibold text-lg">{problem.name}</h2>
            <p className="text-sm mt-1">
              Difficulty:{" "}
              <span
                className={`font-bold ${
                  problem.difficulty === "Easy"
                    ? "text-green-600"
                    : problem.difficulty === "Medium"
                    ? "text-yellow-500"
                    : "text-red-600"
                }`}
              >
                {problem.difficulty}
              </span>
            </p>
            <p className="text-sm mt-1">
              Topics:{" "}
              {problem.topics.length > 0 ? problem.topics.join(", ") : "General"}
            </p>
            <a
              href={problem.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline mt-2 block"
            >
              View Problem
            </a>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center mt-6">
        <button
          onClick={() => setPage(prev => prev + 1)}
          className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          disabled={loadingMore}
        >
          {loadingMore ? "Loading..." : "Load More"}
        </button>
      </div>
    </div>
  );
}

export default DSASheet;
