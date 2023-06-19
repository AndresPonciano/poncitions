import React, { forwardRef } from 'react';


const About = forwardRef<HTMLDivElement>(({ }, ref) => {
    return (
        <div ref={ref} className='flex flex-col'>
            <h1 className='text-2xl font-bold'>Hello World!</h1>
            {/* <div className='border '/> */}
            <p className='mt-2 mb-4'>
                My name's Andres Ponciano and I'm a 2x alumni from Florida State University with a Bachelor's and Master's in Computer Science. 
                I enjoy solving problems, writing neat and functional code, and creating things that are pleasant to the eye.
            </p>

            <div>
            <div className='flex flex-col items-center'>
                <div className='md:w-3/4'>
                    <img className='mt-auto w-full' src={require("../images/me_landscape.jpeg")}/>
                    <p className='italic'>drawing: me</p>
                </div>
            </div>
            </div>
        </div>
    )
});

export default About;
