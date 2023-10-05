import { projects } from "./projects";

function addTaskToProject(projectName, task) {
    const project = projects.find(proj => proj.name === projectName);

    if (project) {
        project.tasks.push(task);

        localStorage.setItem("projects", JSON.stringify(projects));
    } else {
        console.error(`Project "${projectName}" not found.`);
    }
}
export {addTaskToProject}