import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
import FormInput from '../components/FormInput'
import FormContainer from '../components/FormContainer'
import { useDispatch, useSelector } from 'react-redux'
import { setError, signup } from '../redux/actions/authActions'
import Alert from 'react-bootstrap/Alert'

const Signup = ({ location, history }) => {
    const [signupData, setSignupData] = useState({ firstName: '', lastName: '', email: '', password: '', password2: '' })
    const { firstName, lastName, email, password, password2 } = signupData
    const { token, error } = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        if (token) {
            history.push(redirect)
        }
    }, [token, history, redirect])

    useEffect(() => {
        dispatch(setError(''))
    }, [dispatch])

    const handleFormDataChange = e => {
        const { name, value } = e.target
        setSignupData(prevState => {
            return { ...prevState, [name]: [value] }
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        const { firstName, lastName, email, password, password2 } = signupData
        if (!firstName || !lastName || !email || !password || !password2) {
            return dispatch(setError('Please fill in all the fields'))
        }
        dispatch(signup(firstName, lastName, email, password))
    }
    return (
        <FormContainer>
            <Form onSubmit={handleSubmit}>
                <h1>Signup</h1>
                {error && (
                    <Alert variant='danger'>{error}</Alert>
                )}
                <FormInput text='First Name' placeholder='Enter first name' name='firstName' value={firstName} onChange={handleFormDataChange} />
                <FormInput text='Last Name' placeholder='Enter last name' name='lastName' value={lastName} onChange={handleFormDataChange} />
                <FormInput text='Email address' placeholder='Enter email' name='email' value={email} onChange={handleFormDataChange} />
                <FormInput text='Password' type='password' placeholder='Enter password' name='password' value={password} onChange={handleFormDataChange} />
                <FormInput text='Confirm Password' type='password' placeholder='Re-enter password' name='password2' value={password2} onChange={handleFormDataChange} />
                <Button type='submit' variant='primary' className='py-2 px-4 mt-1'>
                    <strong>Sign Up</strong>
                </Button>
            </Form>
            <Row className='py-3'>
                <Col>
                    Already a member? <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>Login</Link>
                </Col>
            </Row>
        </FormContainer>
    )
}

export default Signup
