import { Navbar, Nav, NavDropdown,Form, FormControl, Button } from 'react-bootstrap';
import './Header.css'

const Header = () => {
  return (
    <>
 
 <Navbar className='navbar fixed' collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand className='flex' href="/"><span className='text-green-200'>ATG.W</span><img src='/Union 1.png'/>RLD</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="">
        <Form className='form flex '>
      <FormControl
        type="text"
        placeholder="Search"
        className="sbar mr-sm-2 "
      />
      <Button variant="outline-success">Search</Button>
    </Form>
          <NavDropdown className="create-act" title="create account its free" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/signLogin">sign Up</NavDropdown.Item>
            
          </NavDropdown>
        </Nav>
        
      </Navbar.Collapse>
    </Navbar>
    </>
  )
}

export default Header;
