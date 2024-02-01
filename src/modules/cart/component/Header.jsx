import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from '@mui/material/Badge';

const Header = ()=>{
    return(<>
         <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Cart App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Add to cart</Nav.Link>
            <Nav.Link href="#link">Home</Nav.Link>
          </Nav>
          <Badge badgeContent={1} color="primary">
          <i className="fa-solid fa-cart-shopping" style={{fontSize:"25px", cursor:"pointer" }}></i>
         </Badge>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>);
}

export default Header;