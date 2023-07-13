import React from 'react';
import { useFormikContext } from 'formik';

const AddressForm = () => {
  const { values, handleChange, errors, touched } = useFormikContext();

  const handleSameAsResidentialChange = () => {
    handleChange({
      target: {
        name: 'sameAsResidential',
        value: !values.sameAsResidential,
      },
    });
  };

  return (
    <div>
      <h2>Residential Address</h2>
      <div className='personalDetail'>
        <div>
        <label htmlFor="residentialAddress.street1">Street 1:</label>
        <input
          type="text"
          id="residentialAddress.street1"
          name="residentialAddress.street1"
          value={values.residentialAddress?.street1 || ''}
          onChange={handleChange}
        />
        {errors.residentialAddress?.street1 && touched.residentialAddress?.street1 && (
          <div>{errors.residentialAddress.street1}</div>
        )}
      </div>
      <div>
        <label htmlFor="residentialAddress.street2">Street 2:</label>
        <input
          type="text"
          id="residentialAddress.street2"
          name="residentialAddress.street2"
          value={values.residentialAddress?.street2 || ''}
          onChange={handleChange}
        />
      </div>
      <div className='checkstyle'>
        <input
          type="checkbox"
          id="sameAsResidential"
          name="sameAsResidential"
          checked={values.sameAsResidential}
          onChange={handleSameAsResidentialChange}
        />
        <label htmlFor="sameAsResidential">Same as Residential Address</label>
      </div>
      </div>
      {!values.sameAsResidential && (
        
        <div>
            <h2>Permanent Address</h2>
            <div className='permanentAddress'>
                <div>
          <label htmlFor="permanentAddress.street1">Street 1:</label>
          <input
            type="text"
            id="permanentAddress.street1"
            name="permanentAddress.street1"
            value={values.permanentAddress?.street1 || ''}
            onChange={handleChange}
          />
          {errors.permanentAddress?.street1 && touched.permanentAddress?.street1 && (
            <div>{errors.permanentAddress.street1}</div>
          )}
     </div>
     <div>
          <label htmlFor="permanentAddress.street2">Street 2:</label>
          <input
            type="text"
            id="permanentAddress.street2"
            name="permanentAddress.street2"
            value={values.permanentAddress?.street2 || ''}
            onChange={handleChange}
          />
          </div>
          </div>
        </div>
      )}
      
    </div>
  );
};

export default AddressForm;
