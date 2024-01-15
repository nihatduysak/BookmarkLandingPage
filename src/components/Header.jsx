export default function Header() {
    return (
        <>
            <div className="header">
                <div className="logo">
                    <a href="#">
                        <img src="/images/logo-bookmark.svg" alt="logo" />
                    </a>
                </div>
                <div className="nav">
                    <ul>
                        <li><a href="#features">FEATURES</a></li>
                        <li><a href="#pricing">PRICING</a></li>
                        <li><a href="#contact">CONTACT</a></li>
                        <div className="loginPages">
                            <li><a href="#" className="login">LOGIN</a></li>
                        </div>
                    </ul>
                    <label className="hamburger-menu" >
                        <input type="checkbox" name="hamburger-menu" />
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </label>
                </div>
            </div>
        </>
    )
}