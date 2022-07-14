import ContainerWorks from "../ContainerWorks/ContainerWorks";
import WorkCard from "../WorkCard/WorkCard";
import "./Works.scss";

function Works() {
  return (
    <div id="work" className="containerWorks">
      <ContainerWorks>
        <WorkCard />
      </ContainerWorks>
    </div>
  );
}

export default Works;
