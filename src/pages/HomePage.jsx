import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-xl"
        onClick={() => navigate("/projects")}
      >
        Projects
      </button>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full text-xl"
        onClick={() => navigate("/finances")}
      >
        Finances
      </button>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full text-xl"
        onClick={() => navigate("/teams")}
      >
        Teams
      </button>
      <button
        className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full text-xl"
        onClick={() => navigate("/targets")}
      >
        Targets
      </button>
    </div>
  );
};

export default HomePage;
