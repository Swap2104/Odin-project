import { Task } from "./task-object";
function addItem(title, name, desc) {
    let task = new Task(title, name, desc)
    const tasks_list={
        // name: tasks,
        tasks: []
    }

    // if (project) {
        tasks_list.tasks.push(task);

        localStorage.setItem("projects", JSON.stringify(projects));
    // } else {
        console.error(`Project "${projectName}" not found.`);
    // }

    console.log(task)
    console.log(tasks_list)
    localStorage.setItem("tasks", JSON.stringify(tasks_list))
}
export { addItem }