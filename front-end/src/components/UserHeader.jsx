import { Avatar } from "@chakra-ui/avatar";
import { Box, Flex, Link, Text, VStack } from "@chakra-ui/layout";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { Portal } from "@chakra-ui/portal";
import { Button, useToast } from "@chakra-ui/react";
import { BsInstagram } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";
export const UserHeader = () => {
const toast = useToast()
  const copyLink=()=>{
     const currentUrl = window.location.href;
     navigator.clipboard.writeText(currentUrl).then(()=>{
      toast({
        title: 'Account created.',
        description: "Link has been Copy",
        status: 'success',
        duration: 300,
        isClosable: true,
      })
  })};
  return (
    <VStack gap={4} alignItems={'start'}>
    <Flex justifyContent={"space-between"} w={"full"} >
        <Box>
            <Text fontSize={"21"} fontWeight={"bold"} >
                Demo
            </Text>
            <Flex gap={2} alignItems={'center'} >
              <Text fontSize={"sm"} >mark</Text>
              <Text fontSize={"xs"} bg={"gray.dark"} color={"gray.light"} p={1}  borderRadius={"full"} >Thread.next</Text>
            </Flex>
        </Box>
        <Box>
          <Avatar name='demo' src='/zuck-avatar.png' size={"xl"} />
        </Box>
    </Flex>
    <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took .</Text>
    <Flex w={"full"} justifyContent={"space-between"} >
      <Flex gap={2} alignItems={'center'}>
        <Text color={"gray.light"}>3.2K Follower</Text>
        <Box w='1' h='1' bg={"gray.light"} borderRadius={"full"} 
         >
         </Box>
         <Link color={"gray.light"}>demo Link</Link>
      </Flex>
      <Flex gap={2}>
        <Box className='icon-container'>
          <BsInstagram size={24} cursor={"pointer"} />
        </Box>
        <Box className='icon-container'>
          <Menu>
          <MenuButton>
          <CgMoreO size={24} cursor={"pointer"} />
          </MenuButton>
          <Portal>
            <MenuList bg={"gray.dark"}>
              <MenuItem bg={"gray.dark"} onClick={copyLink} >Copy Link</MenuItem>
            </MenuList>
          </Portal>
          </Menu>
        </Box>
      </Flex>
    
    </Flex>
    <Flex w={"full"}>
          <Flex flex={1} borderBottom = {"1.5px solid white"} justifyContent={"center"} pb='3' cursor={"pointer"} >
            <Text fontWeight={"bold"}  >Threads</Text>
          </Flex>
          <Flex flex={1} borderBottom = {"1.5px solid gray"} color={"gray.light"} justifyContent={"center"} pb='3' cursor={"pointer"} >
            <Text fontWeight={"bold"}  >Replies</Text>
          </Flex>

        </Flex>
   </VStack>
  )
}
