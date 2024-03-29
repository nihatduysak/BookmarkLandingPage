import {createContext, useState} from "react";

export const JobsContext = createContext(null);


export function JobsProvider({ children }) {

    const [jobLimit, setJobLimit] = useState(9)
    const [filter, setFilter] = useState('')
    const [location, setLocation] = useState('')
    const [fullTime, setFullTime] = useState('')



    return (
        <JobsContext.Provider value={{ jobLimit, setJobLimit, filter, setFilter, location, setLocation, fullTime, setFullTime}}>
            {children}
        </JobsContext.Provider>
    );
}