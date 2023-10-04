function createNavBar(){   
    let main=document.getElementById('content')
    let navBar= document.createElement("div")
    navBar.id="navbar"
    main.appendChild(navBar)
}

export { createNavBar }