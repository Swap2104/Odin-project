import { Task } from "./task-object";
function addItem(title, name, desc) {
    let task0 = new Task(title, name, desc)
    console.log(task0)
}
export { addItem }