// controllers/jobApplicationController.js

const JOBApplication = require('../models/jobApplicationModel');

// Ajouter une nouvelle application
exports.addApplication = async (req, res) => {
  try {
    const { jobId, applicantEmail, applicantName, cv, phoneNumber, coverLetter } = req.body;
    const newApplication = new JOBApplication({
      jobId,
      applicantEmail,
      applicantName,
      cv,
      phoneNumber,
      coverLetter,
    });
    await newApplication.save();
    res.status(201).json(newApplication);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Obtenir toutes les applications
exports.getAllApplications = async (req, res) => {
  try {
    const applications = await JOBApplication.find().populate('jobId');
    res.status(200).json(applications);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtenir les applications d'un utilisateur spécifique par email ou ID
exports.getMyApplications = async (req, res) => {
  try {
    const { email, id } = req.query;
    let applications;
    if (email) {
      applications = await JOBApplication.find({ applicantEmail: email });
    } else if (id) {
      applications = await JOBApplication.find({ _id: id });
    }
    res.status(200).json(applications);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtenir les applications pour un job spécifique
exports.getApplicationByJob = async (req, res) => {
  try {
    const { jobId } = req.params;
    const applications = await JOBApplication.find({ jobId }).populate('jobId');
    res.status(200).json(applications);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
