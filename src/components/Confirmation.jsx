import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const Confirmation = ({ formData, handleBack, handleSubmit }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="confirmation-container"
    >
      <h2>Confirmation</h2>
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
      <button onClick={handleBack}>Back</button>
      <button onClick={handleSubmit}>Submit</button>
    </motion.div>
  );
};

Confirmation.propTypes = {
  formData: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    addressLine1: PropTypes.string,
    addressLine2: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zipCode: PropTypes.string,
  }).isRequired,
  handleBack: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Confirmation;
