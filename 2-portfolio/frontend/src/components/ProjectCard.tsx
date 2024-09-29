import { useState } from "react"


export default function ProjectCard(){

    const project = {
        title: "first-project",
        image: "https://placehold.co/100x100"
    }

    const [query, setQuery]= useState[]

    return(
        <section>

        <article className="project-card">


            
            <h3>Project Name</h3>
            <img src="https://placehold.co/100x100" alt="Placeholder" />
            <p>Short description of the project...</p>
        </article>
        <article className="project-card">
            <h3>Project Name</h3>
            <img src="https://placehold.co/100x100" alt="Placeholder" />
            <p>Short description of the project...</p>
        </article>

        </section>
    )
}