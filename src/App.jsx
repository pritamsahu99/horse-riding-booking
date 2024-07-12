import { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import BookingForm from './components/BookingForm';
import ConfirmationPopup from './components/ConfirmationPopup';
import HorsesData from './components/HorsesData';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [stage, setStage] = useState('landing');

  const handleBookNow = () => setStage('form');
  const handleSubmit = () => setStage('confirmation');
  const handleClose = () => setStage('landing');
  const handleBack = () => setStage('landing');

  return (
    <Provider store={store}>
      <AnimatePresence>
        {stage === 'landing' && (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <HorsesData onBookNow={handleBookNow} />
          </motion.div>
        )}
        {stage === 'form' && (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <BookingForm onSubmit={handleSubmit} onBack={handleBack} />
          </motion.div>
        )}
        {stage === 'confirmation' && (
          <motion.div
            key="confirmation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ConfirmationPopup onClose={handleClose} />
          </motion.div>
        )}
      </AnimatePresence>
    </Provider>
  );
}

export default App;
