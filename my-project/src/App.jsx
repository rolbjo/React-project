import { Navbar, Nav } from 'react-bootstrap'

import { useEffect, useState } from 'react'
import AnimalDetails from './views/AnimalDetails'
import About from './views/About'
import Home from './views/Home'
import SomeContext from './SomeContext'

import {
  createHashRouter,
  Link,
  Outlet,
  RouterProvider,
} from 'react-router-dom'

function Root() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? 'black' : 'white'

    document.body.style.color = darkMode ? 'white' : 'black'
  }, [darkMode])
  return (
    <>
      <SomeContext.Provider value={{ darkMode, setDarkMode }}>
        <Navbar bg='light' expand='lg'>
          <Navbar.Brand as={Link} to='/'>
            Wild Adoption
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              <Nav.Link as={Link} to='/'>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to='/about'>
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Outlet />
        <footer
          className='footer bg-dark text-light'
          style={{ marginTop: '20px' }}
        >
          <div className='container'>
            <div className='row'>
              <div className='col-12 text-center'>
                <p>&copy; 2023 Wild Adoption. All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      </SomeContext.Provider>
    </>
  )
}

function App() {
  const router = createHashRouter([
    {
      children: [
        { element: <Home />, path: '/' },
        { element: <AnimalDetails />, path: '/animal/:name' },
        { element: <About />, path: '/about' },
      ],
      element: <Root />,
    },
  ])

  return <RouterProvider router={router} />
}

export default App
