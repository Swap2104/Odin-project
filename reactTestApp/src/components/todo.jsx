import { v4 as uuid } from "uuid";
// a list of todos, each todo object has a task and an id
const todos = [
  { task: "mow the yard", id: uuid() },
  { task: "Work on Odin Projects", id: uuid() },
  { task: "feed the cat", id: uuid() },
];
{console.log(todos)}

const Todolist = () => {
  return (
    <ul>
      {todos.map((e) => (
        <li key={e.id}> {e.task} </li>
      ))}
    </ul>
  );
};

export default Todolist;
