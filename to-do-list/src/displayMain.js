function displayMain() {
    let main = document.getElementById('main')
    let task_div = document.getElementById('task_div')
    let tasks_list = JSON.parse(localStorage.getItem("projects"))[0].tasks
    console.log(tasks_list[3].desc)
    let btn = document.createElement('button')
    for (let i = 0; i < tasks_list.length; ++i) {
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
} export { displayMain }