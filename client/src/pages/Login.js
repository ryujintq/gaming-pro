import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
import FormInput from '../components/FormInput'
import FormContainer from '../components/FormContainer'
import { useDispatch, useSelector } from 'react-redux'
import { login, setError } from '../redux/actions/authActions'
import Alert from 'react-bootstrap/Alert'

const Login = ({ location, history }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
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

    const handleEmailChange = e => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (!email || !password) {
            return dispatch(setError('Please fill in all the fields'))
        }
        dispatch(login(email, password))
    }

    return (
        <FormContainer>
            <Form onSubmit={handleSubmit}>
                <h1>Login</h1>
                {error && (
                    <Alert variant='danger'>{error}</Alert>
                )}
                <FormInput text='Email address' placeholder='Enter email' value={email} onChange={handleEmailChange} />
                <FormInput text='Password' type="password" placeholder='Enter password' value={password} onChange={handlePasswordChange} />
                <Button type='submit' variant='primary' className='py-2 px-4 mt-1'>
                    <strong>Confirm</strong>
                </Button>
            </Form>
            <Row className='py-3'>
                <Col>
                    New to our site? <Link to={redirect ? `/signup?redirect=${redirect}` : '/signup'}>Signup</Link>
                </Col>
            </Row>
        </FormContainer>
    )
}

export default Login
