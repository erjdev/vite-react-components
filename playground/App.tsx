import React from 'react';
import { Button, Input, Form } from '../lib';

const App: React.FC = () => {
  return (
    <>
      <MyGridForm />
    </>
  )
}

const MyGridForm: React.FC = () => {
  return (
    <Form>
      <Input id="name" placeholder='John Doe' label='My Name' />
      <Input label='Your age' placeholder='30' />
      
      <Button>My Button</Button>
    </Form>
  )
}

export default App
