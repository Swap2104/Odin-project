import { Task } from "./task-object"
import { createProject, projects } from "./projects"
import { addTaskToProject } from "./addTaskToProject"
import { initialLoad } from "./initialLoad"
import { displaySideBar } from "./displaySideBar"

initialLoad()

let task = new Task("title", "name", "desc")
let task1 = new Task("title", "name", "desc")
let task2 = new Task("code", "code", "code everyday")
let task3 = new Task("read", "read", "read everyday")
createProject("empty_project")
createProject("work")
createProject("gym")
createProject("study")
addTaskToProject("empty_project", task)
addTaskToProject("empty_project", task1)
addTaskToProject("empty_project", task2)
addTaskToProject("empty_project", task3)
displaySideBar()
//? console.log(projects)
//? console.log(typeof(projects))
//? console.log(JSON.parse(localStorage.getItem("projects")))
//? let p=JSON.parse(localStorage.getItem("projects"))
//? console.log(p[0].tasks)

// console.log(typeof(JSON.parse(localStorage.getItem("projects"))))
// console.log(typeof(localStorage.getItem("projects")))
