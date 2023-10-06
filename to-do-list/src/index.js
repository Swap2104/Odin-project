console.log("hello world")
import { Task } from "./task-object"
import { createProject, projects } from "./projects"
import { addTaskToProject } from "./addTaskToProject"
import { initialLoad } from "./initialLoad"

initialLoad()

let task = new Task("title", "name", "desc")
let task1 = new Task("title", "name", "desc")
createProject("empty_project")
createProject("work")
createProject("gym")
createProject("study")
addTaskToProject("empty_project", task)
addTaskToProject("empty_project", task1)

//? console.log(projects)
//? console.log(typeof(projects))
//? console.log(JSON.parse(localStorage.getItem("projects")))
//? let p=JSON.parse(localStorage.getItem("projects"))
//? console.log(p[0].tasks)

// console.log(typeof(JSON.parse(localStorage.getItem("projects"))))
// console.log(typeof(localStorage.getItem("projects")))
