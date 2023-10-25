import React, { useEffect, useState } from 'react'
import { getTransactions } from '../services/customer';
import { Heading, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';

const SellerPage = () => {
  const [transactions, setTransactions] = useState([]);

  const fetchProducts = () => {
    getTransactions()
      .then(({data}) => {
        console.log(data);
        setTransactions(data);
      })
      .catch((error) => {
        console.log(error)
      });
  }

  useEffect(fetchProducts, []);

  return (
    <>
      <Heading size={'xl'} mb={10}>Transaction list</Heading>
      <TableContainer>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th>Type</Th>
              <Th>Date</Th>
              <Th isNumeric>Amount</Th>
            </Tr>
          </Thead>
          <Tbody>
            {
              transactions.map(trans => <Tr key={trans.id}>
                <Td>{trans.transactionType}</Td>
                <Td>{trans.transactionDate}</Td>
                <Td isNumeric>{trans.amount}</Td>
              </Tr>)
            }
          </Tbody>
        </Table>
      </TableContainer>
    </>
  )
}

export default SellerPage;