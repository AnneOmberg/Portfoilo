import { PropsWithChildren } from "react"
import ProjectCard from "./ProjectCard"
import { Project } from "./types"

type GripProps = {
    projects: Project[]

    onRemoveProject: (id: string) => void
}

export default function Grid(props: PropsWithChildren<GripProps>) {
    const { projects, onRemoveProject, children } = props

    return (
        <section>
            <article className="grid">
                {projects.map((project) => (
                    <ProjectCard key={project.id} id={project.id} employer={project.employer} description={project.description} onRemoveProject={onRemoveProject} />
                ))}
            </article>
            {children}
        </section>
    )
}