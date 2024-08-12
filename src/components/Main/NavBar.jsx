import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
import './NavBar.css'
//import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';

// import NavDropdown from 'react-bootstrap/NavDropdown';
function NavBar() {
  return (
//     <Navbar  expand="xl" className="bg-body">
//       <Container className='nav_body'>
//         <Navbar.Brand href="#home">Routing Assignment</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav >
//           <Nav.Link as={Link} to={"/"} exact >Home </Nav.Link>          
//           <Nav.Link as={Link} to={'/countries'}>Country Data</Nav.Link>
//           <Nav.Link as={Link} to={'/toDo'}>Todo App</Nav.Link>
            
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
// </Navbar>

<Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">My Project</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link as={Link} to={"/"} exact >Home </Nav.Link>          
         <Nav.Link as={Link} to={'/countries'}>Country Data</Nav.Link>
          <Nav.Link as={Link} to={'/toDo'}>Todo App</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

  

  );
}

export default NavBar;