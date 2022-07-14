import React from "react";
import "./WorkCard.scss";

function WorkCard({pageClass,link}) {
  return (
    <>
 
        <div className={`work ${pageClass}`}>
          <a href={link} className="buttonSite">Visit Web Site</a>
        </div>

    </>
  );
}

export default WorkCard;
