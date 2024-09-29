import Footer from "./components/Footer"
import Header from "./components/Header"
import NewProject from "./components/NewProject"
import ProjectCard from "./components/ProjectCard"

function App() {

//   const user = "Anne May Omberg"
//   const degree = "Bachelor Digital Media Design"
//   const educationPoints = 220
//   const projectOne = {
//     title: 'Color Book Illustration',
//     description: 'Illustrated a childrens`s coloring book, including the fullcolor cover, using adobe illustartor.'
//   }
//   const projectTwo = {
// title: 'Graphic Design for Advertisement',
// description: 'Design of logo, buisness card and flyer for a start-up'
//   }

        const email = 'annenmayomberg@gmail.com'
  const schoolEmail = 'annemni@hiof.no'


  
    return(
      <>
      {/* <Header user={user} degree={degree} educationPoints={educationPoints} /> */}

      <main>
        {/* <ProjectCard projectOne={projectOne} projectTwo={projectTwo} /> */}
        <NewProject/>
      </main>
<Footer email={email} schoolEmail={schoolEmail} />
      
      </>
    )
}
export default App
