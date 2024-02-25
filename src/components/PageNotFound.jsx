import React from 'react';
import Error404 from '../img/404-not-found.jpeg';
import { Button } from 'react-bootstrap';
import '../styles/PageNotFound.css';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className='cont-404'>
        <img src={Error404} alt="" />
        <Link as={Link} to='/'>
            <button>
            Back to Home
            </button>
        </Link>
    </div>
  );
};

export default PageNotFound;