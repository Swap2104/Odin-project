let target 
    function displaySideBar() {
        let task = document.getElementById('tasks')
        let project = document.getElementById('projects')
        let tasks_list = JSON.parse(localStorage.getItem("projects"))[0].tasks
        let projects_list = JSON.parse(localStorage.getItem("projects"))
        console.log(tasks_list)
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
            list_project.appendChild(li);
            li.addEventListener('click', (e) => {
                let tasks_list = JSON.parse(localStorage.getItem("projects"))[i].tasks
                // let pro_list = JSON.parse(localStorage.getItem("projects"))[]
                // console.log(pro_list)
                console.log(tasks_list[1])
                target = e.target.textContent
                // console.log(i)

                task_div.textContent = ""
                for (let i = 0; i < tasks_list.length; i++) {
                    let task_div = document.getElementById('task_div')
                    let btn = document.createElement('button')
                    let cards = document.createElement('div');
                    cards.className = 'cards'
                    btn.setAttribute("class", "btn")
                    let title = document.createElement('h1')
                    let desc = document.createElement('h1')
                    title.textContent = tasks_list[i].title
                    desc.textContent = tasks_list[i].desc
                    task_div.append(cards)
                    cards.appendChild(title);
                    cards.appendChild(desc);
                }
            })
        }



        task.appendChild(list)
        project.appendChild(list_project)
    }
    export { displaySideBar , target}
    // export default target