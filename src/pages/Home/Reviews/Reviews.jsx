import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './reviews.css';
import { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('/reviews.json')
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);

    return (
        <div className='mt-10 mb-20 ' >
            <div className="mx-auto md:w-8/12 my-4 flex justify-center items-center ">
        {/* <p className='text-yellow-600'>----{subHeading}---</p> */}
        <h3 className="text-4xl text-white uppercase  pt-4 font-bold font-serif">
        What Our Client Say
        </h3>
      </div>
      {/* <div className="h-1 w-[800px] bg-white rounded flex justify-center items-center mx-auto my-auto"></div> */}
      {/* <div class="h-1 w-80 bg-white rounded flex justify-center items-center mx-auto my-auto animate-ping"></div> */}
      {/* w-[600px] */}
      <div class="h-1 w-80 bg-white rounded flex justify-center items-center mx-auto my-auto hover:animate-ping"></div>
            <AwesomeSlider className='custom-slider' >
                {reviews.map((userReview) => (
                    <div key={userReview.id} className='review-slide' style={{ backgroundColor: 'black' }}>
                        <ReviewCard userReview={userReview} />
                    </div>
                ))}
            </AwesomeSlider>
        </div>
    );
};

export default Reviews;