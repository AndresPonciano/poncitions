import React from 'react';
import NavMenu from './NavMenu';
import About from './About';
import "../styles/index.css"
import Header from './Header';
import Footer from './Footer';
import Experience from './Experience';

const App = () => {
    return (
        <div className='flex h-screen'>
            <div className='flex flex-col justify-content-center gap-y-12 bg-dark text-light w-1/3 p-12'>
                <Header />
                <NavMenu />
                <Footer />
            </div>
            <div className='flex place-content-center bg-green w-2/3 text-dark py-12'>
                <div className='bg-red w-3/4'>
                    <About />
                    <Experience />
                </div>
            </div>
        </div>
    )
};

export default App;
