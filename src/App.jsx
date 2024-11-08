import { useEffect, useState } from 'react'
import MyNavbar from './components/Navbar'
import Footer from './components/Footer'
import AnimalDetails from './views/animalDetails/AnimalDetails'
import About from './views/About'
import Home from './views/home/Home'
import { SomeProvider } from './SomeContext'
import './App.css'
import Loading from './components/loading'

import { createHashRouter, Outlet, RouterProvider } from 'react-router-dom'

function Root() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <SomeProvider>
      <div className='wrapper'>
        <MyNavbar />
        <div
          className={`content ${isLoading ? 'hidden' : 'visible'}`}
          style={{ padding: '0 50px', overflow: 'hidden' }}
        >
          <Outlet />
        </div>
        {isLoading && <Loading />}
        <Footer />
      </div>
    </SomeProvider>
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
