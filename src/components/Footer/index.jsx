import React from 'react'
import Logo from '../../../public/assets/Logo.svg'
import './Footer.css'
import Social from '../Social'

function Footer() {

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
                <Social social={'Facebook'} scale= {2} />
                <Social social= {'twitter'} scale= {2} />
                <Social social= {'Instagram'} scale={2} />
            </div>
        </div>
    </footer>
  )
}

export default Footer