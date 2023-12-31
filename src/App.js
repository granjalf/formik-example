import logo from './logo.svg';
import './App.css';
import { useFormik } from 'formik';

function App() {
  const formik = useFormik ({
    initialValues: {
      emailField: '',
      pswField: ''
    },
    onSubmit: values => {
      alert('Login successful.');
    },
    validate: values => {
      let errors = {};
      if(!values.emailField) {
        errors.emailField = 'Required';
      }
      else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.emailField)){
        errors.emailField = 'Invalid email address';
      }
      if(!values.pswField) errors.pswField = 'Required';
      return errors;
    }
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <input id="emailField" name="emailField" type="email" onChange={formik.handleChange} value={formik.values.email}/>
        {formik.errors.email ? <div id="emailError" style={{ color:'red'}}> {formik.errors.email} </div>:null}
        <div>Password</div>
        <input id="pswField" name="pswField" type="password" onChange={formik.handleChange} value={formik.values.password}/>
        {formik.errors.password ? <div id="pswError" style={{ color:'red'}}> {formik.errors.password} </div>:null}
        <button id="submitBtn" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
