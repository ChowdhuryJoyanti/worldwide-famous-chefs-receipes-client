import React from 'react';
import './Faq.css'
import faqImage from '../../assets/ask-1014060_1920.jpg'
import { Container } from 'react-bootstrap';

const Faq = () => {
    return (
        <Container>
            <h2 className='text-center mt-5'>FAQ SECTION</h2>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-1 col-md-2 col-lg-6 ">
                        <div className="border rounded bg-light mt-4 p-3">
                            <h2 className="text-secondary"> 1. Are your consultency is available?</h2>


                        </div>
                        <div className="border rounded bg-light mt-4 p-4">
                            <h2 className="text-secondary"> 2. Are your consultency is available?</h2>
                        </div>
                        <div className="border rounded bg-light mt-4 p-4">
                            <h2 className="text-secondary"> 3. Are your consultency is available?</h2>
                        </div>
                        <div className="border rounded bg-light mt-4 p-4">
                            <h2 className="text-secondary"> 4. Are your consultency is available?</h2>
                        </div>

                    </div>
                    <div className="col-6">
                        <img className='faq-img' src={faqImage} alt="" />
                    </div>
                </div>
            </div>















        </Container>
    );
};

export default Faq;