import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

const CategoryCard = ({ image, text }) => {
    return (
        <Col sm={12} md={6} lg={4} xl={3} className='mx-2'>
            <Link to={`/products/${text.toLowerCase()}`} style={{ textDecoration: 'none', color: 'unset' }}>
                <Card className='cursor-pointer  hover-grey' xs={12} md={6}>
                    <Card.Img variant="top" src={`/images/${image}`} style={{ width: '280px', height: '230px' }} />
                    <Card.Body>
                        <Card.Title className='text-center'>{text}</Card.Title>
                    </Card.Body>
                </Card>
            </Link>
        </Col>
    )
}

export default CategoryCard
