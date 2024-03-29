import { Link } from 'react-router-dom';
import data from '/data.json';
import {useContext} from "react";
import {JobsContext} from "../context/JobsContext.jsx";

export default function Jobs() {

    const { filter, setFilter, location, setLocation, fullTime, setFullTime, jobLimit, setJobLimit } = useContext(JobsContext);

    let filteredData = data.filter((job) => (
        job.position.toLowerCase().includes(filter.toLowerCase()) &&
        job.location.toLowerCase().includes(location.toLowerCase()) &&
        job.contract.toLowerCase().includes(fullTime.toLowerCase())

    ))

    const handleReset = () => {
        setJobLimit(9)
        setFilter('')
        setLocation('')
        setFullTime('')
    }

    return (
        <>
            <div className="jobAdvertisement">
                {
                    filteredData.slice(0, jobLimit).map((job) => (
                        <Link to={`/jobs/${job.id}`} key={job.id}  onClick={handleReset}>
                            <div className="advertisement">
                                <div className="logo" style={{backgroundColor: job.logoBackground}}>
                                    <img src={job.logo} />
                                </div>
                                <p>{job.postedAt} . {job.contract}</p>
                                <h2>{job.position}</h2>   
                                <p>{job.company}</p>
                                <h4>{job.location}</h4>
                            </div>
                        </Link>
                    ))
                }
            </div>

            { jobLimit >= filteredData.length ? '' :
                <button onClick={e => setJobLimit(jobLimit + 3)} className='loadMoreBtn'><p>Load More</p></button>
            }
        </>
    )
}