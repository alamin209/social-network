import { Box, Text, VStack } from '@chakra-ui/react'
import React from 'react'

export const UserHeader = () => {
  return (
    <VStack gap={4} alignItems={'start'}>

 <Flex justifyContent={"space-between"} w={"full"} >
    <Box>
        <Text fontSize={"21"}>
            Demo
        </Text>
    </Box>
    <Box>Box3</Box>
 </Flex>
    
   </VStack>
  )
}
