// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, Label, Input } from '../';
import { LoginForm } from '../lib/components/LoginForm';

function App() {
  const handleClick = () => {
    //do something
    alert("Button clicked!");
  };
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
        <table>
          <tbody>
            <tr>
              <td>
                <p>Button</p>
                <Button
                  onClick={handleClick}
                  fullWidth={true}
                >
                  Button
                </Button>
              </td>
              <td>
                <p>Label</p>
                <Label>Label component exmaple</Label>
              </td>
             
            </tr>
            <tr>
              <td>
                <p>Input</p>
                <Input
                  title='eskel-input'
                  onBlur={() => { alert("Input blur triggered") }}
                  placeholder='Write something'
                />
              </td>
              <td>component 2</td>
            </tr>

            <tr>
              <td>
                <p>Login Form</p>
                <LoginForm 
                  userLabel='Email'
                  passwordLabel='Password'
                  layout='vertical'
                />
              </td>
              <td>component 2</td>
            </tr>
          </tbody>
        </table>
        
        <p>
          
        </p>
      </div>
    </>
  )
}

export default App
