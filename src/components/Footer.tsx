import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithubAlt, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
    return (
        <div className='mt-auto'>
            <h1 className='hidden md:block mb-2 text-md italic'>Contact me!</h1>
            <nav className='flex gap-x-6 list-none'>
                <li className='hover:text-sage'>
                    <a href='https://www.linkedin.com/in/andresponciano/' target='_blank'>
                        <FontAwesomeIcon className='h-5' icon={faLinkedin as IconProp} />
                    </a>
                </li>
                <li className='hover:text-sage'>
                    <a href='https://github.com/AndresPonciano' target='_blank'>
                        <FontAwesomeIcon className='h-5' icon={faGithubAlt as IconProp} />
                    </a>
                </li>
                <li className='hover:text-sage'>
                    <a href='mailto:andres.ponciano123@gmail.com'>
                        <FontAwesomeIcon className='h-5' icon={faEnvelope as IconProp} />
                    </a>
                </li>
                <li>
                </li>
            </nav>
        </div>
    )
    };
            
export default Footer;