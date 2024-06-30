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
      <Input id="name" placeholder='John Doe' label='My Name' aria-autocomplete='none' maxLength={64} />
      <Input label='Your age' type="number" min={1} max={125} placeholder='30' required aria-required="true" maxLength={3} />
      
      <Button type="submit">My Button</Button>
    </Form>
  )
}

export default App
