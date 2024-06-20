import { useState } from 'react';
import PropTypes from 'prop-types';

const AddressForm = ({ formData, setFormData, handleNext, handleBack }) => {
  const [addressLine1, setAddressLine1] = useState(formData.addressLine1 || '');
  const [addressLine2, setAddressLine2] = useState(formData.addressLine2 || '');
  const [city, setCity] = useState(formData.city || '');
  const [state, setState] = useState(formData.state || '');
  const [zipCode, setZipCode] = useState(formData.zipCode || '');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    let valid = true;

    if (!addressLine1.trim()) {
      newErrors.addressLine1 = 'Address Line 1 is required';
      valid = false;
    }

    if (!city.trim()) {
      newErrors.city = 'City is required';
      valid = false;
    }

    if (!state.trim()) {
      newErrors.state = 'State is required';
      valid = false;
    }

    if (!zipCode.trim()) {
      newErrors.zipCode = 'ZIP Code is required';
      valid = false;
    } else if (!/^\d{6}$/.test(zipCode)) {
      newErrors.zipCode = 'ZIP Code must be 6 digits';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleNextClick = () => {
    if (validateForm()) {
      setFormData({ ...formData, addressLine1, addressLine2, city, state, zipCode });
      handleNext();
    }
  };

  return (
    <div>
      <h2>Address Information</h2>
      <form>
        <div>
          <label>Address Line 1:</label>
          <input
            type="text"
            value={addressLine1}
            onChange={(e) => setAddressLine1(e.target.value)}
            className={errors.addressLine1 ? 'error' : ''}
          />
          {errors.addressLine1 && <span className="error-message">{errors.addressLine1}</span>}
        </div>
        <div>
          <label>Address Line 2:</label>
          <input
            type="text"
            value={addressLine2}
            onChange={(e) => setAddressLine2(e.target.value)}
            className={errors.addressLine2 ? 'error' : ''}
          />
          {errors.addressLine2 && <span className="error-message">{errors.addressLine2}</span>}
        </div>
        <div>
          <label>City:</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className={errors.city ? 'error' : ''}
          />
          {errors.city && <span className="error-message">{errors.city}</span>}
        </div>
        <div>
          <label>State:</label>
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            className={errors.state ? 'error' : ''}
          />
          {errors.state && <span className="error-message">{errors.state}</span>}
        </div>
        <div>
          <label>ZIP Code:</label>
          <input
            type="text"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            className={errors.zipCode ? 'error' : ''}
          />
          {errors.zipCode && <span className="error-message">{errors.zipCode}</span>}
        </div>
        <button type="button" onClick={handleBack}>Back</button>
        <button type="button" onClick={handleNextClick}>Next</button>
      </form>
    </div>
  );
};

AddressForm.propTypes = {
  formData: PropTypes.shape({
    addressLine1: PropTypes.string,
    addressLine2: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zipCode: PropTypes.string
  }).isRequired,
  setFormData: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleBack: PropTypes.func.isRequired
};

export default AddressForm;
