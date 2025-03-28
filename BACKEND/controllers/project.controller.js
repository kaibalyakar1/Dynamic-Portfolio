const Project = require("../models/project.models");

const createProject = async (req, res) => {
  const project = new Project(req.body);
  try {
    const createdProject = await project.save();
    res.status(201).json({
      success: true,
      data: createdProject,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getAllProjects = async (req, res) => {
  const { page = 1, limit = 10, sort = "createdAt" } = req.query;
  try {
    const projects = await Project.find()
      .sort({ [sort]: -1 })
      .skip((page - 1) * limit)
      .limit(limit * 1);

    const total = await Project.countDocuments();
    res.json({
      success: true,
      data: projects,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    res.json({
      success: true,
      data: project,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateProject = async (req, res) => {
  try {
    const projectId = req.params.id;
    if (!projectId) {
      return res.status(400).json({
        success: false,
        message: "Project ID is required",
      });
    }
    const dataToBeUpdated = req.body;
    if (dataToBeUpdated.length === 0) {
      return res.status(400).json({
        success: false,
        message: "At least one field is required",
      });
    }
    const updatedProject = await Project.findByIdAndUpdate(
      projectId,
      dataToBeUpdated,
      { new: true }
    );

    if (!updatedProject) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    res.json({
      success: true,
      data: updatedProject,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteProject = async (req, res) => {
  try {
    const projectId = req.params.id;
    if (!projectId) {
      return res.status(400).json({
        success: false,
        message: "Project ID is required",
      });
    }
    const deleteProject = await Project.findByIdAndDelete(projectId);
    if (!deleteProject) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }
    res.json({
      success: true,
      message: "Project deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
};
