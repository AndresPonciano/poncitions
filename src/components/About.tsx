import React, { forwardRef } from 'react';


const About = forwardRef<HTMLDivElement>(({ }, ref) => {
    return (
        <div ref={ref} className='flex flex-col'>
            <h1 className='text-2xl font-bold'>Hello World!</h1>
            <div className='border '/>
            <p className='my-2'>
                My name's Andres Ponciano and I'm a 2x alumni from Florida State University with a Bachelor's and Master's in Computer Science. 
                I enjoy solving problems, writing neat and functional code, and creating things that are pleasant to the eye.
            </p>

            <img className='self-center w-1/2 h-1/2 p-1' src={require("../images/nothing_yet.png")}/>
        </div>
    )
});

export default About;
