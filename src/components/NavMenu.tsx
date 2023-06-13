import React from 'react';


const NavMenu = () => {
    return (
            <div className=''>
                <nav className='list-none flex flex-col gap-y-3 text-xl'>
                    {/* TODO: turn this into a map */}
                    <li className='font-bold text-gray'>
                        About
                    </li>
                    <li>
                        Experience
                    </li>
                    <li>
                        Education
                    </li>
                    <li>
                        Skills
                    </li>
                    <li>
                        Resume
                    </li>
                    <li>
                        More
                    </li>
                </nav>
            </div>
    )
};

export default NavMenu;
