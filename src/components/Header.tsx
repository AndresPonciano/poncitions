import React from 'react';
const logo = require("../images/newtree.svg") as string;

const Header = () => {
    return (
        <header className='flex'>
            <img className='w-1/4 lg:w-1/3 border-2 p-1 rounded-full' src={require("../images/myface.png")}/>
            <h1 className='shrink text-center w-2/3 text-xl lg:text-4xl font-bold self-center md:self-start'>Andres Ponciano</h1>
        </header>
    )
    };
            
export default Header;