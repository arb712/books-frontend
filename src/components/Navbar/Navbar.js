import React from 'react';
import { Container,Navbar,Nav } from 'reactstrap';
import '../css/components.css';
import { Link } from 'react-router-dom';


const Navbar1 = () =>{
    return(
        <>
        <Container className="navBar">
        {/* <Container className="contLogo">
                <Navbar bg="light" expand="lg" className="logoName" >
                    <Link className="textLogo" to="Home">A R I Q B I M A N T O R O</Link>
                </Navbar>
        </Container> */}
        <Container className="contNav">
            <Navbar bg="light" expand="lg" className="navItem">
                    <Nav className="mr-auto navLink">
                        <Link className="navI" to="">Home</Link>
                        <Link className="navI" to="add">Add Books</Link>
                        <Link className="navI" to="books">Books</Link>
                    </Nav>
            </Navbar>
        </Container>
        </Container>
        </>
    )
}

export default Navbar1;