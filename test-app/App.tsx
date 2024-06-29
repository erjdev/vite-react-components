import React from 'react';
import { Button, Input, Label } from '../lib/main';

function App() {
  return (
    <>
      <MyGridForm />
    </>
  )
}


function MyGridForm() {
  return (
    <>
      <Label htmlFor="name">My Name</Label>
      <Input id="name" placeholder='John Doe' />

      <Label>
        <div>My Age</div>
        <Input placeholder='30' />
      </Label>
      
      <Button>My Button</Button>
    </>
  )
}

function MyForm() {
  return (
    <>
      <Label>
        <div>My Name</div>
        <Input placeholder='John Doe' />
      </Label>

      <Label>
        <div>My Age</div>
        <Input placeholder='30' />
      </Label>
      
      <Button>My Button</Button>
    </>
  )
}

export default App
