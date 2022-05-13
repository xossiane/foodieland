import React from 'react'
import Facebook from '../../../public/assets/001-facebook.svg'
import Twitter from '../../../public/assets/003-twitter.svg'
import Instagram from '../../../public/assets/004-instagram.svg'

function index({social, scale=1}) {

    const styles = {
        transform: `scale(${scale})`
    }

    const getSocialMedia = () => {
        switch(social.toLowerCase()) {
            case 'facebook': return Facebook
            case 'twitter': return Twitter
            case 'instagram': return Instagram
        }
    }

    return (
        <a className='social--link' href={`#`}>
            <img style={styles} className='social--svg' src={getSocialMedia()} alt={`Logo do ${social.toLowerCase()}`} />
        </a>
    )
}

export default index