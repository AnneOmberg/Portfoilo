// import { useState } from "react"

type ProjectData= {
    projectTitle: string
projectDescription: string

  }
export default function ProjectCard({ projectTitle, projectDescription }: ProjectData){

    return(

        <article className="project-card">           
            <h3>{projectTitle}</h3>
            <img src="https://placehold.co/100x100" alt="Placeholder" />
            <p> {projectDescription} </p>
            
            {/* <p> {duration.start.month} </p> */}
        </article>

    )
}