import './index.css'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

function App() {

  function handleClick() {
    document.querySelector('.hamburger-menu input[name="hamburger-menu"]').checked = false;
  }

  return (
    <>
        <div className="container">
            <Header />
            <Content />
        </div>
        <Footer />
        <div className='mobile-menu'>
            <ul onClick={handleClick}>
                <li><a href="#">Home</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#contact">Contact</a></li>
                <div className="mobileLoginBtn">
                  <li><a href="#">Login</a></li>
                </div>
            </ul>
        </div>
    </>
  )
}

export default App
