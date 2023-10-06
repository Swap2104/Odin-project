function sidebar() {
    let content = document.getElementById('content')
    let side_bar = document.createElement('div')
    let tasks = document.createElement('h1')
    let projects = document.createElement('h1')
    tasks.id = 'tasks'
    projects.id = 'projects'
    side_bar.id = "side-bar"
    projects.textContent = 'Projects'
    tasks.textContent = 'Tasks'
    content.appendChild(side_bar)
    side_bar.appendChild(projects)
    side_bar.appendChild(tasks)


    let tasks_list = JSON.parse(localStorage.getItem("projects"))[0].tasks
    console.log(tasks_list)
    console.log(tasks_list[0].title)
    let list = document.createElement('ul');
    for (let i = 0; i < tasks_list.length; ++i) {
        let li = document.createElement('li');
        li.textContent = tasks_list[i].title;
        list.appendChild(li);
    }

    side_bar.appendChild(list)

}
export { sidebar }