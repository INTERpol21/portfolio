import "./style.css";
import { NavLink } from "react-router-dom";
type projectProps = {
  id: number;
  title: string;
  skills: string;
  img: string;
  gitHubLink?: string;
  description?: string;
};

const Project = ({
  id,
  title,
  skills,
  img,

}: projectProps) => {
  return (
    <NavLink to={`/project/${id}`}>
      <li className="project">
        <h1 className="project__title">{title}</h1>
        <img src={img} alt={title} className="project__img" />

        <h2 className="project__title">{skills}</h2>
        {/* <h3 className="project__title">{description}</h3>
        <h4 className="">{gitHubLink}</h4> */}
      </li>
    </NavLink>
  );
};

export default Project;
