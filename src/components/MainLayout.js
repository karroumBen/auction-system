import React, { useEffect } from 'react'
import NavBar from './NavBar'
import { Outlet, useNavigate } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import '../../src/assets/styles/global.css';



const MainLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      navigate('/login');
    }
  }, [])

    return (
      <ChakraProvider>
        <NavBar />
        <div className="container">
          <section className="main-content">
            <Outlet />
          </section>
        </div>
      </ChakraProvider>
    )
}

export default MainLayout;