import { initialLoad } from "./initial-load";
import { home } from "./home";
import { menu } from "./menu";
function contact() {
    let content = document.getElementById('content')
    content.innerHTML = ""
    initialLoad()

    let home_nav = document.getElementById('home')

    setTimeout(() => {
        let contact = document.getElementById('contact')
        contact.className = "nav-bar-items-active"
    }, 1)

    home_nav.addEventListener('click', () => {
        home()
    })

    let menu_nav = document.getElementById('menu')
    menu_nav.addEventListener('click', () => {
        menu()
    })


}
export { contact }