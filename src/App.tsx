import { useState } from 'react'
import './App.css'
import LeftContainer from './components/LeftContainer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex flex-col h-screen w-screen justify-self-start'>

        <LeftContainer/>

      </div>
    </>
  )
}

export default App
