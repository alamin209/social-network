import { VStack } from '@chakra-ui/react'
import React from 'react'
import { UserHeader } from '../components/UserHeader'
import { UserPost } from '../components/UserPost'

export const UserPage = () => {
  return (
  <>
   <UserHeader/>
   <UserPost/>
  </>
  )
}
