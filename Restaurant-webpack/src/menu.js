import { initialLoad } from "./initial-load";
import { home } from "./home";
import { contact } from "./contact";
function menu() {


    let home_nav = document.getElementById('home')
    let contact_nav = document.getElementById('contact')
    
    
    setTimeout(() => {
        let menu_nav = document.getElementById('menu')
        menu_nav.className = "nav-bar-items-active"
        console.log(menu_nav.className)
    }, 1)

    home_nav.addEventListener('click', () => {
        console.log(content.innerHTML)
        content.innerHTML = ""
        console.log("hello")
        initialLoad()
        home()
    })
    
    contact_nav.addEventListener('click', () => {
        console.log(content.innerHTML)
        content.innerHTML = ""
        console.log("hello")
        initialLoad()
        contact()
    })
}
export { menu }