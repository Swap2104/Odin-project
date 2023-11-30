export function Cards() {
    const project = document.createElement('div')
    const heading = document.createElement('h1')
    const para = document.createElement('para')
    const link = document.createElement('a')
    const content = document.getElementById("content")


    heading.className = "heading"
    para.classList.add("para")
    link.setAttribute("target", "_blank")
    link.textContent = ""
    link.classList.add('link')

    content.appendChild(project)
    project.appendChild(heading)
    project.appendChild(para)
    project.appendChild(link)
}