function ProjectList({ projects, selectProject }) {
    return (
        <div>
            {projects.map(project => (
                <div key={project._id}>
                    <button onClick={() => selectProject(project._id)}>{project.title}</button>
                </div>
            ))}
        </div>
    );
}

export default ProjectList;
