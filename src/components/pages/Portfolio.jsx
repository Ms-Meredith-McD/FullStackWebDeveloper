import projectData from "../../projects.json";

function generateDeployedURL(
    deploymentMethod,
    deployedName,
    gitHubUser = "Ms-Meredith-McD"
) {
    let deployedURL;
    if (deploymentMethod === "gitHub") {
        deployedURL = `https://${gitHubUser}.github.io/${deployedName}`;
    } else if (deploymentMethod === "heroku") {
        deployedURL = `https://${deployedName}.herokuapp.com`;
    }
    return deployedURL;
}

function generateRepositoryURL(gitHubName, gitHubUser = "Ms-Meredith-McD") {
    return `https://github.com/${gitHubUser}/${gitHubName}`;
}

export default function Project() {
    return (
        <div className="mb-4 pt-5">
            <div className="row row-cols-1 row-cols-md-2 g-4 pt-5">
                {projectData.map((project) => (
                    <div className="col" key={project.title}>
    <div className="card h-100">
        {/* Use the project.image directly */}
        <img src={project.image} className="card-img-top" alt="Project Screenshot" />
        <h5 className="row m-3"> { project.techstack } </h5>
        <div className="card-body" id={project.id}>
            <h5 className="card-title">{project.title}</h5>
            <div className="card-body">
                <a
                    href={generateDeployedURL(
                        project.deploymentMethod,
                        project.deployedName,
                        project?.gitHubUser
                    )}
                    className="card-link"
                    target="_blank"
                >
                    Deployed App
                </a>
                <a
                    href={generateRepositoryURL(
                        project.gitHubName,
                        project.gitHubUser
                    )}
                    className="card-link"
                    target="_blank"
                >
                    GitHub Repository
                </a>
            </div>
        </div>
    </div>
</div>
                ))}
            </div>
            </div>
    );
}