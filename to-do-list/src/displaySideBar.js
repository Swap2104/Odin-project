function displaySideBar(){
    let side_bar=document.getElementById('side-bar')
    let task = document.getElementById('tasks')
    let tasks_list = JSON.parse(localStorage.getItem("projects"))[0].tasks
    console.log(tasks_list)
    // console.log(tasks_list[0].title)
    let list = document.createElement('ul');
    for (let i = 0; i < tasks_list.length; ++i) {
        let li = document.createElement('li');
        li.textContent = tasks_list[i].title;
        list.appendChild(li);
    }

    task.appendChild(list)
}
export {displaySideBar}