import React, { ForwardedRef, RefObject, useRef } from 'react';
import NavMenu from './NavMenu';
import About from './About';
import "../styles/index.css"
import Header from './Header';
import Footer from './Footer';
import Experience from './Experience';
import Test from './Test';
import Projects from './Projects';
import createTheme from '@mui/material/styles/createTheme';
  
declare module "@mui/material/styles" {
    interface CommonColors {
      layout: {
        sage: string;
        gray: string;
      }
    }
}
  
  const colors = createTheme({
    palette: {
      common: {
        layout: {
          sage: "#BCB88A",
          gray: "#7D97BD",
        },
      },
    },
});

const App = () => {
    const aboutRef = useRef<HTMLDivElement>(null);
    const experienceRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);

    const executeScroll = ( refString: String ) => {
        if(refString === 'About') {
            aboutRef.current?.scrollIntoView({ 
                behavior: "smooth", 
                block: 'center',
            });
        } else if (refString === 'Experience') {
            experienceRef.current?.scrollIntoView({ 
                behavior: "smooth", 
                block: 'center',
            });        
        } else if (refString === 'Projects') {
            projectsRef.current?.scrollIntoView({ 
                behavior: "smooth", 
                block: 'center',
            });       
        }
    }
    
    return (
        // TODO: delete css-select from package
        <div className='flex h-screen'>
            <div className='flex flex-col justify-content-center gap-y-12 bg-dark text-light w-1/3 p-12 overflow-hidden'
            >
                <Header />
                <NavMenu executeScroll={executeScroll} />
                <Footer />
                <Test />
            </div>
            <div className='bg-light flex place-content-center w-2/3 text-dark overflow-scroll'>
                <div className='flex flex-col gap-24 w-3/4 my-12'>
                    <About ref={aboutRef} />
                    <Experience ref={experienceRef} />
                    <Projects ref={projectsRef} />
                </div>
            </div>
        </div>
    )
};

export default App;
