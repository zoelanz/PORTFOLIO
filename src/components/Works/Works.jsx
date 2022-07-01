import ContainerWorks from "../ContainerWorks/ContainerWorks";
import WorkCard from "../WorkCard/WorkCard";
import "./Works.scss";

function Works() {
  return (
    <div className="containerWorks">
      
      <ContainerWorks>
        <WorkCard />
        <WorkCard />
      </ContainerWorks>

      <ContainerWorks>
        <WorkCard />
        <WorkCard />
      </ContainerWorks>

    </div>
  );
}

export default Works;
