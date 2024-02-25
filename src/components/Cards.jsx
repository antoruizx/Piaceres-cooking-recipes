import React from 'react';
import '../styles/Cards.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Img1 from '../img/burger.jpg';

const Cards = (props) => {

  return (
    <div className='container py-5'>
        <div className='row row-cols-1 row-cols-md-3 g-4 py-5'>

            <div className='col'>
            <Card className='card' style={{ width: '18rem' }}>
                <Card.Img className='card-img-top' variant="top" src={props.img} />
                <Card.Body className='card-body'>
                    <Card.Title className='card-title'>{props.title}</Card.Title>
                    <Card.Text className='card-text'>
                    {props.description}
                    </Card.Text>
                    <div className='d-flex justify-content-around mb-4'>
                        <h3>5 *</h3>
                    <Button className='btn btn-primary' variant='primary'>Ver receta</Button>

                    </div>
                </Card.Body>
                </Card>
            </div>
        </div>
    </div>

  )
}

export default Cards;