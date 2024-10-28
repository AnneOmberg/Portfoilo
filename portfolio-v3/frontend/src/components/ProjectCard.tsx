import { useState } from "react"
import { Project } from "./types"

export default function ProjectCard(
    props: Project & { onRemoveProject: (id: string) => void }
) {

    const [showRemove, setShowRemove] = useState(false)
    const { id, employer, description, employStart, employEnd, onRemoveProject
    } = props



    const updateShowState = () => {
        setShowRemove(true)
    }


    return (
        <article onMouseOver={updateShowState} onMouseLeave={() => setShowRemove(false)}>
            <h2>Project Title</h2>
            <p className="project-employer">{employer}</p>
            <p>{description}</p>
            {showRemove ? (
                <button type="button" onClick={() => onRemoveProject(id)}>X</button>
            ) : null}
            <span>{employStart} - {employEnd}</span>


        </article>
    )
}