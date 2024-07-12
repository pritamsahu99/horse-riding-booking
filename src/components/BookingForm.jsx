import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setBookingDetails } from '../redux/bookingSlice';
import { motion } from 'framer-motion';

const BookingForm = ({ onSubmit, onBack }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    horse: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setBookingDetails(formData));
    onSubmit();
  };

  return (
    <div
      className="fixed inset-0 w-full h-full flex flex-col items-center justify-center bg-[#EEEEEE]"
    >
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, height: "10%" }}
        animate={{ opacity: 1, height: "80%" }}
        transition={{ duration: 0.6 }}
        className="bg-[#cde8e56b] outline outline-1 w-[85%] md:w-[45%] outline-offset-8 outline-[#DBB5B5] shadow-lg shadow-[#c398987b] rounded p-8"
      >
        <h2 className="text-2xl font-Quiche-Sans font-semibold mb-6 text-center">Book a Ride</h2>
        <select 
          name="horse"
          onChange={handleChange}
          required
          className="w-full mb-4 p-2 rounded border-2 border-b-[#7AB2B2] hover:outline outline-1 outline-offset-2 outline-[#7AB2B2] duration-500"
        >
          <option value="">Select Horse</option>
          <option value="Thunder">Thunder Horse</option>
          <option value="Blaze">Blaze Horse</option>
          <option value="Shadow">Shadow Horse</option>
          <option value="Spirit">Spirit Horse</option>
        </select>
       <div className="flex w-full gap-2">
       <input
          type="date"
          name="date"
          onChange={handleChange}
          required
          className="w-full mb-4 p-2 rounded border-2 border-b-[#7AB2B2] hover:outline outline-1 outline-offset-2 outline-[#7AB2B2] duration-500"
        />
        <input
          type="time"
          name="time"
          min="15:00"
          max="23:00"
          onChange={handleChange}
          required
          className="w-full mb-4 p-2 rounded border-2 border-b-[#7AB2B2] hover:outline outline-1 outline-offset-2 outline-[#7AB2B2] duration-500"
        />
       </div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
          className="w-full mb-4 p-2 rounded border-2 border-b-[#7AB2B2] hover:outline outline-1 outline-offset-2 outline-[#7AB2B2] duration-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
          className="w-full mb-4 p-2 rounded border-2 border-b-[#7AB2B2] hover:outline outline-1 outline-offset-2 outline-[#7AB2B2] duration-500"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
          required
          className="w-full mb-4 p-2 rounded border-2 border-b-[#7AB2B2] hover:outline outline-1 outline-offset-2 outline-[#7AB2B2] duration-500"
        />
        <div className="flex justify-between px-4">
        <button type='button' onClick={onBack} className='w-fit cursor-pointer group relative text-[#f3fbfc] rounded-full duration-500 hover:bg-[#405D72] hover:shadow-[#405D72] font-gilroy tracking-wide overflow-hidden bg-[#758694] px-5 py-2 shadow-md shadow-[#758694] outline outline-1 outline-offset-4 outline-[#af8260] active:translate-y-1'>
            <h1 className='group-hover:-translate-y-2 group-hover:opacity-0 group-hover:duration-200'>Back</h1>
            <h1 className='absolute top-3 text-[#FCF8F3]  group-hover:opacity-100 opacity-0  group-hover:duration-300 group-hover:delay-300 group-hover:top-0 left-0 px-5 py-2 '>Back</h1>
          </button>
          <button type='submit' className='w-fit cursor-pointer group relative text-[#f3fbfc] rounded-full duration-500 hover:bg-[#627254] hover:shadow-[#627254] font-gilroy tracking-wide overflow-hidden bg-[#76885B] px-5 py-2 shadow-md shadow-[#76885B] outline outline-1 outline-offset-4 outline-[#af8260] active:translate-y-1'>
            <h1 className='group-hover:-translate-y-2 group-hover:opacity-0 group-hover:duration-200'>Submit</h1>
            <h1 className='absolute top-3 text-[#FCF8F3]  group-hover:opacity-100 opacity-0  group-hover:duration-300 group-hover:delay-300 group-hover:top-0 left-0 px-5 py-2 '>Submit</h1>
          </button>
        </div>
      </motion.form>
    </div>
  );
};

export default BookingForm;
