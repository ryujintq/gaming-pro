import React from 'react'
import Form from 'react-bootstrap/Form'

const FormInput = ({ text, type, placeholder, name, value, onChange }) => {
    return (
        <Form.Group controlId={type} className='my-3'>
            <Form.Label>{text}</Form.Label>
            <Form.Control type={type} placeholder={placeholder} name={name} value={value} onChange={onChange} />
        </Form.Group>
    )
}

export default FormInput
