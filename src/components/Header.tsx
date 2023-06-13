import React from 'react';


const Header = () => {
    return (
        <header className='flex'>
            <img className='w-1/3 border-2 p-1 rounded-full' src={require("../images/myface.png")}/>
            <h1 className='text-center w-2/3 text-4xl font-bold self-end'>Andres Ponciano</h1>
        </header>
    )
    };
            
export default Header;