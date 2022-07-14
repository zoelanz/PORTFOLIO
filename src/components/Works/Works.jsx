import WorkCard from "../WorkCard/WorkCard";
import "./Works.scss";

function Works() {
  return (
    <div id="work" className="containerWorks">   
        <WorkCard pageClass="florenciaScannapieco" link="https://zoelanz.github.io/DesarrolloWeb/" />
        <WorkCard pageClass="zetaele" link="https://zetaele-art-books.netlify.app/" />
        <WorkCard pageClass="enterMining" link="https://valenniglesias.github.io/EnterMining/" />
        <WorkCard pageClass="mercedesLlanos" link="https://mercedesllanos.com/" />
    </div>
  );
}

export default Works;
