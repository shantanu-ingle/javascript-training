import { useState } from 'react'
import './App.css'
import Message from './components/message'

function App() {
  // const [count, setCount] = useState<number>(100);
let messageOne = {msg: "Hola", from: "John", to:"Carter"}
  return (<>
  <Message messageDetails = {messageOne}/>
  </>
 
  )
}

export default App
