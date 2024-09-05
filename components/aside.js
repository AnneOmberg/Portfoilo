

const projectForm = document.getElementById("project-form").addEventListener('submit', function (e) {
    e.preventDefault()
    const projectTitle = document.getElementById("project-title").value
    console.log(projectTitle, "title")
})

let title = "Prosjekt tittel"


const timeframe = document.getElementById("timeframe").innerHTML =
    `   <label for="project_title">${title}</label>
        <input type="text" id="project-title" placeholder="...Project Title...">

        <label for="timeframe">Timeframe</label>
        <input type="text" id="month" placeholder="Month">
        <input type="text" id="year" placeholder="Year">

        <label for="description">Description</label>
        <input type="text" id="description" placeholder="Description...">

        <label for="company"></label>
        <input type="text" id="company" placeholder="Employer name...">

        <button type="submit" onclick="click">Send</button>`




/*
const form = document.createElement('aside') {
    return(
        <Link to={"/search"}>
            <form onSubmit={handleClick}>
                <label for="project_title">Project</label>
                <input type="text" id="new_project_form" placeholder="...Project Title..." />
                <button type="submit" onClick={handleClick}>Send</button>
            </form>
        </Link>
    )
}
form.id = 'form'*/
