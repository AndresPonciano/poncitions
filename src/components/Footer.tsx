import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithubAlt, faLinkedin } from '@fortawesome/free-brands-svg-icons'
interface Props {
   img: IconProp;
}


const Footer = () => {
    return (
        <div className='mt-auto'>
            <nav className='flex gap-x-3 list-none'>
                <li>
                    <FontAwesomeIcon icon={faLinkedin as IconProp} />
                </li>
                <li>
                    <FontAwesomeIcon icon={faGithubAlt as IconProp} />
                </li>
                <li>
                    <FontAwesomeIcon icon={faEnvelope as IconProp} />
                </li>
                <li>
                </li>
            </nav>
        </div>
    )
    };
            
export default Footer;