import '../css/Job.scss'
import ClockIcon from "../assets/clock-icon.png";
import WorldIcon from "../assets/world-icon.png";

const Job = (props) => {

    return(
        <div className="main">
            <div className="left-container">
                <img className="img-container" src={props.img} alt="company-logo"/>
                <div className="desc-container">
                    <p className="company-name">{props.company}</p>
                    <p className="job-position">{props.title}</p> 
                    {props.type === 'Full Time' && 
                        <div className="fulltime-container">
                            <p className="full-time-text">Full time</p>
                        </div>
                    }
                </div>
                <div className="location-container">
                    <div className="loc-date">
                        <img id="clock-icon" src={WorldIcon} alt="icon" />
                        <p className="right-text"> {props.location} </p>
                    </div>
                    <div className="loc-date">
                        <img id="clock-icon" src={ClockIcon} alt="icon" />
                        <p className="right-text"> {props.date} </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Job;