import { Navbar, Nav, NavDropdown,Form, FormControl, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <>
 
 <Navbar className='navbar fixed' collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand className=''><Link className='flex' to='/'><span className='text-green-200'>ATG.W</span><img src='/Union 1.png'/>RLD</Link></Navbar.Brand>
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
            
            <NavDropdown.Item><Link to='/SignLogin' >sign Up</Link></NavDropdown.Item>
            
          </NavDropdown>
        </Nav>
        
      </Navbar.Collapse>
    </Navbar>
    </>
  )
}

export default Header;
