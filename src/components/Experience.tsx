import { Chip } from '@mui/material';
import React, { forwardRef } from 'react';


const Experience = forwardRef<HTMLDivElement>(({}, ref) => {
    return (
        <div ref={ref} className='flex flex-col'>
            <h1 className='text-2xl font-bold'>Experience</h1>
            {/* <div className='border'/> */}

            <div className='grid grid-cols-1 md:grid-cols-2 gap-3 my-2'>

                <div className='flex flex-col items-center p-4 border rounded'>
                    <h1 className='m-2'>AWS Storage Gateway</h1>

                    <img className='w-1/4 rounded' src={require("../images/awsstoragegateway.png")}/>

                    <div className='grid grid-cols-3 mt-4 mx-4 gap-3'>
                        <Chip label="#React" variant="outlined" />
                        <Chip label="#Typescript" variant="outlined" />
                        <Chip label="#Javascript" variant="outlined" />
                        <Chip label="#Testing" variant="outlined" />
                        <Chip label="#Testing" variant="outlined" />
                    </div>
                </div>

                <div className='flex flex-col items-center p-4 border rounded'>
                    <h1 className='m-2'>AWS Storage Gateway</h1>

                    <img className='w-1/4 rounded' src={require("../images/awsstoragegateway.png")}/>

                    <div className='grid grid-cols-3 mt-4 mx-4 gap-3'>
                        <Chip label="#React" variant="outlined" />
                        <Chip label="#Typescript" variant="outlined" />
                        <Chip label="#Javascript" variant="outlined" />
                        <Chip label="#Testing" variant="outlined" />
                        <Chip label="#Testing" variant="outlined" />
                    </div>
                </div>

                <div className='flex flex-col items-center p-4 border rounded'>
                    <h1 className='m-2'>AWS Storage Gateway</h1>

                    <img className='w-1/4 rounded' src={require("../images/awsstoragegateway.png")}/>

                    <div className='grid grid-cols-3 mt-4 mx-4 gap-3'>
                        <Chip label="#React" variant="outlined" />
                        <Chip label="#Typescript" variant="outlined" />
                        <Chip label="#Javascript" variant="outlined" />
                        <Chip label="#Testing" variant="outlined" />
                        <Chip label="#Testing" variant="outlined" />
                    </div>
                </div>

            </div>
        </div>
    )
});

export default Experience;