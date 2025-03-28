const Certification = require("../models/certification.models");

const createCertification = async (req, res) => {
  const certification = new Certification(req.body);
  try {
    const createdCertification = await certification.save();
    res.status(201).json({
      success: true,
      data: createdCertification,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getAllCertifications = async (req, res) => {
  try {
    const certifications = await Certification.find();
    res.json({
      success: true,
      data: certifications,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateCertification = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedCertification = await Certification.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    res.json({
      success: true,
      data: updatedCertification,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteCertification = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedCertification = await Certification.findByIdAndDelete(id);
    res.json({
      success: true,
      data: deletedCertification,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createCertification,
  getAllCertifications,
  updateCertification,
  deleteCertification,
};
