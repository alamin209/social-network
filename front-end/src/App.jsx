import { Button } from '@chakra-ui/react'
import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Container maxW='620px'>
      <Routes>
        <Route path="/:username" element={<User/>} />
      </Routes>
    
    </Container>
  )
}

export default App
