const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Project title is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Project description is required"],
    },
    technologies: [
      {
        type: String,
        trim: true,
      },
    ],
    githubLink: {
      type: String,
      validate: {
        validator: function (v) {
          return /^(https?:\/\/)?(www\.)?github\.com\/\S+$/.test(v);
        },
        message: (props) => `${props.value} is not a valid GitHub link!`,
      },
    },
    liveLink: {
      type: String,
      validate: {
        validator: function (v) {
          return /^(https?:\/\/)[\w\-]+(\.[\w\-]+)+[#\/?%&=]*$/.test(v);
        },
        message: (props) => `${props.value} is not a valid URL!`,
      },
    },
    imageUrl: {
      type: String,
      default: "",
    },
    startDate: {
      type: Date,
    },
    endDate: {
      type: Date,
    },
    isHighlighted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Project", ProjectSchema);
