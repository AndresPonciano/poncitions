import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithubAlt, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
    return (
        <div className='mt-auto'>
            <h1 className='mb-2 text-md italic'>Contact me!</h1>
            <nav className='flex gap-x-6 list-none'>
                <li className='hover:text-sage' onClick={() => console.log("LINKEDIN!!!!")}>
                    <FontAwesomeIcon className='h-5' icon={faLinkedin as IconProp} />
                </li>
                <li className='hover:text-sage'>
                    <FontAwesomeIcon className='h-5' icon={faGithubAlt as IconProp} />
                </li>
                <li className='hover:text-sage'>
                    <FontAwesomeIcon className='h-5' icon={faEnvelope as IconProp} />
                </li>
                <li>
                </li>
            </nav>
        </div>
    )
    };
            
export default Footer;