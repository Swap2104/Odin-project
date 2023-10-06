import { Task } from "./task-object"
import { createProject, projects } from "./projects"
import { addTaskToProject } from "./addTaskToProject"
import { initialLoad } from "./initialLoad"
import { displaySideBar } from "./displaySideBar"
import { displayMain } from "./displayMain"

initialLoad()

let task = new Task("title", "name", "desc")
let task1 = new Task("title", "name", "desc")
let task2 = new Task("code", "code", "code everyday")
let task3 = new Task("read", "read", "read everyday")
let task4 = new Task("typing", "typing", "type everyday")
let task5 = new Task("wake up", "wake up", "wake up on time")
createProject("empty_project")
createProject("work")
createProject("gym")
createProject("study")
addTaskToProject("empty_project", task)
addTaskToProject("empty_project", task1)
addTaskToProject("empty_project", task2)
addTaskToProject("study", task3)
addTaskToProject("work", task4)
addTaskToProject("empty_project", task5)
displaySideBar()
displayMain()
