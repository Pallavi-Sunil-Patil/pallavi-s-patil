import { useState } from 'react'
import Header from './components/Header.jsx'
import Page from './components/Page.jsx'


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header />
        <Page />
    </>
  )
}

export default App
