import { Task } from "./task-object";
function addItem(title, name, desc, obj_key) {
    let task = new Task(title, name, desc)
    console.log(task)
    localStorage.setItem(obj_key,JSON.stringify(task))
}
export { addItem }