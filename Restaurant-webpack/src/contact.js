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

    let contact_main = document.getElementById("main")
    contact_main.className = "contact-main"
    let contactCard = document.createElement('div')
    contactCard.id = "contact-card"
    contact_main.appendChild(contactCard)
    let card_email = document.createElement('p')
    let card_phone = document.createElement('p')
    let card_address = document.createElement('p')
    let card_img = document.createElement('div')
    card_img.id="contact-card-img"
    card_email.textContent = "Email:  flora2023@webpack.com"
    card_phone.textContent = "Phone Number:  (555) 123-4567"
    card_address.textContent = `Address:  Flora 123 Gourmet Street Foodville, CA 98765 United States`
    contactCard.appendChild(card_phone)
    contactCard.appendChild(card_email)
    contactCard.appendChild(card_address)
    contactCard.appendChild(card_img)

}
export { contact }