/**Function creates a navbar with elements:
 * - Home 
 * - projects 
 * - About*/
export function Navbar(){

    const body= document.getElementsByTagName('body')[0]
    const nav=document.createElement('nav')
    const home=document.createElement('div')
    const project=document.createElement('div')
    const about=document.createElement('div')

    home.id="home"
    project.id="project"
    about.id="about"

    home.textContent = "Home"
    project.textContent = "Projects"
    about.textContent = "About"

    body.prepend(nav)
    nav.appendChild(home)
    nav.appendChild(project)
    nav.appendChild(about)
}
