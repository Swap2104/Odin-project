/**Function creates a navbar with elements:
 * - Home 
 * - projects 
 * - About*/
export function Navbar(){

    const body= document.getElementsByTagName('body')[0]
    const nav=document.createElement('nav')
    const home=document.createElement('a')
    const project=document.createElement('a')
    const about=document.createElement('a')

    home.id="home"
    project.id="project"
    about.id="about"

    home.textContent = "Home"
    project.textContent = "Projects"
    about.textContent = "About"

    home.setAttribute("href", "../index.html")
    project.setAttribute("href", "github_pages/project.html")
    about.setAttribute("href", "#")

    body.prepend(nav)
    nav.appendChild(home)
    nav.appendChild(project)
    nav.appendChild(about)
}
