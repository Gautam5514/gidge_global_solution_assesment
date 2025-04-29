import Project from '../models/Project.js';

export const createProject = async (req, res) => {
    const projectCount = await Project.countDocuments({ user: req.user._id });
    if (projectCount >= 4) return res.status(400).json({ message: 'Max 4 projects allowed' });

    const project = await Project.create({ title: req.body.title, user: req.user._id });
    res.json(project);
};

export const getProjects = async (req, res) => {
    const projects = await Project.find({ user: req.user._id });
    res.json(projects);
};
