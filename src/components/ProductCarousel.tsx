import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import Slide1 from "../assets/images/Slide1.webp";
import Slide2 from "../assets/images/Slide2.webp";
import Slide3 from "../assets/images/Slide3.webp";
import Slide4 from "../assets/images/Slide4.webp";
import Slide5 from "../assets/images/Slide5.webp";

export default function ProductCarousel() {
  return (
    <section className="bg-moon-cream py-12 px-4 text-center">
      <h3 className=" text-2xl font-bold mb-6 text-moon-contrast font-playfair">
        Zobacz nasze produkty
      </h3>
      <div className="bg-moon-cream">
        <Swiper
          modules={[EffectCoverflow, Navigation]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1.5}
          navigation={true}
          coverflowEffect={{
            rotate: 45,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
          spaceBetween={30}
          className="max-w-[90vw] md:max-w-[800px] mx-auto"
        >
          <SwiperSlide
            className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px]
 flex items-center justify-center bg-white rounded-xl shadow-md"
          >
            <img
              src={Slide1}
              alt="Naszyjnik 1"
              className="object-contain w-full h-full rounded-xl"
            />
          </SwiperSlide>
          <SwiperSlide
            className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px]
 flex items-center justify-center bg-white rounded-xl shadow-md"
          >
            <img
              src={Slide2}
              alt="Naszyjnik 2"
              className="object-contain w-full h-full rounded-xl"
            />
          </SwiperSlide>
          <SwiperSlide
            className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px]
 flex items-center justify-center bg-white rounded-xl shadow-md"
          >
            <img
              src={Slide3}
              alt="Naszyjnik 3"
              className="object-contain w-full h-full rounded-xl"
            />
          </SwiperSlide>
          <SwiperSlide
            className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px]
 flex items-center justify-center bg-white rounded-xl shadow-md"
          >
            <img
              src={Slide4}
              alt="Naszyjnik 4"
              className="object-contain w-full h-full rounded-xl"
            />
          </SwiperSlide>
          <SwiperSlide
            className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px]
 flex items-center justify-center bg-white rounded-xl shadow-md"
          >
            <img
              src={Slide5}
              alt="Naszyjnik 5"
              className="object-contain w-full h-full rounded-xl"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
