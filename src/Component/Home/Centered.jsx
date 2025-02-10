import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Img1 from "../../assets/home/slide1.jpg";
import Img2 from "../../assets/home/slide2.jpg";
import Img3 from "../../assets/home/slide3.jpg";
import Img4 from "../../assets/home/slide4.jpg";
import Img5 from "../../assets/home/slide5.jpg";
import SectionTitile from "./SectionTitile";

const Centered = () => {
  return (
    <section>
      <SectionTitile
        subHading={"From 11.00am to 10.00pm"}
        hading={"Order Online"}
      ></SectionTitile>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <img src={Img1} alt="" />
          <h1 className="text-4xl font-bold -mt-16 text-center uppercase text-purple-500">
            Salads
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img2} alt="" />
          <h1 className="text-4xl font-bold -mt-16 text-center uppercase text-purple-500">
            soups
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img3} alt="" />
          <h1 className="text-4xl font-bold -mt-16 text-center uppercase text-purple-500">
            pzzas
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img4} alt="" />
          <h1 className="text-4xl font-bold -mt-16 text-center uppercase text-purple-500">
            dazad
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img5} alt="" />
          <h1 className="text-4xl font-bold -mt-16 text-center uppercase text-purple-500">
            Salads
          </h1>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Centered;
