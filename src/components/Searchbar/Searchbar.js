import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

export default function Searchbar() {
  return (
    <Form
      inline
      style={{
        borderBottom: '2px solid grey',
        borderWidth: '100%',
        width: '500px',
      }}
    >
      <FormControl
        style={{
          borderRadius: '0px',
          border: 'none',
          paddingRight: '220px',
        }}
        type='text'
        placeholder='Search'
        className='mr-sm-2'
      />
      <Button variant='outline-info' style={{ border: 'none' }}>
        <ion-icon name='search-outline'></ion-icon>
      </Button>
    </Form>
  );
}
