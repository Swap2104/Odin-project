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

    let menu_main = document.getElementById("main")
    menu_main.className = "menu-main"
    let cards=document.createElement('div')
    cards.className="menu-cards"
    let cards1=document.createElement('div')
    cards1.className="menu-cards"
    let cards2=document.createElement('div')
    cards2.className="menu-cards"
    let cards3=document.createElement('div')
    cards3.className="menu-cards"
    let cards4=document.createElement('div')
    cards4.className="menu-cards"
    let cards5=document.createElement('div')
    cards5.className="menu-cards"
    let cards6=document.createElement('div')
    cards6.className="menu-cards"
    let cards7=document.createElement('div')
    cards7.className="menu-cards"
    let cards8=document.createElement('div')
    cards8.className="menu-cards"
    menu_main.appendChild(cards)
    menu_main.appendChild(cards1)
    menu_main.appendChild(cards2)
    menu_main.appendChild(cards3)
    menu_main.appendChild(cards4)
    menu_main.appendChild(cards5)
    menu_main.appendChild(cards6)
    menu_main.appendChild(cards7)
    menu_main.appendChild(cards8)
    let name=document.createElement('h2')
    let name1=document.createElement('h2')
    let name2=document.createElement('h2')
    let name3=document.createElement('h2')
    let name4=document.createElement('h2')
    let name5=document.createElement('h2')
    let name6=document.createElement('h2')
    let name7=document.createElement('h2')
    let name8=document.createElement('h2')
    name.textContent="Flora's Garden Delight Salad"
    name1.textContent="Rosemary Roasted Chicken"
    name2.textContent="Grilled Atlantic Salmon"
    name3.textContent="Spicy Chipotle Tacos"
    name4.textContent="Tangy BBQ Pulled Pork"
    name5.textContent="Classic Beef Burger"
    name6.textContent="Teriyaki Glazed Tofu Stir-Fry"
    name7.textContent="Forest Mushroom Risotto"
    name8.textContent="Azalea Almond Croissant"
    cards.appendChild(name)
    cards1.appendChild(name1)
    cards2.appendChild(name2)
    cards3.appendChild(name3)
    cards4.appendChild(name4)
    cards5.appendChild(name5)
    cards6.appendChild(name6)
    cards7.appendChild(name7)
    cards8.appendChild(name8)
}
export { menu }