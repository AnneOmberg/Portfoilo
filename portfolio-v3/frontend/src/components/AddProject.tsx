import React, { useState } from "react"

type AddProjectFromProps = {
    onAddProject: ({ employer }: { employer: string }) => void
}

export default function AddProject(props: AddProjectFromProps) {
    const { onAddProject } = props
    const [employer, setEmployer] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!employer) return
        onAddProject({ employer })
        setEmployer("")
    }

    return (
        <aside>
            <form onSubmit={handleSubmit} className="add-project">
                <label htmlFor="employer">Oppdragsgiver</label>
                <input type="text" id="employer" placeholder="Navn til oppdragsgiver" value={employer} onChange={(e) => setEmployer(e.target.value)} />
                <button type="submit">Legg til prosjekt</button>
            </form>
        </aside>
    )
}