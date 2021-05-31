import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const ProductCard = ({ product }) => {
    return (
        <Card className='flex-grow-1 my-3 p-2 rounded'>
            <Card.Img variant="top" src={product.image} style={{ height: '250px' }} />
            <Card.Body className='d-flex flex-column justify-content-between'>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text as='h3'>${product.price}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ProductCard
