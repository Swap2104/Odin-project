function createHeader(){   
    let main=document.getElementById('content')
    let headDiv= document.createElement("div")
    headDiv.className="head"
    main.appendChild(headDiv)
}

export { createHeader }