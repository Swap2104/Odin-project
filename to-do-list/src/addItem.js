import { Task } from "./task-object";
function addItem(title, name, desc) {
    let task = new Task(title, name, desc)
    console.log(task)
    localStorage.setItem(name, JSON.stringify(task))
}
export { addItem }