import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/pagination';
import "swiper/css";
import 'swiper/css/effect-fade';
import { Navigation, EffectFade, Pagination } from "swiper/modules";
import LandingPage from "./LandingPage";

const HorsesData = ({ onBookNow }) => {
    const horsesDetails = [
        { keyIndex: 1, 
          name: 'Spirit Horse',
          description: "Customers might choose Spirit for its spirited and charismatic demeanor, suitable for challenging terrain or competitive sports. Spirit's name resonates with riders looking to connect with a horse known for its intelligence, loyalty, and unwavering spirit.", 
          imgurl: 'public/assets/spirit-horse-landscpae.jpg' },
        { keyIndex: 2, 
          name: 'Thunder Horse',
          description: "Customers might be drawn to Thunder for adventurous trail rides or activities requiring vigor and resilience. Thunder's name suggests a thrilling and exhilarating ride experience.",
          imgurl: 'public/assets/thunder-horse-landscape.jpeg' },
        { keyIndex: 3,
          name: 'Blaze Horse',
          description: "Blaze typically refers to a marking on a horse's face, often a white patch, which can resemble a blaze of fire.", 
          imgurl: 'public/assets/blaze-horse-landscape.jpg' },
        { keyIndex: 4, 
          name: 'Shadow Horse',
          description: "Customers may select Shadow for tranquil rides through scenic landscapes or for therapeutic purposes, seeking a calm and serene experience. Shadow's name could appeal to those interested in building a bond with a gentle yet resilient companion.", 
          imgurl: 'public/assets/shadow-horse-landscape.jpg' },
        
      ];

  return (
    <div className="h-screen w-full relative overflow-hidden">
      <Swiper
        className="swiper-container relative w-full md:w-[90%] h-[85%] md:mt-4"
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={300}
        modules={[Navigation, EffectFade, Pagination]}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        pagination={{
          clickable: true,
          type: "fraction",
          el: ".swiper-pagination2",
        }}
      >
        {horsesDetails.map((obj, index) => (
          <SwiperSlide key={index}>
            <LandingPage values={obj} onBookNow={onBookNow} />
          </SwiperSlide>
        ))}
      </Swiper>
      <motion.div 
       initial={{ opacity: 0, y: 30 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.7, delay: 0.4}}
      className="swiper-pagination2 font-PP-Woodland bg-[#E7D4B5] text-sm h-fit w-fit px-2 rounded-full outline outline-1 outline-[#A0937D] outline-offset-2 shadow-lg shadow-[#A0937D] absolute left-[80%] md:left-[88%] md:bottom-4 bottom-10"></motion.div>
      <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.5}} 
      className="swiper-buttons absolute md:left-24 left-16 md:bottom-4 bottom-8 bg-[#dad3be] outline outline-1 outline-[#6B8A7A] outline-offset-4 shadow-lg shadow-[#B7B597] rounded-full bg-[#B7B597 h-fit md:w-[8%] w-[20%] z-50 items-center flex justify-center gap-2 ">
        <div className="swiper-button-prev rounded-full cursor-pointer active:bg-[#acd79380] duration-500 ease-out active:-translate-x-1 -rotate-[50deg] hover:rotate-180 px-3 py-2">
          <img className="" src="https://cdn.prod.website-files.com/653165ffb9b62901aa741efd/6536ca74e9715f6949d6709f_icon_arrow-right-dark.svg"/>
        </div>
        <div className="swiper-button-next px-3 py-2 rounded-full cursor-pointer active:bg-[#acd79380] -scale-100 hover:-rotate-[180deg] rotate-[45deg] duration-500 ease-out active:translate-x-1">
        <img className="" src="https://cdn.prod.website-files.com/653165ffb9b62901aa741efd/6536ca74e9715f6949d6709f_icon_arrow-right-dark.svg"/> 
        </div>
      </motion.div>
    </div>
  );
};
export default HorsesData;