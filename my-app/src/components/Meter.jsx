import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Meter ({ percentage,text }){

    return(

        <div className="item">

        <CircularProgressbar
          
          value={percentage}
          text={text}
          styles={buildStyles({
            rotation: 0.25,
            strokeLinecap: "butt",
            textSize: "18px",
           
            pathColor: "url(#gradient)",
            textColor: "#fff",
           
            
            
          })}
        />
          <svg width="0" height="0">
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="0%" stopColor="#55c08c" />
            <stop offset="100%" stopColor="#2c5364" />
          </linearGradient>
        </defs>
      </svg>
      </div>

    );

}

export default Meter;