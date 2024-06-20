import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const SubmittedForm = () => {
  const [formData, setFormData] = useState({});
  const [showSuccessMessage, setShowSuccessMessage] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('formData'));
    if (savedData) {
      setFormData(savedData);
    }

    const timer = setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleReset = () => {
    localStorage.removeItem('formData');
    localStorage.removeItem('isSubmitted');
    navigate('/');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="submitted-container"
    >
      {showSuccessMessage && <div className="success-message">Form submitted successfully!</div>}
      <h2>Submitted Form Details</h2>
      <div className="confirmation-field">
        <span className="confirmation-label">Name: </span>{formData.name}
      </div>
      <div className="confirmation-field">
        <span className="confirmation-label">Email: </span>{formData.email}
      </div>
      <div className="confirmation-field">
        <span className="confirmation-label">Phone: </span>{formData.phone}
      </div>
      <div className="confirmation-field">
        <span className="confirmation-label">Address Line 1: </span>{formData.addressLine1}
      </div>
      <div className="confirmation-field">
        <span className="confirmation-label">Address Line 2: </span>{formData.addressLine2}
      </div>
      <div className="confirmation-field">
        <span className="confirmation-label">City: </span>{formData.city}
      </div>
      <div className="confirmation-field">
        <span className="confirmation-label">State: </span>{formData.state}
      </div>
      <div className="confirmation-field">
        <span className="confirmation-label">Zip Code: </span>{formData.zipCode}
      </div>
      <button onClick={handleReset}>Reset Form</button>
    </motion.div>
  );
};

export default SubmittedForm;
