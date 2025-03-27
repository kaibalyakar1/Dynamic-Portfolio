const mongoose = require("mongoose");

const ExperienceSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, "Company name is required"],
      trim: true,
    },
    position: {
      type: String,
      required: [true, "Job position is required"],
      trim: true,
    },
    type: {
      type: String,
      enum: ["Full-time", "Part-time", "Freelance", "Internship", "Contract"],
      required: [true, "Employment type is required"],
    },
    location: {
      type: String,
      trim: true,
    },
    startDate: {
      type: Date,
      required: [true, "Start date is required"],
    },
    endDate: {
      type: Date,
    },
    isCurrentRole: {
      type: Boolean,
      default: false,
    },
    responsibilities: [
      {
        type: String,
        trim: true,
      },
    ],
    technologies: [
      {
        type: String,
        trim: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Experience", ExperienceSchema);
