import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput
  }
  from 'mdb-react-ui-kit';
// import Form from 'react-bootstrap/Form';
import "./Login.css";
import {Link, Routes, Route, useNavigate} from 'react-router-dom';
function App() {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
   
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
   
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
<>
    <div className="container ">
        {/* <img src="Rectangle 5.png" alt="" /> */}
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        // <div className="ui message success">Signed in successfully</div>
        navigate('/Video')
      ) : (
        <pre></pre>
      )}

      {/* <form className="text-center form-bg" onSubmit={handleSubmit}>
        <img src="B_Braun_logo.png" alt="bbraun" className="bbraun-img" />
        <h1>Login</h1>
        <div className="ui divider"></div>
        <div className="ui form">
      
          <div className="field text-center">
       
            <input
              type="text"
              name="email"
              placeholder="Email ID"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="field">
      
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>
          <button className="fluid ui btnlogin btn btn-block">Submit</button>
        </div>
      </form> */}
      {/* <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
    </Form> */}



    </div>
    <MDBContainer className="my-5">

    <MDBCard>
      <MDBRow className='g-0'>
    
        <MDBCol md='6'>
          <MDBCardImage src='B_Braun_logo.png' alt="login form" className='rounded-start w-100 logo'/>
        </MDBCol>
    
        <MDBCol md='6'>
          <MDBCardBody className='d-flex flex-column card2'>
    
            <div className='d-flex flex-row mt-2'>
              <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
              {/* <span className="h1 fw-bold mb-0">Logo</span> */}
            </div>
            <form className="text-center form-bg" onSubmit={handleSubmit}>
        {/* <img src="B_Braun_logo.png" alt="bbraun" className="bbraun-img" /> */}
        <h1>Login</h1>
        <div className="ui divider"></div>
        <div className="ui form">
      
          <div className="field text-center">
            {/* <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5> */}
    
              <MDBInput wrapperClass='mb-4'  id='formControlLg'  type="text"
              name="email"
              placeholder="Email ID"
              value={formValues.email}
              onChange={handleChange} size="lg"/>
               <p>{formErrors.email}</p>
              <MDBInput wrapperClass='mb-4'  id='formControlLg' type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange} size="lg"/>
    <p>{formErrors.password}</p>
            {/* <MDBBtn className=" px-5" color='dark' size='lg'>Login</MDBBtn> */}
            <button className="fluid ui btnlogin btn btn-block">Login</button>
           
    </div></div></form>
          
    
          </MDBCardBody>
        </MDBCol>
    
      </MDBRow>
    </MDBCard>
    
    </MDBContainer>
    </>
  );
}

export default App;