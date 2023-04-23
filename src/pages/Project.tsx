import { useParams } from "react-router-dom";
import BtnGitHub from "../component/btnGitHub/BtnGitHub";
import { projects } from './../helpers/projectList';

const Project = () => {

  const { id } = useParams() as {id:any};
  const project = projects[id] 
  
  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>

          <img
            src={project.img}
            alt={project.title}
            className="project-details__cover"
          />

          <div className="project-details__desc">
            <p>{project.skills}</p>
          </div>
          <div className="project-details__desc">
            <p>{project.description}</p>
          </div>

          <BtnGitHub link={project.gitHubLink} />
        </div>
      </div>
    </main>
  );
};

export default Project;
