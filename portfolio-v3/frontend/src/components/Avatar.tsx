type AvatarProps = {
    employer: string
}
export default function Avatar(data: AvatarProps) {
    const { employer } = data
    const firstLetter = employer.split(" ").join("").toUpperCase().slice(0, 1)

    return <p className="avatar">{firstLetter}</p>
}