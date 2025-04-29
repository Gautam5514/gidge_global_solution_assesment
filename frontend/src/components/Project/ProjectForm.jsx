import { useState } from 'react';
import API from '../../api';

function ProjectForm({ refreshProjects }) {
    const [title, setTitle] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await API.post('/projects', { title });
        refreshProjects();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="Project Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <button type="submit">Create Project</button>
        </form>
    );
}

export default ProjectForm;
