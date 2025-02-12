import React from "react";
import Foodcard from "./Foodcard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Ordertab = ({ items }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  const itemsPerSlide = 6;
  const chunkedItems = [];
  for (let i = 0; i < items.length; i += itemsPerSlide) {
    chunkedItems.push(items.slice(i, i + itemsPerSlide));
  }
  console.log(chunkedItems);
  return (
    <div>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        {chunkedItems.map((chunk, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-3 gap-3">
              {chunk.map((item) => (
                <Foodcard key={item._id} items={item} />
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Ordertab;
