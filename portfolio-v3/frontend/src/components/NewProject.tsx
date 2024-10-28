

export default function NewProject() {

    return (
        <aside className="project-submit-form">
            <h3>New Project</h3>
            <ul>
                <li>
                    <p>Project Name:</p>
                    <input type="text" id="project-name" placeholder="Name of project..." />
                </li>
                <li>
                    <p>Project Category:</p>
                    <input type="text" id="project-category" placeholder="Eks. Graphic Design..." />

                </li>
                <li>
                    <p>Project Summery:</p>
                    <input type="text" id="project-summert" placeholder="Name of summery..." />
                </li>
                {/* la til ekstra inputsfelt */}
                <li>
                    <p>Project Duration:</p>
                    <input type="text" id="project-summert" placeholder="Name of summery..." />
                </li>
                <li>
                    <p>Project Employer:</p>
                    <input type="text" id="project-summert" placeholder="Name of summery..." />
                </li>
                <li>
                    <button >Submit</button>
                </li>
            </ul>

        </aside>
    )
}