import Task from '../models/Task.js';

export const createTask = async (req, res) => {
    const task = await Task.create({ ...req.body });
    res.json(task);
};

export const getTasks = async (req, res) => {
    const tasks = await Task.find({ project: req.params.projectId });
    res.json(tasks);
};

export const updateTask = async (req, res) => {
    const task = await Task.findByIdAndUpdate(req.params.taskId, req.body, { new: true });
    res.json(task);
};

export const deleteTask = async (req, res) => {
    await Task.findByIdAndDelete(req.params.taskId);
    res.json({ message: 'Task deleted' });
};
