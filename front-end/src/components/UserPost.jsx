import React, { useState } from 'react'
import { UserHeader } from './UserHeader'
import { Link } from 'react-router-dom'
import { Avatar, Box, Flex, Image, Text } from '@chakra-ui/react'
import { BsThreeDots } from 'react-icons/bs'
import Actions from './Actions'

export const UserPost = () => {
	const [like,setLike] =useState(false);
  return (
    <Link to={"user/post/1"} >
      <Flex gap={3} mb={4} py={5}>
        <Flex flexDirection={"column"} alignItems={"center"}>
          <Avatar size='md' name="Mark test" src="/zuck-avatar.png" />
          <Box w="1px" h={"full"} bg="gray.light" my={2} ></Box>
          <Box position ={"relative"} w={"full"} >
          <Avatar
							size='xs'
							name='John doe'
							src='https://bit.ly/dan-abramov'
							position={"absolute"}
							top={"0px"}
							left='15px'
							padding={"2px"}
						/>
						<Avatar
							size='xs'
							name='John doe'
							src='https://bit.ly/sage-adebayo'
							position={"absolute"}
							bottom={"0px"}
							right='-5px'
							padding={"2px"}
						/>
						<Avatar
							size='xs'
							name='John doe'
							src='https://bit.ly/prosper-baba'
							position={"absolute"}
							bottom={"0px"}
							left='4px'
							padding={"2px"}
						/>
          </Box>
        </Flex>
		<Flex flex={1} flexDirection={"column"} gap={2} >
			<Flex justifyContent={"space-between"}  w={"full"} >
				<Flex w={"full"} alignItems={"center"} >
					<Text fontSize={"sm"} fontWeight={"bold"} >
						Demo User
					</Text>
					<Image src="/verified.png" w={4} ml= {1} />
				</Flex>
				<Flex gap={4} alignItems={"center"} justifyContent={"space-between"}  >
				<Text fontStyle={"sm"} color={"gray.light"}  >
						1d
					</Text>
				</Flex>
				<BsThreeDots/>
			</Flex>
			<Text fontSize={"sm"} > This is 1st Post</Text>
			<Box borderEndRadius={6} overflow={"hidden"} border={"1px solid"} borderColor={"gray.light"}>
				<Image src="/post1.png" w={"full"} />
			</Box>
			<Flex gap={3} my= {1}>
				<Actions liked ={like} setLiked={setLike}/>
			</Flex>
			<Flex gap={2} alignItems={"center"}>
						<Text color={"gray.light"} fontSize='sm'>
							1112 replies
						</Text>
						<Box w={0.5} h={0.5} borderRadius={"full"} bg={"gray.light"}></Box>
						<Text color={"gray.light"} fontSize='sm'>
							 likes
						</Text>
					</Flex>

			{/* <Flex gap={2} alignItems={"center"}>
              <Text color={"gray.light"} fontSize="sm">
				123 replies
			  </Text>
			  <Box w={0.5} h={0.5} borderRadius={"full"} bg={"gray.light"}  >rrrrrrrrrr </Box>
			  <Text color={"gray.light"} fontSize="sm">
				123 likes
			  </Text>
			</Flex> */}
		</Flex>
      </Flex>
    </Link>
  )
}
