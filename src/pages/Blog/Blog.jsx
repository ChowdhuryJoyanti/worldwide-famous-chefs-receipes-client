import React from 'react';
import { Container } from 'react-bootstrap';
import"./Blog.css"

const Blog = () => {
    return (
        <Container className='bg-light mt-5'>
            <h2 className='text-center header'>Questions</h2>
            <div className='mt-5'>
                <h3 className='question'>1. What is the differences between uncontrolled and controlled components?</h3>
                <p> <span className='bg-info  ans '>Ans:</span> 
                    In most cases, controlled components is used to implement forms.
                    In a controlled component, form data is handled by a React component.<br></br>
                    The alternative is uncontrolled components, where form data is handled
                    by the DOM itself.<br></br>

                    To write an uncontrolled component, instead of writing an
                    event handler for every state update,
                    you can use a ref to get form values from the DOM.</p>

                <h3  className='question'>How to validate React props using PropTypes?</h3>
                <p><span className='bg-info  ans '>Ans:</span> Props and PropTypes are important mechanisms for passing read-only attributes
                    between React components.<br></br>

                    We can use React props, short for properties, to send data from one component <br></br>
                    to another. If a component receives the wrong type of props, it can cause bugs and unexpected errors in your app.</p>

                <p>When developing a React application, you’ll need to structure and define your props to<br></br>
                    avoid bugs and errors. Just like a function might have mandatory arguments, a React <br></br>
                    component might require a prop to be defined, otherwise, it will not render properly. <br></br>
                    Forgetting to pass a required prop into a component that needs it could cause your app <br></br>
                    to behave unexpectedly.</p>

                <h3  className='question'>3.What is the difference between nodejs and express js?</h3>
                <p><span className='bg-info  ans '>Ans:</span> 
                    <ul>
                        <li>
                            Node.js is a platform for building the i/o applications which are server-side<br></br>
                            event-driven and made using JavaScript.
                        </li>
                        <li>
                            Express.js is a framework based on Node.js which is used for building web-application<br></br>
                            using approaches and principles of Node.js event-driven architecture.
                        </li>
                    </ul>
                </p>
                <h3  className='question'>4.What is a custom hook, and why will you create a custom hook?</h3>
                <p><span className='bg-info  ans '>Ans:</span> A custom Hook is a JavaScript function whose name starts with ”use” and that may <br></br> 
                call other Hooks. That's it! If you have code in a component that you feel would make<br></br>
                 sense to extract, either for reuse elsewhere
                     or to keep the component simpler, you can pull that out into a function.</p>
                <p>If I have one or multiple React hooks that will be used at multiple locations in a code,<br></br>  I should 
                     use custom React JS hooks. This helps in making the code more readable and make the code clean.</p>


            </div>

        </Container>
    );
};

export default Blog;
