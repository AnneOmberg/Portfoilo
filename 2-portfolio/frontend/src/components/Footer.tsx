
type ContactProps = {
    email: string
    schoolEmail: string
}

export default function Footer({email, schoolEmail}: ContactProps){

    return(
      <footer className="footer">
        <ul>
          <li> {email} </li>
          <li> {schoolEmail} </li>
        </ul>
      </footer>
    )
}