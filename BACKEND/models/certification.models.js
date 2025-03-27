const mongoose = require("mongoose");

const CertificationSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Certification title is required"],
      trim: true,
    },
    issuingOrganization: {
      type: String,
      required: [true, "Issuing organization is required"],
      trim: true,
    },
    issueDate: {
      type: Date,
      required: [true, "Issue date is required"],
    },
    expirationDate: {
      type: Date,
    },
    credentialId: {
      type: String,
      trim: true,
    },
    credentialUrl: {
      type: String,
      validate: {
        validator: function (v) {
          return /^(https?:\/\/)[\w\-]+(\.[\w\-]+)+[#\/?%&=]*$/.test(v);
        },
        message: (props) => `${props.value} is not a valid URL!`,
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Certification", CertificationSchema);
