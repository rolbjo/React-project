import { Navbar, Nav } from 'react-bootstrap'
import { FaLightbulb, FaRegLightbulb } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useSomeContext } from '../SomeContext'

const MyNavbar = () => {
  const { darkMode, setDarkMode } = useSomeContext()

  return (
    <Navbar className='navWrapper' bg='light' style={{ padding: '10px 20px' }}>
      <div className='navContainer1'>
        <Navbar.Brand as={Link} to='/'>
          Wild Adoption
        </Navbar.Brand>
        <Nav className='mr-auto nav-links'>
          <Nav.Link as={Link} to='/'>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to='/about'>
            About
          </Nav.Link>
        </Nav>
      </div>
      <div className='button-container'>
        <button className='themeButton' onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <FaRegLightbulb /> : <FaLightbulb />}
        </button>
      </div>
    </Navbar>
  )
}

export default MyNavbar
