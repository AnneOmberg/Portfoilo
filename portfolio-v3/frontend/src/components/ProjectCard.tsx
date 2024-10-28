// import { useState } from "react"

import { useState } from "react"

type ProjectCardPros = {
    title: string
}

// type ProjectData= {
//     id: number
//     projectTitle: string
// projectDescription: string
// src: string
//   }
export default function ProjectCard(
    props: ProjectProps & { onRemoveProject: (id: string) => void },
    data: ProjectCardPros,
    { projectTitle, projectDescription }: ProjectData) {

    const { title } = data
    const firstLetter = title.split(" ").join("").toUpperCase().slice(0, 1)



    const [showRemove, setShowRemove] = useState(false)
    const { id, title, onRemoveProject } = props

    return (
        <section>
            <div>
                <
            </div>
            <article className="project-card">
                <h3>{projectTitle}</h3>
                {/* fra forelesningsnotater */}
                <p className="first-letter">{firstLetter}</p>
                <img src="https://placehold.co/100x100" alt="Placeholder" />
                <p> {projectDescription} </p>

                {/* <p> {duration.start.month} </p> */}
            </article>
            <article className="project-card">
                <h3>{projectTitle}</h3>
                <img src="https://placehold.co/100x100" alt="Placeholder" />
                <p> {projectDescription} </p>

                {/* <p> {duration.start.month} </p> */}
            </article>
            <article className="project-card">
                <h3>{projectTitle}</h3>
                <img src="https://placehold.co/100x100" alt="Placeholder" />
                <p> {projectDescription} </p>

                {/* <p> {duration.start.month} </p> */}
            </article>
            <article className="project-card">
                <h3>{projectTitle}</h3>
                <img src="https://placehold.co/100x100" alt="Placeholder" />
                <p> {projectDescription} </p>

                {/* <p> {duration.start.month} </p> */}
            </article>
        </section>

    )
}