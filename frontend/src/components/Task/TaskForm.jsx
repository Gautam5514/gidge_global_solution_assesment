// components/Task/TaskForm.jsx

import { useState } from 'react';
import PropTypes from 'prop-types';

function TaskForm({ createTask }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title) return;

        createTask({ title, description });
        setTitle('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded shadow">
            <input
                type="text"
                placeholder="Task Title"
                className="border p-2 w-full rounded"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Task Description"
                className="border p-2 w-full rounded"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
                Add Task
            </button>
        </form>
    );
}

TaskForm.propTypes = {
    createTask: PropTypes.func.isRequired,
};

export default TaskForm;
