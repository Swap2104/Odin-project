console.log("hello world")
import { Task } from "./task-object"
import { createProject } from "./projects"
import { addTaskToProject } from "./addTaskToProject"

let task = new Task("title", "name", "desc")
createProject("work")
createProject("gym")
createProject("study")
addTaskToProject("work", task)
