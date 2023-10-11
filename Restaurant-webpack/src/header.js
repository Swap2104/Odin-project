function createHeader(header){   
    let main=document.getElementById('content')
    let headDiv= document.createElement("div")
    let head= document.createElement('h1')
    head.id="header-text"
    headDiv.className="head"
    main.appendChild(headDiv)
    headDiv.appendChild(head)
    head.textContent=header
}

export { createHeader }