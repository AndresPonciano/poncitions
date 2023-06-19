import React, { forwardRef} from 'react';


const More = forwardRef<HTMLDivElement>(({ }, ref) => {
    return (
        <div ref={ref} className='flex flex-col'>
            <div>
                <h1 className='text-2xl font-bold'>Certifications</h1>

                <div className='mt-2 flex'>
                    <img className='h-24 w-auto p-1' src={require("../images/aws-certified-cloud-practitioner.png")}/>

                    <div className='self-center'>
                        <h1 className=''>AWS Certified Cloud Practicioner - Foundational</h1>

                        <p className='italic'>
                            credentials: <a className='underline text-gray' href='https://www.credly.com/badges/26be9ca4-49c3-4118-a7d9-46358aa92be6/linked_in_profile' target='_blank'>link</a>
                        </p>
                    </div>
                </div>
            </div>


        </div>
    )
});

export default More;