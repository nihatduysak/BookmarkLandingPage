import {useContext} from "react";
import {JobsContext} from "../context/JobsContext.jsx";

export default function FilterBar() {

    const { setFilter, setLocation, setFullTime } = useContext(JobsContext);

    const handleFullTime = () => {
        document.querySelector('.timeInput').checked ? setFullTime('Full Time') : setFullTime('')
    }

    const handleMobileMenu = () => {
        document.querySelector('.popUpMenuContainer').classList.add('active')
    }


    return (

        <div className="filterBar">
            <input onChange={e => setFilter(e.target.value)} className='searchInput' type="text" name='location' placeholder='Filter by title..'/>
            <select onChange={e => setLocation(e.target.value)} className="locationInput">
                <option value="">Filter by location…</option>
                <option value="Germany">Germany</option>
                <option value="Japan">Japan</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Russia">Russia</option>
                <option value="Singapore">Singapore</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
            </select>
            <label onClick={handleFullTime} className='timeCheckInput'>
                <input className='timeInput' type="checkbox" name="fulltime"/>
                <span className='fullTime'>Full Time <span className='only'>&nbsp;Only</span></span>
            </label>
            <button onClick={handleMobileMenu} className='mobileMenuBtn'></button>
            <button className="filterBtn">
                <span>Search</span>
            </button>
        </div>


    )
}