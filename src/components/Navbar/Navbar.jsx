import {React, useState} from 'react'
import Logo from '../../assets/Logo.svg'
import './Navbar.css'

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const toggleIsNavOpen = () => {
    setIsNavOpen(!isNavOpen)
    !isNavOpen ? document.body.classList.add('header-open') : document.body.classList.remove('header-open')
  }


  return (
    <>
    <header className='header'>
      <nav className='nav'>
        <div className='nav__logo-container'>
            <img className='nav__logo--img' src={Logo} alt='Foodieland Logo'/>
        </div>
        <button onClick={toggleIsNavOpen} className='nav__hamburguer--button'>
          <div className={`nav__hamburguer--icon ${isNavOpen ? 'nav__hamburguer--icon-open' : ''}`}></div>
        </button>
      </nav>
      <ul className={`nav__list ${isNavOpen ? 'nav__list-display--on' : ''}`}>
          <li className='nav__list--item'><a className='nav__list--link' href="#">Home</a></li>
          <li className='nav__list--item'><a className='nav__list--link' href="#">Recipes</a></li>
          <li className='nav__list--item'><a className='nav__list--link' href="#">Blog</a></li>
          <li className='nav__list--item'><a className='nav__list--link' href="#">About us</a></li>
          <li className='nav__list--item'><a className='nav__list--link' href="#">Contact</a></li>
      </ul>
      
    </header>
    <div className='nav--margin-top'></div>
    </>
  )
}

export default Navbar