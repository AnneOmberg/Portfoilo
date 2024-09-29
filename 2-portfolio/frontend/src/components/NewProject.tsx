

export default function NewProject(){

    return(
        <aside className="project-submit-form">
            <h3>New Project</h3>

                <p>Project Name:</p>
                <input type="text" id="project-name" placeholder="Name of project..." />

                <p>Project Category:</p>
                <input type="text" id="project-category" placeholder="Eks. Graphic Design..." />

                <p>Project Summery:</p>
                <input type="text" id="project-summert" placeholder="Name of summery..." />

                <button >Submit</button>

        </aside>
    )
}