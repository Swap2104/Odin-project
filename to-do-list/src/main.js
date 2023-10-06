function main(){
    let content=document.getElementById('content')
    let main =document.createElement('div')
    let btn =document.createElement('button')
    btn.className="btn"
    btn.textContent="Add Tasks"
    main.id="main"
    content.appendChild(main)
    main.appendChild(btn)
}
export {main}