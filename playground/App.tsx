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
      <Input
        id='name_input' placeholder='John Doe' label='Name'
        required aria-required='true' aria-autocomplete='none'
        minLength={3} maxLength={64} pattern='[a-zA-Z ]*'
      />
      <Input
        id='age_input' type='number' label='Your Age'
        required aria-required='true' min={1} max={125} 
        minLength={1} maxLength={3} pattern="[0-9]{1,3}"
      />
      <Button type='submit'>My Button</Button>
    </Form>
  )
}

export default App
