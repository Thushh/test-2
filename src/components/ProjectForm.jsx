import React, { useState, useEffect } from "react";

const ProjectForm = ({ projectData, handleSubmit, handleCancel }) => {
  const [project, setProject] = useState({
    _id: projectData?._id || "",
    name: projectData?.name || "",
    description: projectData?.description || "",
    budget: projectData?.budget || "",
    status: projectData?.status || "",
  });

  useEffect(() => {
    // Update form fields when projectData changes
    setProject({
      _id: projectData?._id || "",
      name: projectData?.name || "",
      description: projectData?.description || "",
      budget: projectData?.budget || "",
      status: projectData?.status || "",
    });
  }, [projectData]);

  const onChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(project);
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col p-4 space-y-4">
      <input
        type="text"
        name="name"
        value={project.name}
        onChange={onChange}
        placeholder="Name"
        required
        className="p-2 border rounded"
      />
      <textarea
        name="description"
        value={project.description}
        onChange={onChange}
        placeholder="Description"
        required
        className="p-2 border rounded"
        rows="3"
      />
      <input
        type="number"
        name="budget"
        value={project.budget}
        onChange={onChange}
        placeholder="Budget"
        required
        className="p-2 border rounded"
      />
      <select
        name="status"
        value={project.status}
        onChange={onChange}
        required
        className="p-2 border rounded"
      >
        <option value="">Select Status</option>
        <option value="Planning">Planning</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <div className="flex justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
        <button
          type="button"
          onClick={handleCancel}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ProjectForm;
