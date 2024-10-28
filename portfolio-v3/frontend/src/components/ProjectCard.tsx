import { useState } from "react"

export default function ProjectCard(
    props: ProjectProps & { onRemoveProject: (id: string) => void }
) {

    const [showRemove, setShowRemove] = useState(false)
    const { id, employer, onRemoveProject } = props

    const updateShowState = () => {
        setShowRemove(true)
    }


    return (
        <article onMouseOver={updateShowState} onMouseLeave={() => setShowRemove(false)}>
            <h2>Project Title</h2>
            <p className="project-employer">{employer}</p>
            {showRemove ? (
                <button type="button" onClick={() => onRemoveProject(id)}>X</button>
            ) : null}


        </article>
    )
}