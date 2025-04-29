import { useState } from 'react';
import API from '../api';

export const useTasks = (projectId) => {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        const res = await API.get(`/tasks/${projectId}`);
        setTasks(res.data);
    };

    const createTask = async (task) => {
        const res = await API.post('/tasks', { ...task, project: projectId });
        setTasks(prev => [...prev, res.data]);
    };

    const updateTask = async (taskId, updates) => {
        const res = await API.patch(`/tasks/${taskId}`, updates);
        setTasks(prev => prev.map(t => (t._id === taskId ? res.data : t)));
    };

    const deleteTask = async (taskId) => {
        await API.delete(`/tasks/${taskId}`);
        setTasks(prev => prev.filter(t => t._id !== taskId));
    };

    return { tasks, fetchTasks, createTask, updateTask, deleteTask };
};
