function displayMain() {
    let main = document.getElementById('main')
    let tasks_list = JSON.parse(localStorage.getItem("projects"))[0].tasks
    console.log(tasks_list[3].desc)
    for (let i = 0; i < tasks_list.length; ++i) {
        let cards = document.createElement('div');
        cards.className='cards'
        let title = document.createElement('h1')
        let desc = document.createElement('h1')
        title.textContent=tasks_list[i].title
        desc.textContent=tasks_list[i].desc
        main.append(cards)
        cards.appendChild(title);
        cards.appendChild(desc);
    }
} export { displayMain }