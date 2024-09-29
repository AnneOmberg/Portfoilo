import { useState } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import NewProject from "./components/NewProject"
import ProjectCard from "./components/ProjectCard"

function App() {

  const user = "Anne May Omberg"
  const degree = "Bachelor Digital Media Design"
  const educationPoints = 220

  const [projectTitle, setProjectTitle]= useState<string>('Colorbook Illustartion')
  const [projectDescription, setProjectDescription] = useState<string>('Illustrated a childrens`s coloring book, including the fullcolor cover, using adobe illustartor.')
    
  const email = 'annenmayomberg@gmail.com'
  const schoolEmail = 'annemni@hiof.no'

    return(
      <>
      <Header user={user} degree={degree} educationPoints={educationPoints} />

      <main>
        <ProjectCard projectTitle={projectTitle} projectDescription={projectDescription} />
        <NewProject/>
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