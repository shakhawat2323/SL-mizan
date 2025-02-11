import React, { useEffect, useState } from "react";
import SectionTitile from "./SectionTitile";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import Imge from "../../assets/home/mark.png";

import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const [revew, setRevew] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setRevew(data));
  }, []);
  return (
    <div className="w-11/12 mx-auto">
      <div>
        <SectionTitile
          subHading="What Our Clients Say"
          hading="TESTIMONIALS"
        ></SectionTitile>
      </div>
      <div className="my-20">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {revew.map((Revews) => (
            <SwiperSlide key={Revews._id}>
              <div className=" m-20">
                <div className="flex flex-col items-center mx-20 my-16">
                  <Rating
                    style={{ maxWidth: 180 }}
                    value={Revews.rating}
                    readOnly
                  />
                  <div>
                    <img className="w-20 mt-3 mb-3" src={Imge} alt="" />
                  </div>
                  <h3 className="py-5">{Revews.details}</h3>
                  <p className="text-2xl text-orange-400">{Revews.name}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
