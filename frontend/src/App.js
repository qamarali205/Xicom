import './App.css';
import PersonalDetailsForm from './components/PersonalDetailsForm';
import AddressForm from './components/AddressForm';
import DocumentUploadForm from './components/DocumentUploadForm';
import { Formik, Form } from 'formik';

function App() {
  return (
    <div className="App">
      
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        onSubmit={(values) => {
          // Form submission logic
          console.log(values);
        }}
      >
        
        <Form>
        <h1>Form</h1>
          <PersonalDetailsForm />
          <AddressForm />
          <DocumentUploadForm />
          {/* Other form components */}
          <button type="submit" id='submit'>Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default App;
