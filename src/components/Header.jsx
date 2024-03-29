import FilterBar from "./FilterBar";
import { Link } from "react-router-dom";
import PopUpMenu from "./PopUpMenu.jsx";

export default function Header() {

    return (
        <div className="header">
            <div className="headerContent">
                <Link to={'/'}><h1>devjobs</h1></Link>
                <div className="lightDark">
                    <img src="/images/sun-icon.svg" alt='sun-icon'/>
                    <div onClick={() => document.body.classList.toggle("dark-theme")} className="themeBtn">
                        <span></span>
                    </div>
                    <img src="/images/moon-icon.svg" alt="moon-icon"/>
                </div>
            </div>
            <FilterBar/>
            <PopUpMenu />
        </div>
    )
}