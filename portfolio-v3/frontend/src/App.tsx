import { useEffect, useState } from "react"
import ProjectCard from "./components/ProjectCard"
import Filter from "./components/Filter"
import AddProject from "./components/AddProject"
import Avatar from "./components/Avatar"
import Grid from "./components/Grid"


const initialProjects = [
  { id: "0", employer: "Profilforum" },
  { id: "1", employer: "Relieff" }
]

function App() {
  const [filter, setFilter] = useState("x")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const [projects, setProjects] = useState<Project[]>(initialProjects ?? [])

  const filteredProjects = projects.filter((project) => filter !== "x" ? project.employer.loLowerCase().includes(filter) : true)


  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true)

        const response = await fetch("")
        const data = await response.json()
        setProjects(data)
      } catch (error) {
        console.error(error)
        setError("Feilet med henting av projects")
        console.log("error feilet")
      } finally {
        setLoading(false)
      }
    }
    fetchProjects()
  }, [])

  //  ? Filtrerer slik at kun en bestemt arbeidsagiver kommer opp

  const options = array.form(
    projects.reduce((acc, project: Project) => {
      const employer = project.employer.trim().split(" ")[0]
      if (acc.has(employer))
        return acc

      return acc.set(employer, {
        ...project,
        value: employer.toLowerCase(),
        label: employer
      })
    }, new Map())
      .values()
  )

  const onFilterChange = (filter: string) => {
    setFilter(filter)
  }

  const onAddProject = (project: Omit<Project, "id">) => {
    setProjects((prev) => [...prev, { id: crypto.randomUUID(), ...project }])
  }

  const onRemoveProject = (id: string) => {
    setProjects((prev) => prev.filter((project) => project.id !== id))
  }

  return (
    <main>
      <h1>Anne prøver igjen</h1>
      <Filter filter={filter} onFilterChange={onFilterChange} options={Object.values(options)} />
      <Grid projects={filteredProjects} onRemoveProject={onRemoveProject} >
        <AddProject onAddProject={onAddProject} />
      </Grid>
    </main>
  )
}

export default App