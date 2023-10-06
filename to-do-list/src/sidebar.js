function sidebar(){
    let content=document.getElementById('content')
    let side_bar=document.createElement('div')
    side_bar.id="side-bar"
    content.appendChild(side_bar)
}
export {sidebar}