import BookNowBtn from "./BookNowBtn";
import { motion } from 'framer-motion';

const LandingPage = ({ values, onBookNow }) => {
  const { name, description, imgurl } = values;

  return (
    <div className="flex bg-[#f7e7dc54] rounded-lg h-full ">
      <motion.div 
       initial={{ opacity: 0, x: -30 }}
       animate={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.8 }}
      className="left-side md:flex hidden w-[65%] py-20 flex-col justify-evenly pl-5">
        <motion.h1
         initial={{ opacity: 0, y: 10 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 1, delay: 0.2}}
        className="font-Saol-Text uppercase font-semibold w-fit text-4xl relative overflow-hidden">
          {name}
          <motion.span
            initial={{ opacity: 0, width: '0%', height: '0%' }}
            animate={{ opacity: 1, width: '94%', height: '5%' }}
            transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-[#25433665] rounded-sm absolute bottom-0 left-2 "></motion.span>
        </motion.h1>
        <p className="pr-5 font-Quiche-Sans text-[#373a40be] tracking-wider translate-x-4 font-semibold leading-[14.5px] text-xs">
          {description}
        </p>
        <motion.button
         initial={{ opacity: 0, skewY: 5, y: 10 }}
         animate={{ opacity: 1, skewY: 0, y: 0 }}
         transition={{ duration: 0.7, delay: 0.3 }}
        type="button" onClick={onBookNow}  className="h-12 w-36 relative group">
        <div className="h-full w-full rounded-full flex items-center justify-center group-hover:bg-[#373a4086] bg-[#373a4054] backdrop-blur-[2px] outline outline-1 outline-offset-4 outline-[#373a407b] duration-[.7s] ease-in-out cursor-pointer group-hover:scale-x-[.65] shadow-lg shadow-[#373a4062]">
          <h4 className="text-[#405D72] font-gilroy tracking-wider duration-[.7s] group-hover:tracking-normal group-hover:opacity-0">
            Book Now
          </h4>
        </div>
          <span className="h-24 w-24 group-hover:scale-100 scale-0
           duration-[.7s] absolute -top-5 left-6 rounded-full active:bg-[#373a40ac] bg-[#373a4061] backdrop-blur-md flex items-center shadow-lg shadow-[#373a4052] justify-center cursor-pointer">
            <BookNowBtn />
          </span>
        </motion.button>
      </motion.div>
      <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="right-side shadow-lg shadow-[#f7e7dcd1] md:rounded-bl-full w-full flex items-center justify-center overflow-hidden relative">
        <div className="image-container duration-500 h-full w-full blur-[2px] relative overflow-hidden">
          <img
            className="w-full h-full absolute -top-36 -right-36 object-cover opacity-60 rounded-full"
            src={imgurl}
            alt={name}
          />
        </div>
        <motion.div
         initial={{ opacity: 0, x: 30, rotate: 5 }}
         animate={{ opacity: 1, x: 0, rotate: 0 }}
         transition={{ duration: 0.7}}
        className="image-container outline outline-1 outline-offset-8 outline-[#ffcbcb8a] duration-700 absolute md:right-10 rounded-full h-[80%] w-[85%] md:h-[80%] md:w-[60%] overflow-hidden">
          <img
            className="w-full h-full object-cover rounded-full"
            src={imgurl}
            alt={name}
          />
          <div className="h-full w-full bg-[#50B498]/20 absolute top-0 left-0 flex justify-between flex-col items-center py-10 md:hidden">
          <motion.h1
         initial={{ opacity: 0, y: 10 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 1, delay: 0.5}}
        className="font-Saol-Text uppercase font-semibold w-fit text-4xl relative overflow-hidden">
          {name}
          <motion.span
            initial={{ opacity: 0, width: '0%', height: '0%' }}
            animate={{ opacity: 1, width: '94%', height: '5%' }}
            transition={{ duration: 0.8, delay: 1 }}
          className="bg-[#25433665] rounded-sm absolute bottom-0 left-2 "></motion.span>
        </motion.h1>
        <p className="px-4 py-2 font-Quiche-Sans text-[#fff8dbd3] tracking-wider font-semibold leading-[14.5px] text-xs text-center bg-[#508d4e5d]">
          {description}
        </p>
        <motion.button
         initial={{ opacity: 0, skewY: 5, y: 10 }}
         animate={{ opacity: 1, skewY: 0, y: 0 }}
         transition={{ duration: 0.7, delay: 0.4 }}
        type="button" onClick={onBookNow}  className="h-12 w-36 relative group">
        <div className="h-full w-full rounded-full flex items-center justify-center group-hover:bg-[#ECCEAE] bg-[#ffd3b689] backdrop-blur-[2px] outline outline-1 outline-offset-4 outline-[#ecceae5e] duration-[.7s] ease-in-out cursor-pointer group-hover:scale-x-[.65] shadow-lg shadow-[#ecceae84]">
          <h4 className="text-[#D6EFD8] font-gilroy tracking-wider duration-[.7s] group-hover:tracking-normal group-hover:opacity-0">
            Book Now
          </h4>
        </div>
          <span className="h-24 w-24 group-hover:scale-100 scale-0
           duration-[.7s] absolute -top-5 left-6 rounded-full active:bg-[#ecceaeac] bg-[#E6836953] backdrop-blur-md flex items-center shadow-lg shadow-[#373a4052] justify-center cursor-pointer">
            <BookNowBtn />
          </span>
        </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LandingPage;
