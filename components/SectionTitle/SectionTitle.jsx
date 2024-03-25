import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='mx-auto md:w-8/12 my-4 flex justify-center items-center'>
           <p className='text-yellow-600'>----{subHeading}---</p>
           <h3 className='text-4xl uppercase  pt-4 font-bold font-serif'>{heading}</h3> 
            
        </div>

    );
};

export default SectionTitle;