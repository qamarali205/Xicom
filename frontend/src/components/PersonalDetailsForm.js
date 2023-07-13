import React from 'react';
import { useFormikContext } from 'formik';

const PersonalDetailsForm = () => {
  const { values, handleChange, errors, touched } = useFormikContext();
  
  
  return (
    <div className='personalDetail'>
      {/* <h2>Personal Details</h2> */}
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={values.firstName}
          onChange={handleChange}
        />
        {errors.firstName && touched.firstName && <div>{errors.firstName}</div>}
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={values.lastName}
          onChange={handleChange}
        />
        {errors.lastName && touched.lastName && <div>{errors.lastName}</div>}
      </div>
      <div>
        <label htmlFor="emailId">Email:</label>
        <input
          type="email"
          id="emailId"
          name="emailId"
          value={values.emailId}
          onChange={handleChange}
        />
        {errors.emailId && touched.emailId && <div>{errors.emailId}</div>}
      </div>
      <div>
        <label htmlFor="dateOfBirth">Date of Birth:</label>
        <input
          type="date"
          id="dateOfBirth"
          name="dateOfBirth"
          value={values.dateOfBirth}
          onChange={handleChange}
        />
        {errors.dateOfBirth && touched.dateOfBirth && <div>{errors.dateOfBirth}</div>}
      </div>
    </div>
  );
};

export default PersonalDetailsForm;
