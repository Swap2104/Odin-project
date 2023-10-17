//* ship placement
function ship_placement(){
    let content = document.getElementById('content')
    let placement = document.createElement('div')
    placement.id = "placement"
    content.appendChild(placement)
    // placement.textContent = "hello world"
    //* creating grid
    for (let i = 0; i < 100; i++) {
        let div=document.createElement('div')        
        placement.appendChild(div)
        div.className="div"
    }
}

ship_placement()