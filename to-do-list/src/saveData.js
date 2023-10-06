import { addTaskToProject } from "./addTaskToProject"
import { displayMain } from "./displayMain"
import { main } from "./main"
import { Task } from "./task-object"

function save(title, name, desc, projects="empty_project") {
    let main=document.getElementById("task_div")
    main.textContent=""
    let task = new Task(title, name, desc)
    addTaskToProject(projects, task)
    displayMain()
}
export {save}