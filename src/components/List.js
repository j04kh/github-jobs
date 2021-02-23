import '../css/App.scss';
import Job from './Job'
import { Link } from 'react-router-dom';

const List = (props) => {

    const jobsList = props.list.slice(0, 5);

    const listJobsItems = jobsList.map((job) => {
        const dateF = job.created_at.slice(4,10) + ' ' + job.created_at.slice(24,28);
        return(
        <Link to={`/job/${job.id}`}>
            <Job key={job.id} 
                company={job.company} 
                title={job.title} 
                location={job.location}
                img={job.company_logo}
                type={job.type}
                date={dateF} />
        </Link>
        );
    });

    return(
        <div className="list-jobs">
            {listJobsItems}
        </div>
    );
};


export default List;