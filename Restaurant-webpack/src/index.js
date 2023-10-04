import { initialLoad } from "./initial-load";
import { home } from "./home";

initialLoad()
home()

let content=document.getElementById('content')
let home_nav=document.getElementById('home')
let menu_nav=document.getElementById('menu')
let contact_nav=document.getElementById('contact')
home_nav.addEventListener('click', ()=>{
    home()
    // content.innerHTML=""
    // console.log(content.innerHTML)
})
menu_nav.addEventListener('click', ()=>{
    home()
})
contact_nav.addEventListener('click', ()=>{
    home()
})