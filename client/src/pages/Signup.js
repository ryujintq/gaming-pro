import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
import FormInput from '../components/FormInput'
import FormContainer from '../components/FormContainer'

const Signup = () => {
    const [signupData, setSignupData] = useState({ firstName: '', lastName: '', email: '', password: '', password2: '' })
    const { firstName, lastName, email, password, password2 } = signupData

    const handleFormDataChange = e => {
        const { name, value } = e.target
        setSignupData(prevState => {
            return { ...prevState, [name]: [value] }
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
    }
    return (
        <FormContainer>
            <Form onSubmit={handleSubmit}>
                <h1>Signup</h1>
                <FormInput text='First Name' placeholder='Enter first name' name='firstName' value={firstName} onChange={handleFormDataChange} />
                <FormInput text='Last Name' placeholder='Enter last name' name='lastName' value={lastName} onChange={handleFormDataChange} />
                <FormInput text='Email address' placeholder='Enter email' name='email' value={email} onChange={handleFormDataChange} />
                <FormInput text='Password' placeholder='Enter password' name='password' value={password} onChange={handleFormDataChange} />
                <FormInput text='Confirm Password' placeholder='Re-enter password' name='password2' value={password2} onChange={handleFormDataChange} />
                <Button type='submit' variant='primary' className='py-2 px-4 mt-1'>
                    <strong>Sign Up</strong>
                </Button>
            </Form>
            <Row className='py-3'>
                <Col>
                    Already a member? <Link to={'/login'}>Login</Link>
                </Col>
            </Row>
        </FormContainer>
    )
}

export default Signup
