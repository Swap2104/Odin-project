function topBar(){
    let content=document.getElementById('content')
    let topBar =document.createElement('div')
    topBar.id="top-bar"
    content.appendChild(topBar)
}
export {topBar}