import { useEffect, useState } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import NewProject from "./components/NewProject"
import ProjectCard from "./components/ProjectCard"
import { Project } from "./components/types"

const initialProject = [
  { id: "0", name: "Children's colorbook" },
  { id: "0", name: "Logo design" },
]
function App() {
  const [filter, setFilter] = useState("x")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const [projects, setProjects] = useState<Project[]>(initialProject ?? [])

  const filterProjects = projects.filter((project) => filter !== "-" ? project.title.toLowerCase().includes(filter) : true)


  //project oblig 2
  const [projectTitle, setProjectTitle] = useState<string>(
    "Colorbook Illustartion"
  )
  const [projectDescription, setProjectDescription] = useState<string>(
    "Illustrated a childrens`s coloring book, including the fullcolor cover, using adobe illustartor."
  )
  //Header variables
  const user = "Anne May Omberg"
  const degree = "Bachelor Digital Media Design"
  const educationPoints = 220
  const email = "annenmayomberg@gmail.com"
  const schoolEmail = "annemni@hiof.no"


  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true)

        const response = await fetch("")
        const data = await response.json()
        setProjects(data)
      } catch (error) {
        console.error(error)
        setError("feilet med å hente projects")
      } finally {
        setLoading(false)
      }
    }
    fetchProject()
  })

  const onfilterchange = (filter: string) => {
    setFilter(filter)
  }

  const onAddProject = (project: omit<Project, "id">) => {
    setProjects((prev) => [...prev, { id: crypto.randomUUID(), ...project }])
  }

  const onRemoveProject = (id: string) => {
    setProjects((prev) => prev.filter((project) => project.id !== id))
  }


  return (
    <>
      <Header user={user} degree={degree} educationPoints={educationPoints} />

      <main>
        <ProjectCard
          projectTitle={projectTitle}
          projectDescription={projectDescription}
        />
        <NewProject />
      </main>
      <Footer email={email} schoolEmail={schoolEmail} />
    </>
  )
}
export default App

// const projectTwo = {
//   title: 'Graphic Design for Advertisement',
//   description: 'Design of logo, buisness card and flyer for a start-up',
//   duration: {
//       start: {
//         month: 9,
//         year: 2021
//       },
//       end:{
//           month: 11,
//           year: 2021
//       }
//   }
// }
