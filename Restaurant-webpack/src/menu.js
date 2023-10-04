import { initialLoad } from "./initial-load";
import { home } from "./home";
import { contact } from "./contact";
function menu() {
    let content = document.getElementById('content')
    content.innerHTML = ""
    initialLoad()

    let home_nav = document.getElementById('home')
    let contact_nav = document.getElementById('contact')

    setTimeout(() => {
        let menu_nav = document.getElementById('menu')
        menu_nav.className = "nav-bar-items-active"
    }, 1)

    home_nav.addEventListener('click', () => {
        home()
    })

    contact_nav.addEventListener('click', () => {
        contact()
    })
}
export { menu }