import React from 'react';
import { Dropdown } from 'react-bootstrap';

//component for all dropdown features(filter, group by, favorites)
export default function Dropdowns() {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            fontSize: '16px',
            paddingLeft: '0px',
          }}
          variant='light'
          id='dropdown-basic'
        >
          <ion-icon name='funnel-outline'></ion-icon>
          Filters
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href='#/action-1'>Hi</Dropdown.Item>
          <Dropdown.Item href='#/action-2'>What's up?</Dropdown.Item>
          <Dropdown.Item href='#/action-3'>Cool</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown>
        <Dropdown.Toggle
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            fontSize: '16px',
          }}
          variant='light'
          id='dropdown-basic'
        >
          <ion-icon name='filter-outline'></ion-icon>
          Group By
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href='#/action-1'>Hi</Dropdown.Item>
          <Dropdown.Item href='#/action-2'>What's up?</Dropdown.Item>
          <Dropdown.Item href='#/action-3'>Cool</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown>
        <Dropdown.Toggle
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            fontSize: '16px',
          }}
          variant='light'
          id='dropdown-basic'
        >
          <ion-icon name='star-outline'></ion-icon> Favorites
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href='#/action-1'>Hi</Dropdown.Item>
          <Dropdown.Item href='#/action-2'>What's up?</Dropdown.Item>
          <Dropdown.Item href='#/action-3'>Cool</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <div style={{ marginLeft: '45px' }}>
        <ion-icon style={{ padding: '10px' }} name='apps-outline'></ion-icon>
        <ion-icon style={{ padding: '10px' }} name='list-outline'></ion-icon>
        <ion-icon style={{ padding: '10px' }} name='tv-outline'></ion-icon>
      </div>
    </>
  );
}
