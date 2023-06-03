import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'



const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" style={{ margin: '10px' }}>
            <Container>
                <Navbar.Brand>
                    <Link to='/'>Inventory of Products</Link>
                </Navbar.Brand>
                <Nav className="me-auto" style={{ color: "white" }}>
                    <Link to='/contact'>Contact</Link>
                </Nav>
            </Container>
        </Navbar>



    )
}

export default Header
