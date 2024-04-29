import React, { useState, useEffect } from "react";
import axios from "axios";
import ProjectForm from "../components/ProjectForm";
import CustomButton from "../components/CustomButton";
import Modal from "../components/Modal"; // Import the Modal component

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get("http://localhost:5555/projects");
      setProjects(response.data.data);
      setLoading(false);
    } catch (err) {
      console.error("Fetching projects failed:", err);
      setError(err.message);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5555/projects/${id}`);
      fetchProjects();
    } catch (err) {
      console.error("Deleting project failed:", err);
    }
  };

  const handleAddOrUpdateProject = async (project) => {
    // Check if the project has an _id to decide between POST and PUT
    const isUpdating = project._id;
    const method = isUpdating ? "put" : "post";
    const url = isUpdating
      ? `http://localhost:5555/projects/${project._id}`
      : "http://localhost:5555/projects";

    try {
      const response = await axios({
        method: method,
        url: url,
        data: project,
      });
      setShowForm(false);
      fetchProjects(); // Refresh the list after adding or updating
      console.log("Response:", response.data); // Optional: Log the response from the server
    } catch (err) {
      console.error("Saving project failed:", err);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold text-gray-800 mb-4">Current Projects</h1>
      <CustomButton
        onClick={() => {
          setShowForm(true);
          setCurrentProject(null);
        }}
      >
        {showForm ? "Cancel" : "Add New Project"}
      </CustomButton>
      <Modal isOpen={showForm} onClose={() => setShowForm(false)}>
        <ProjectForm
          projectData={currentProject}
          handleSubmit={handleAddOrUpdateProject}
          handleCancel={() => setShowForm(false)}
        />
      </Modal>
      {projects.length > 0 ? (
        <div className="grid grid-cols-3 gap-4">
          {projects.map((project) => (
            <div
              key={project._id}
              className="bg-white shadow-md rounded-lg p-4"
            >
              <h2 className="text-lg font-bold">{project.name}</h2>
              <p>{project.description}</p>
              <p>Budget: ${project.budget}</p>
              <p>Status: {project.status}</p>
              <CustomButton onClick={() => handleDelete(project._id)}>
                Delete
              </CustomButton>
              <CustomButton
                onClick={() => {
                  setShowForm(true);
                  setCurrentProject(project);
                }}
              >
                Update
              </CustomButton>
            </div>
          ))}
        </div>
      ) : (
        <p>No projects found.</p>
      )}
    </div>
  );
};

export default ProjectsPage;
