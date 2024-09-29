type UserProps ={
    user: string
    degree: string
    educationPoints: number
}


export default function Header({user, degree, educationPoints}: UserProps){

    return(
        <header className="header">
            <div className="static-elements">
            <img src="https://placehold.co/50x50" alt="Placeholder" />
            <h1>Portfolio</h1>
            <h2 id="name">{user}</h2>       
            </div>
            <p> <strong> {educationPoints} </strong> {degree} </p> 
        </header>
    )
}
