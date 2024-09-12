import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseStateDemo from './Components/UseStateDemo'
import Tab from './Components/Tab'
import MyTextArea from './Components/MyTextArea'
import FormStudent from './Components/FormStudent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UseStateDemo/>
      {/* <Tab/> */}

      {/* <MyTextArea/> */}
      {/* <FormStudent /> */}
    </>
  )
}

export default App
