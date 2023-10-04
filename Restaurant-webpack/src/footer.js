function createFooter(string){   
    let main=document.getElementById('content')
    let footerDiv= document.createElement("div")
    let para= document.createElement('p')
    footerDiv.id="footer"
    main.appendChild(footerDiv)
    footerDiv.appendChild(para)
    para.textContent=string
}

export { createFooter }