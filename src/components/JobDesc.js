import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/App.scss';
import '../css/JobDesc.css';
import ClockIcon from "../assets/clock-icon.png";
import WorldIcon from "../assets/world-icon.png";

const JobDesc = ({match}) => {

	const jobId = match.params.id;

	const proxyUrl = 'https://thingproxy.freeboard.io/fetch/';
	const targetUrl = `https://jobs.github.com/positions/${jobId}.json?markdown=true`;

	const [job, setJob] = useState({});

	const getDatos = () => {
		fetch(proxyUrl + targetUrl)
			.then(response => response.json())
			.then(data => {
				const newJob = {
					how_to_apply: data.how_to_apply,
					position: data.title,
					description: data.description,
					company: data.company,
					location: data.location,
					logo: data.company_logo,
					type: data.type,
					date: data.created_at
				}
				setJob(newJob);
			});
	}

	useEffect(()=> getDatos() , []);  // eslint-disable-line react-hooks/exhaustive-deps

	return(
			<div className="App">
				<h1 className="title">Github <span className="title-light">Jobs</span></h1>

				<div className="main-container">
					<div className="container-left-jobDesc">
					<Link to={`/`}>
						<p className="text_left">Back to search</p>
					</Link>
						<p className="text_apply">HOW TO APPLY</p>
						<p className="text_apply desc">{job && job.how_to_apply} </p>
					</div>

					<div className="container-right">
						<div className="row_top">
							<p className="position">{job && job.position}</p>
							{job.type === 'Full Time' && <div className="fulltime">
                				<p className="full-time">Full time</p>
              				</div>}
						</div>
						<div className="row">
							<img id="small-icon" src={ClockIcon} alt="icon" />
							<p className="small text"> {job && job.date} </p>
						</div>
						<div className="row_margin_top">
							<img className="company-icon" src={job.logo} alt="logo"/>
							<div className="col">
								<p className="company-name">{job && job.company}</p>
								<div className="row">
									<img id="small-icon" src={WorldIcon} alt="icon" />
									<p className="small text"> {job && job.location} </p>
								</div>
							</div>
						</div>
					<p className="text">{job && job.description}</p>
					</div>
				</div>
			</div>
	);
}

export default JobDesc;