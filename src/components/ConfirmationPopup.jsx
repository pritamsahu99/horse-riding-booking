import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

const ConfirmationPopup = ({ onClose }) => {
  const booking = useSelector((state) => state.booking);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 flex items-center justify-center  backdrop-blur-md">
      <div className="bg-white p-8 rounded shadow-lg text-center">
        <h2 className="text-2xl mb-4 font-Quiche-Sans text-shadow">Booking Confirmed!</h2>
        <p className="mb-4 font-gilroy font-semibold tracking-wide">Thank you for booking {booking.horse}.</p>
        <p className="mb-4 font-gilroy">We have sent a calendar invite for your session on {booking.date} at {booking.time}.</p>
        <button onClick={onClose} type='button' className="px-4 backdrop-blur-sm py-1 font-gilroy tracking-wide rounded-sm bg-[#CD1818]/50 active:bg-[#CD1818]/60 mt-4 shadow-md shadow-[#CD1818]/30 active:scale-[0.98] duration-150 text-[#CDE8E5]">Close</button>
      </div>
    </motion.div>
  );
};

export default ConfirmationPopup;
