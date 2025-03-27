const mongoose = require("mongoose");

const SkillSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Skill name is required"],
      trim: true,
    },
    category: {
      type: String,
      enum: [
        "Programming Languages",
        "Web Technologies",
        "Frameworks",
        "Tools",
        "Databases",
        "Other",
      ],
      required: [true, "Skill category is required"],
    },
    proficiencyLevel: {
      type: Number,
      min: 1,
      max: 10,
      required: [true, "Proficiency level is required"],
    },
    yearsOfExperience: {
      type: Number,
      min: 0,
      default: 0,
    },
    iconUrl: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Skill", SkillSchema);
