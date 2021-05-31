import React from 'react'
import CategoryCard from '../components/CategoryCard'
import Row from 'react-bootstrap/Row'

const Home = () => {
    return (
        <div>
            <h1 className='text-center mt-3 mb-5'>Search By Category</h1>
            <Row className='justify-content-center'>
                <CategoryCard image={'keyboard-steelseries-apex-5.png'} text='Keyboards' />
                <CategoryCard image={'mouse-steelseries-sensei-ten.png'} text='Mice' />
                <CategoryCard image={'headset-steelseries-arctis7.png'} text='Headsets' />
            </Row>
        </div>
    )
}

export default Home
