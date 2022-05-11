import React,{useRef} from 'react'
import Logo from '../../assets/Logo.svg'
import Instagram from '../../assets/004-instagram.svg'
import Facebook from '../../assets/001-facebook.svg'
import Twitter from '../../assets/003-twitter.svg'
import './Footer.css'

function Footer() {
    const teste = useRef()
    console.log(teste)

  return (
    <footer className='footer'>
        <div className='footer-container'>
            <img className='footer__logo' src={Logo}/>
            <p className='footer__text'>
            Lorem ipsum dolor sit amet,consectetuipisicing elit, 
            </p>
            <ul className='footer__list'>
                <li className='footer__list--item'><a className='footer__list--link' href="#">Recipes</a></li>
                <li className='footer__list--item'><a className='footer__list--link' href="#">Blog</a></li>
                <li className='footer__list--item'><a className='footer__list--link' href="#">Contact</a></li>
                <li className='footer__list--item'><a className='footer__list--link' href="#">About us</a></li>
            </ul>
            <span className='footer__copyright'>
                <span className='footer__copyright--text'>
                    &copy;2020 Flowbase. Powered by  
                </span>
                <a className='footer__copyright--link' href="#"> Webflow</a>
            </span>
            <div className='footer__social-container'>
                <a className='footer__social--link' href="#">
                    <img className='footer__social--svg' src={Facebook} alt="logo do facebook" />
                </a>
                <a className='footer__social--link' href="#">
                    <img className='footer__social--svg' src={Twitter} alt="logo do twitter" />
                </a>
                <a className='footer__social--link' href="#">
                    <img ref={teste}className='footer__social--svg' src={Instagram} alt="logo do instagram" />
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer