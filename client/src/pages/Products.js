import { useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../redux/actions/productActions'
import ProductCard from '../components/ProductCard'

const Products = ({ location }) => {
    const category = location.pathname.replace('/products/', '')
    const { products } = useSelector(state => state.products)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts(category))
    }, [dispatch, category])

    return (
        <Row>
            <h1 className='text-capitalize'>{category}</h1>
            {products.map(product => (
                <Col sm={12} md={6} lg={4} xl={3}>
                    {/* <Col sm={12} md={6} lg={4} xl={3} className='d-flex flex-column'> */}
                    < ProductCard product={product} key={product._id} />
                </Col>
            ))
            }
        </Row >
    )
}

export default Products
