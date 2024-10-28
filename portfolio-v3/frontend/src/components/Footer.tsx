
type ContactProps = {
    email: string
    schoolEmail: string
}

export default function Footer({ email, schoolEmail }: ContactProps) {
    // const email = 'annenmayomberg@gmail.com'
    // const schoolEmail = 'annemni@hiof.no'
    console.log(email)
    return (
        <footer className="footer">
            <ul>
                <li> {email} </li>
                <li> {schoolEmail}</li>
            </ul>
        </footer>
    )
}