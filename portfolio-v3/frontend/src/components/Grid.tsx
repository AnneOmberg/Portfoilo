import { PropsWithChildren } from "react"
import ProjectCard from "./ProjectCard"

type GripProps = {
    projects: ProjectProps[]

    onRemoveProject: (id: string) => void
}

export default function Grid(props: PropsWithChildren<GripProps>) {
    const { projects, onRemoveProject, children } = props

    return (
        <section>
            <article className="grid">
                {projects.map((project) => (
                    <ProjectCard key={project.id} id={project.id} employer={project.employer} onRemoveProject={onRemoveProject} />
                ))}
            </article>
            {children}
        </section>
    )
}