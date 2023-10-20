import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'


const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    console.log(reviews)
    return (
        <div>
            <SectionTitle
                subHeading="What our client says"
                heading="Testimonials"
            ></SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {reviews.map(review => <SwiperSlide
                    key={review._id}
                >

                    <div className="flex flex-col items-center mb-24">
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={review.rating}
                            readOnly
                        />

                        <div className="text-white py-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="100px"
                                viewBox="0 0 448 512"
                                style={{ fill: 'white' }} // Change the fill color here
                            >
                                <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
                            </svg>
                        </div>

                        <p className="px-20 pb-4 text-center">
                            {review.details}
                        </p>
                        <h3 className="text-yellow-500 text-2xl">{review.name}</h3>
                    </div>
                </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testimonials;