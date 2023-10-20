import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'


const index = () => {
    return (
      <ChakraProvider>
        <div>
          main app
        </div>
      </ChakraProvider>
    )
}

export default index