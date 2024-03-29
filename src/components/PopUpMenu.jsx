import {useContext} from "react";
import {JobsContext} from "../context/JobsContext.jsx";

export default function PopUpMenu() {
    const { setLocation, setFullTime } = useContext(JobsContext);

    const handleFullTime = () => {
        document.querySelector('.timeInputMobile').checked ? setFullTime('Full Time') : setFullTime('')
    }

    const handleMobileMenu = () => {
        document.querySelector('.popUpMenuContainer').classList.remove('active')
    }


    return (
        <>
            <div className="popUpMenuContainer">
                <div className="popUpMenu">
                    <select onChange={e => setLocation(e.target.value)} className="locationInputMobile">
                        <option value="">Filter by location…</option>
                        <option value="Germany">Germany</option>
                        <option value="Japan">Japan</option>
                        <option value="New Zealand">New Zealand</option>
                        <option value="Russia">Russia</option>
                        <option value="Singapore">Singapore</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="United States">United States</option>
                    </select>
                    <label onClick={handleFullTime} className='timeCheckInput timeCheckInputMobile'>
                        <input className='timeInput timeInputMobile' type="checkbox" name="fulltime"/>
                        <span className='fullTime'>Full Time <span className='only'>&nbsp;Only</span></span>
                    </label>
                    <button onClick={handleMobileMenu} className="filterBtnMobile">
                        <span>Search</span>
                    </button>
                </div>
            </div>
        </>
    )
}