// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, Label, Input } from '../';

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Eskel Demo</h1> 
      <p className="read-the-docs">
        React Component Library
      </p>

      <div className="card">
      <h2>Component examples</h2>
        <p>
          <h3>Button</h3>
          <Button>Button Example</Button>
        </p>
        <p>
          <h3>Label</h3>
          <Label>Label component exmaple</Label>
        </p>
        <p>
          <h3>Input</h3>
          <Input 
            title='eskel-input' 
            onBlur={()=>{alert("Input blur triggered")}}
            placeholder='Write something'
          />
        </p>
      </div>
    </>
  )
}

export default App
