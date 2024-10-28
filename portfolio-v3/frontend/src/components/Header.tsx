type UserProps = {
    user: string
    degree: string
    educationPoints: number
}


export default function Header({ user, degree, educationPoints }: UserProps) {

    return (
        <header className="header">
            <div>
                <img src="https://placehold.co/100x100" alt="Placeholder" />
                <h1>Portfolio</h1>
            </div>

            <ul>
                <li id="name">{user}</li>
                <li> {degree} </li>
                <li> Credits: {educationPoints} </li>
            </ul>

        </header>
    )
}
