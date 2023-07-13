import React from 'react';
import { useFormikContext } from 'formik';

const DocumentUploadForm = () => {
  const { values, setFieldValue, errors, touched } = useFormikContext();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFieldValue('documentFile', file);
  };

  const allowedFileTypes = {
    pdf: '.pdf',
    image: 'image/*',
  };

  const handleDocumentTypeChange = (e) => {
    const selectedType = e.target.value;
    setFieldValue('documentType', selectedType);
    setFieldValue('documentFile', null);
  };

  return (
    <div>
      <h2>Upload Documents</h2>
      <div className='documentFile'>
      <div>
        <label htmlFor="documentName">File Name:</label>
        <input
          type="text"
          id="documentName"
          name="documentName"
          value={values.documentName}
          onChange={(e) => setFieldValue('documentName', e.target.value)}
        />
        {errors.documentName && touched.documentName && <div>{errors.documentName}</div>}
      </div>
      <div>
        <label htmlFor="documentType">Type of File:</label>
        <select
          id="documentType"
          name="documentType"
          value={values.documentType}
          onChange={handleDocumentTypeChange}
        >
          <option value="">Select</option>
          <option value="pdf">PDF</option>
          <option value="image">Image</option>
        </select>
        {errors.documentType && touched.documentType && <div>{errors.documentType}</div>}
      </div>
      <div>
        <label htmlFor="documentUpload">Upload File:</label>
        <input
          type="file"
          id="documentUpload"
          name="documentUpload"
          accept={allowedFileTypes[values.documentType]}
          onChange={handleFileChange}
        />       
      </div>
      </div>
      <div className='documentFile'>
      <div>
        <label htmlFor="documentName">File Name:</label>
        <input
          type="text"
          id="documentName"
          name="documentName"
          value={values.documentName}
          onChange={(e) => setFieldValue('documentName', e.target.value)}
        />
        {errors.documentName && touched.documentName && <div>{errors.documentName}</div>}
      </div>
      <div>
        <label htmlFor="documentType">Type of File:</label>
        <select
          id="documentType"
          name="documentType"
          value={values.documentType}
          onChange={handleDocumentTypeChange}
        >
          <option value="">Select</option>
          <option value="pdf">PDF</option>
          <option value="image">Image</option>
        </select>
        {errors.documentType && touched.documentType && <div>{errors.documentType}</div>}
      </div>
      <div>
        <label htmlFor="documentUpload">Upload File:</label>
        <input
          type="file"
          id="documentUpload"
          name="documentUpload"
          accept={allowedFileTypes[values.documentType]}
          onChange={handleFileChange}
        />       
      </div>
      </div>
      
    </div>
  );
};

export default DocumentUploadForm;
