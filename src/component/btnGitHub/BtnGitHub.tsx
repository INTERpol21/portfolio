import "./style.module.scss"
import icon from "./gitHub-black.svg";

const BtnGitHub = (props: { link: string; }) => {
    return (
      <a
        href={props.link}
        target="_blank"
        rel="noreferrer"
        className="btn-outline"
      >
        <img src={icon} alt="" />
        GitHub repo
      </a>
    );
}
 
export default BtnGitHub;