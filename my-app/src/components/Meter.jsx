import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Meter ({ percentage,text }){

    return(

        <div className="item w-48 h-48">

        <CircularProgressbar
          
          value={percentage}
          text={text}
          strokeWidth={13}
          styles={buildStyles({
            rotation: 0.25,
            strokeLinecap: "round",
            textSize: "12px",
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