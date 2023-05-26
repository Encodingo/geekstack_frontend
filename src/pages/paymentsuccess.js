import React from 'react';

import { Box,VStack,Text,Heading }from "@chakra-ui/react";
import { useSearchParams } from 'react-router-dom';

const Paymentsuccess = () => {
  const searchQuery=useSearchParams()[0];
  console.log(searchQuery.get('reference'));
  const reference=searchQuery.get('reference');
  
    
  return (
    <Box>
        <VStack h='100vh' justifyContent={'center'}>
        <Heading texTransform="uppercase" >Order Successfully</Heading>
        <Text>
            Reference No.{reference}
        </Text>

        </VStack>
    </Box>
    
  )
}

export default Paymentsuccess