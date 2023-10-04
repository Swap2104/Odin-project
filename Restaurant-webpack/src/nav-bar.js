function createNavBar(){   
    let main=document.getElementById('content')
    let navBar= document.createElement("div")
    let home  =document.createElement('div')
    let menu =document.createElement('div')
    let contact =document.createElement('div')
    home.id="home"
    menu.id="menu"
    contact.id="contact"
    let home_para=document.createElement('p')
    let menu_para=document.createElement('p')
    let contact_para =document.createElement('p')
    home_para.textContent="Home"
    menu_para.textContent="Menu"
    contact_para.textContent="Contact"
    // home_para.id="Home"
    // menu_para.id="Menu"
    // contact_para.id="Contact"
    navBar.id="navbar"
    main.appendChild(navBar)
    navBar.appendChild(home)
    navBar.appendChild(menu)
    navBar.appendChild(contact)
    home.appendChild(home_para)
    menu.appendChild(menu_para)
    contact.appendChild(contact_para)
}

export { createNavBar }