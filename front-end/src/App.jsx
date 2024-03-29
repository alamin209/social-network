import { Button, Container } from '@chakra-ui/react'
import { useState } from 'react'
import { UserPage } from './pages/UserPage'
import { PostPage } from './pages/PostPage'
import {Route, Routes} from "react-router-dom"
import { Header } from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container maxW='620px'>
      <Header/>
      <Routes>
        <Route path="/:username" element={<UserPage/>} />
        <Route path="/:username/post/:pid" element={<PostPage/>} />
      </Routes>
    
    </Container>
  )
}

export default App
