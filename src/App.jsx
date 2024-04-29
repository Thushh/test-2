import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import FinancesPage from "./pages/FinancesPage";
import TeamsPage from "./pages/TeamsPage";
import TargetsPage from "./pages/TargetsPage";

const App = () => {
  return (
    <Router>
      <div className="container mx-auto px-4 py-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/finances" element={<FinancesPage />} />
          <Route path="/teams" element={<TeamsPage />} />
          <Route path="/targets" element={<TargetsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
