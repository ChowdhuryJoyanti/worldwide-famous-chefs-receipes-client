import React, { useContext, useEffect, useState ,} from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link ,useLocation,useNavigate} from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.config';

const Login = () => {
  const auth = getAuth(app);
  const [users,setUsers]  = useState(null)
  const [error,setError] = useState('');

  const {signIn,user} = useContext(AuthContext);
  const navigate  = useNavigate()
  const location = useLocation();
  console.log('login',location);
  const from = location?.state?.from?.pathname || '/';



    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = event => {
      event.preventDefault();
        signInWithPopup(auth,googleProvider)
        .then(result => {
          const loggedInUser = result.user;
          console.log(loggedInUser);
          setUsers(loggedInUser)
          navigate(from,{replace:true})
        })
        .catch(error =>{
          console.log('error',error.message);
        })
    }
  

      const handleGithubSignIn = event =>{
        event.preventDefault();
          console.log('github');
          signInWithPopup(auth,githubProvider )
          .then(result =>{
            const loggedUser  = result.user;
            console.log(loggedUser);
            setUsers(loggedUser)
            navigate(from,{replace:true})
          })
          .catch(error => {
            console.log(error);
          })
      }
    const handleLogin = event => {
       event.preventDefault();
       const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      if(!password === password){
            setError('password did not matched')
            return setError();
      }
      console.log(email,password);


      signIn(email,password)
      .then(result =>{
          const loggedUser = result.user;
          console.log(loggedUser);
          navigate(from,{replace:true})
          // navigate(from ,{ replace :true});
      })
      .catch(error =>{
        console.log(error);
      })

    }

    // useEffect(()=>{
    //   if(user){
    //   navigate(from,{replace:true})
    //   }
    //   },[user])

    return (
        <Container className='mx-auto w-25'>
          <h3>Please Login</h3>
        <Form onSubmit={handleLogin}>
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
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button  className='mt-2' variant="info" type="submit">
      Log In
      </Button>
      <br></br>
      <Button className='mt-2'   onClick={handleGoogleSignIn} variant="info" type="submit">
       Google Log In
      </Button>
      <br></br>
      <Button className='mt-2'  onClick={handleGithubSignIn} variant="info" type="submit">
       Github Log In
      </Button>
      <br></br>
      <Form.Text className="text-muted">
        Don't Have an account?    <Link to="/register">Register</Link>
       </Form.Text>
      <Form.Text className="text-success">
       
       </Form.Text>
       <Form.Text className="text-danger">
       
       </Form.Text>
    </Form>
        </Container>
    );
};

export default Login;