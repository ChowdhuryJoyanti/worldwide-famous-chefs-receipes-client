import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
        const [error,setError] = useState('');
        const [success,setSuccess] = useState('');


    const { createUser} = useContext(AuthContext);

    const handleRegister = event =>{
        event.preventDefault();
        setSuccess('');
        const from = event.target;
        const name = from.name.value;
        const photo = from.photo.value;
        const email = from.email.value;
        const password = from.password.value;

            console.log(name,password,photo,email);

              setError('');
              setSuccess('');
        if(password.length <6){
          setError('password must be 6 character');
          return;
        }






            createUser(email,password)
            .then(result =>{
                const createdUser = result.user;
                console.log(createdUser);
                setError('')
                from.reset();
                setSuccess('successful')
            } )
            .catch(error =>{
                console.error(error.message);
                setError(error.message);
              
               })


    }



    return (
        <div>
          
            <Container className='mx-auto w-25'>
          <h3>Please Register</h3>
        <Form onSubmit={handleRegister}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name='name' placeholder="Enter Your Name" required/>
        <Form.Text className="text-muted">
       
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control type="text" name='photo' placeholder="Enter Photo Url" required/>
        <Form.Text className="text-muted">
       
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" required/>
        <Form.Text className="text-muted">
       
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password"  required/>
      </Form.Group>
      <p className='text-danger'>{error}</p>
      <p className='text-success'>{success}</p>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" name='accept' label="Terms and Condition" />
      </Form.Group>

      <Button  variant="info" type="submit">
    Register
      </Button>
      <br></br>
      <Form.Text className="text-muted">
    Already Have an account?    <Link to="/login">Log In</Link>
       </Form.Text>
        
       
    </Form>
        </Container>
        </div>
    );
};

export default Register;
