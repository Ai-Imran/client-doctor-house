import { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Navigation } from "swiper/modules";

const PtCarousel = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <div className="my-20 flex px-20 items-center text-justify">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {review.map((rev) => (
          <SwiperSlide key={rev._id}>
            <div className="mx-16 ">
              <div className="flex">
                <div className="avatar border-lime-500 ml-4">
                  <div className="w-24  rounded-full">
                    <img className="border-lime-500" src={rev.image} />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold">{rev.name}</h3>
                  <p>{rev.profession}</p>
                </div>
              </div>
              <p className="w-[500px]">{rev.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {review.map((rev) => (
          <SwiperSlide key={rev._id}>
            <div className="mx-16">
              <div className="flex">
                <div className="avatar ml-4">
                  <div className="w-24 rounded-full">
                    <img src={rev.image} />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold">{rev.name}</h3>
                  <p>{rev.profession}</p>
                </div>
              </div>
              <p className="w-[400px]">{rev.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PtCarousel;
