function topBar(){
    let content=document.getElementById('content')
    let topBar =document.createElement('div')
    let topBar_header =document.createElement('h1')
    topBar_header.className="top-bar-head"
    topBar_header.textContent="To-Do list"
    topBar.id="top-bar"
    topBar.appendChild(topBar_header)
    content.appendChild(topBar)
}
export {topBar}