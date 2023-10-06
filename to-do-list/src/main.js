import { Task } from "./task-object"
import { save } from "./saveData"
function main() {
    let content = document.getElementById('content')
    let main = document.createElement('div')
    let btn = document.createElement('button')
    let in_title = document.createElement('input')
    let in_name = document.createElement('input')
    let in_desc = document.createElement('input')
    let in_btn = document.createElement('button')
    let btn_div = document.createElement('div')
    let task_div = document.createElement('div')
    btn_div.id="btn_div"
    task_div.id="task_div"

    in_title.setAttribute("type", "Text")
    in_title.setAttribute('placeholder', "Title")
    in_name.setAttribute("type", "Text")
    in_name.setAttribute('placeholder', "Write a unique name")
    in_desc.setAttribute("type", "Text")
    in_desc.setAttribute('placeholder', "description")
    btn.setAttribute("class", "btn")
    in_btn.textContent = "Submit"
    in_btn.className = "btn"
    in_title.id= "title"
    in_name.id = "name"
    in_desc.id = "desc"
    btn.textContent = "Add Tasks"
    main.id = "main"
    content.appendChild(main)
    main.appendChild(btn_div)
    main.appendChild(task_div)
    btn_div.appendChild(btn)
    btn.addEventListener('click', () => {
        task_div.prepend(in_btn)
        task_div.prepend(in_desc)
        task_div.prepend(in_name)
        task_div.prepend(in_title)
    })

    in_btn.addEventListener('click', () => {
        let title_data=in_title.value
        let name_data=in_name.value
        let desc_data=in_desc.value
        console.log(title_data)
        console.log(name_data)
        console.log(desc_data)
        in_title.value=""
        in_name.value=""
        in_desc.value=""
        save(title_data, name_data, desc_data)
        in_desc.remove()
        in_name.remove()
        in_title.remove()
        in_btn.remove()
        // let task = new Task("title", "name", "desc")
    })
}
export { main }