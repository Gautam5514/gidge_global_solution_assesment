import { useEffect, useState } from 'react';
import API from '../api';
import ProjectForm from '../components/Project/ProjectForm';
import ProjectList from '../components/Project/ProjectList';
import { useTasks } from '../hooks/useTasks';
import TaskForm from '../components/Task/TaskForm';
import TaskList from '../components/Task/TaskList';
import { useAuth } from '../context/AuthContext';

function Dashboard() {
    const { logout } = useAuth();
    const [projects, setProjects] = useState([]);
    const [currentProject, setCurrentProject] = useState(null);
    const { tasks, fetchTasks, createTask, updateTask, deleteTask } = useTasks(currentProject);

    useEffect(() => {
        fetchProjects();
    }, []);

    useEffect(() => {
        if (currentProject) fetchTasks();
    }, [currentProject]);

    const fetchProjects = async () => {
        try {
            const res = await API.get('/projects');
            setProjects(res.data);
        } catch (err) {
            console.error('Error fetching projects:', err);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
                    <button
                        onClick={logout}
                        className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow"
                    >
                        Logout
                    </button>
                </div>

                {/* Project Form */}
                <div className="bg-white p-6 rounded-xl shadow mb-6">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Create New Project</h2>
                    <ProjectForm refreshProjects={fetchProjects} />
                </div>

                {/* Project List */}
                <div className="bg-white p-6 rounded-xl shadow mb-6">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Your Projects</h2>
                    <ProjectList
                        projects={projects}
                        selectProject={setCurrentProject}
                    />
                </div>

                {/* Task Section */}
                {currentProject && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Task Form */}
                        <div className="bg-white p-6 rounded-xl shadow">
                            <h2 className="text-xl font-semibold text-gray-700 mb-4">Add New Task</h2>
                            <TaskForm createTask={createTask} />
                        </div>

                        {/* Task List */}
                        <div className="bg-white p-6 rounded-xl shadow">
                            <h2 className="text-xl font-semibold text-gray-700 mb-4">Tasks in {currentProject?.name}</h2>
                            <TaskList
                                tasks={tasks}
                                updateTask={updateTask}
                                deleteTask={deleteTask}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Dashboard;
