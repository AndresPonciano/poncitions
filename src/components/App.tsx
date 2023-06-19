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
import More from './More';
import OtherFooter from './OtherFooter';
  
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
    const moreRef = useRef<HTMLDivElement>(null);

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
        } else if (refString === 'More') {
            moreRef.current?.scrollIntoView({ 
                behavior: "smooth", 
                block: 'center',
            });       
        }
    }
    
    return (
        // TODO: delete css-select from package
        <div className='flex flex-col md:flex-row md:h-screen'>
            <div className='z-10 flex flex-col fixed h-1/3 md:h-full md:static justify-content-center gap-y-4 md:gap-y-12 bg-dark text-light md:w-1/3 p-12 overflow-hidden'
            >
                <Header />
                <NavMenu executeScroll={executeScroll} />
                <Footer />
                <Test />
            </div>
            <div className='flex flex-row justify-center bg-light mt-[15rem] md:mt-0 md:h-full md:w-2/3 text-dark overflow-scroll'>
                <div className='flex flex-col justify-content-center gap-24 w-3/4 mt-24 md:mt-12'>
                    <About ref={aboutRef} />
                    <Experience ref={experienceRef} />
                    <Projects ref={projectsRef} />
                    <More ref={moreRef} />
                    <OtherFooter />
                </div>
            </div>
        </div>
    )
};

export default App;
