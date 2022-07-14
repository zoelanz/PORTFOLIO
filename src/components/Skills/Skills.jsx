import { ImHtmlFive } from "react-icons/im";
import { SiCss3 } from "react-icons/si";
import { BsFillBootstrapFill } from "react-icons/bs";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiSass } from "react-icons/si";

import "./Skills.scss";

function Skills() {
  return (
    <div id="skills" className="wrapper">

      <div className="wrapper1">

      <div className="icon html">
       <div className="text">HTML</div>
        <span>
          <ImHtmlFive size={60} />
        </span>
      </div>
      
      <div className="icon css">
        <div className="text">CSS</div>
        <span>
             <SiCss3  size={60} />
        </span>
      </div>

      <div className="icon bootstrap">
        <div className="text">BOOTSTRAP</div>
        <span>
            <BsFillBootstrapFill size={60} />
        </span>
      </div>

      </div>

      <div  className="wrapper2">

      <div className="icon sass">
       <div className="text">SASS</div>
        <span>
             <SiSass size={60} />
        </span>
      </div>
      
      <div className="icon js">
        <div className="text">JAVASCRIPT</div>
        <span>
          <SiJavascript size={60} />
        </span>
      </div>

      <div className="icon react">
        <div className="text">REACT JS</div>
        <span>
           <SiReact size={60} />
        </span>
      </div>

      </div>

      

     

    </div>
    

 
  );
}

export default Skills;
