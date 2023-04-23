import {projects} from "./../helpers/projectList"
import Project from '../project/Project';

const Projects = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {projects.map((project, index) => {
            return (
              <Project
                key={project.id}
                id={index}
                title={project.title}
                skills={project.skills}
                img={project.img}
                gitHubLink={project.gitHubLink}
                description={project.description}
              />
            )
          })}
        </ul>
      </div>
    </main>
  )
};

export default Projects;
