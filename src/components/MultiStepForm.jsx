import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PersonalInfoForm from './PersonalInfoForm';
import AddressForm from './AddressForm';
import Confirmation from './Confirmation';
import { motion, AnimatePresence } from 'framer-motion';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zipCode: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('formData'));
    if (savedData) {
      setFormData(savedData);
    }

    const isSubmitted = JSON.parse(localStorage.getItem('isSubmitted'));
    if (isSubmitted) {
      navigate('/submitted');
    }
  }, [navigate]);

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = () => {
    setError('');
    // Simulate network request
    setTimeout(() => {
      // Simulate error condition
      if (Math.random() > 0.5) {
        setError('An error occurred while submitting the form. Please try again.');
      } else {
        localStorage.setItem('isSubmitted', true);
        navigate('/submitted');
      }
    }, 1000);
  };

  return (
    <div className="container">
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
          >
            <PersonalInfoForm formData={formData} setFormData={setFormData} handleNext={handleNext} />
          </motion.div>
        )}
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
          >
            <AddressForm formData={formData} setFormData={setFormData} handleNext={handleNext} handleBack={handleBack} />
          </motion.div>
        )}
        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
          >
            <Confirmation formData={formData} handleBack={handleBack} handleSubmit={handleSubmit} />
          </motion.div>
        )}
      </AnimatePresence>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default MultiStepForm;
