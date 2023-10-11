let projects=[]

function createProject(project_name) {
    const newProjects={
        name: project_name,
        tasks: []
    }

    projects.push(newProjects)
    // console.log({projects})

    // project[project_name] = [1,2,3]
    localStorage.setItem("projects", JSON.stringify(projects))
    // console.log({projects})

    const storedProjects = JSON.parse(localStorage.getItem("projects"));
    // console.log(storedProjects[0]);
    // let obj = localStorage.getItem(task)
    // project.push(obj)
    // console.log(project)
}
export { createProject, projects }