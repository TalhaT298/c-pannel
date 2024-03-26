import React from 'react';
import Marquee from 'react-fast-marquee';
import img1 from "../../../assets/react.svg"
import img2 from "../../../assets/vuejs.svg"
import img3 from "../../../assets/python.svg"
import img4 from "../../../assets/node-js.svg"
import img5 from "../../../assets/mongodb.svg"
import img6 from "../../../assets/javascript.svg"
import img7 from "../../../assets/java.svg"
import img8 from "../../../assets/go.svg"
import img9 from "../../../assets/flutter.svg"


const Technology = () => {
    return (
        <div>
             <Marquee className='my-5'>
        {/* //130*130 */}
        <img className='h-32 w-32' src={img1} alt="" style={{ marginRight: '20px' }}/>
        <img className='h-32 w-32' src={img2} alt="" style={{ marginRight: '20px' }}/>
        <img className='h-32 w-32' src={img3} alt="" style={{ marginRight: '20px' }}/>
        <img className='h-32 w-32' src={img4} alt=""  style={{ marginRight: '20px' }}/>
        <img className='h-32 w-32' src={img5} alt=""  style={{ marginRight: '20px' }}/>
        <img className='h-32 w-32' src={img6} alt=""  style={{ marginRight: '20px' }}/>
        <img className='h-32 w-32' src={img7} alt=""  style={{ marginRight: '20px' }}/>
        <img className='h-32 w-32' src={img8} alt=""  style={{ marginRight: '20px' }}/>
        <img className='h-32 w-32' src={img9} alt=""  style={{ marginRight: '20px' }}/>
        
    </Marquee>
        </div>
    );
};

export default Technology;