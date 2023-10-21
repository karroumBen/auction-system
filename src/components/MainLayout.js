import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import '../../src/assets/styles/global.css';


const MainLayout = () => {
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