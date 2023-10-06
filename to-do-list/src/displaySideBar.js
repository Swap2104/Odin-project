function displaySideBar(){
    let task = document.getElementById('tasks')
    let project = document.getElementById('projects')
    let tasks_list = JSON.parse(localStorage.getItem("projects"))[0].tasks
    let projects_list = JSON.parse(localStorage.getItem("projects"))
    console.log(tasks_list)
    console.log(projects_list[2].name)
    // console.log(tasks_list[0].title)
    let list = document.createElement('ul');
    for (let i = 0; i < tasks_list.length; ++i) {
        let li = document.createElement('li');
        li.textContent = tasks_list[i].title;
        list.appendChild(li);
    }

    let list_project = document.createElement('ul');
    for (let i = 1; i < projects_list.length; ++i) {
        let li = document.createElement('li');
        li.textContent = projects_list[i].name;
        console.log(tasks_list[i].name)
        list_project.appendChild(li);
    }

    task.appendChild(list)
    project.appendChild(list_project)
}
export {displaySideBar}