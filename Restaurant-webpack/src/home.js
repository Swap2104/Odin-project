import { initialLoad } from "./initial-load"
import { contact } from "./contact"
import { menu } from "./menu"
function home() {
    let content = document.getElementById('content')
    content.innerHTML = ""
    initialLoad()

    let menu_nav = document.getElementById('menu')
    menu_nav.addEventListener('click', ()=>{
        menu()
    })

    let contact_nav = document.getElementById('contact')
    contact_nav.addEventListener('click', () => {
        contact()
    })

    let home = document.getElementById('home')
    home.className = "nav-bar-items-active"

    let home_main = document.getElementById("main")
    home_main.className = "home-main"

    let info_div = document.createElement("div")
    info_div.className = "info-divs"
    let info_div2 = document.createElement("div")
    info_div2.className = "info-divs"

    let img = document.createElement('div')
    img.className = "card-img"
    let img2 = document.createElement('div')
    img2.className = "card-img2"

    let para1 = document.createElement('p')
    para1.id = "info-para"
    let para2 = document.createElement('p')
    para2.id = "info-para2"

    home_main.appendChild(info_div)
    home_main.appendChild(info_div2)


    info_div2.appendChild(img)
    info_div2.appendChild(para2)

    info_div.appendChild(para1)
    info_div.appendChild(img2)


    para1.textContent = "Welcome to Flora, where culinary excellence meets a warm and inviting atmosphere. Our passion for food is reflected in every dish we serve. With a diverse menu inspired by both local flavors and international cuisine, we aim to tantalize your taste buds with a symphony of flavors. Whether you're joining us for a romantic dinner, a family celebration, or a casual lunch with friends, our dedicated team of chefs and staff are committed to providing you with an unforgettable dining experience. Come savor the artistry of our chefs, paired with an extensive selection of wines and cocktails, all while enjoying the cozy ambiance that makes Flora the perfect destination for food lovers and connoisseurs alike. Bon appétit!"

    para2.textContent = "At Flora, we believe in more than just great food; we're committed to providing a warm and inviting atmosphere that makes every visit memorable. Our cozy seating arrangements, tasteful decor, and attentive staff ensure that you feel right at home from the moment you step through our doors. Whether you're celebrating a special occasion or simply seeking a delightful meal, our dedicated team is here to make your experience exceptional. Explore our extensive wine and cocktail selection to complement your meal, and don't forget to save room for our delectable desserts. Join us today and discover why Flora is the perfect destination for food enthusiasts and connoisseurs alike."
}
export { home }