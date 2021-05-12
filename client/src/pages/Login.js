import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
import FormInput from '../components/FormInput'
import FormContainer from '../components/FormContainer'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmailChange = e => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
    }

    return (
        <FormContainer>
            <Form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <FormInput text='Email address' placeholder='Enter email' value={email} onChange={handleEmailChange} />
                <FormInput text='Password' placeholder='Enter password' value={password} onChange={handlePasswordChange} />
                <Button type='submit' variant='primary' className='py-2 px-4 mt-1'>
                    <strong>Sign In</strong>
                </Button>
            </Form>
            <Row className='py-3'>
                <Col>
                    New to our site? <Link to={'/signup'}>Signup</Link>
                </Col>
            </Row>
        </FormContainer>
    )
}

export default Login
