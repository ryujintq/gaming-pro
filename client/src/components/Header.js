import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer'
import { useDispatch, useSelector } from 'react-redux'
import { signout } from '../redux/actions/authActions'
import { clearProducts } from '../redux/actions/productActions'

const Header = () => {
    const { token, firstName } = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const handleSignOut = () => {
        dispatch(signout())
    }

    const handleProductsClear = () => {
        dispatch(clearProducts())
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <LinkContainer to='/'>
                    <Navbar.Brand onClick={handleProductsClear}>Gaming Pro</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="mr-auto">
                        <LinkContainer to='/'>
                            <Nav.Link onClick={handleProductsClear}>Home</Nav.Link>
                        </LinkContainer>
                        {!token ?
                            (
                                <>
                                    <LinkContainer to='/login'>
                                        <Nav.Link>Login</Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to='/signup'>
                                        <Nav.Link>Signup</Nav.Link>
                                    </LinkContainer>
                                </>
                            ) : (
                                <>
                                    <NavDropdown title={`Hi ${firstName}`} id="basic-nav-dropdown">
                                        <NavDropdown.Item onClick={handleSignOut}>Sign Out</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                    </NavDropdown>
                                </>
                            )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
