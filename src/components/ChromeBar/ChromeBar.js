import React from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';
import './ChromeBar.css';
import Face from './assets/face.jpg';

//component for the top bootstrap navbar
export default function ChromeBar() {
  return (
    <>
      <Navbar variant='light' style={{ padding: '0px 15px 0px 15px' }}>
        <Navbar.Brand>
          <ion-icon style={{ color: 'white' }} name='apps-outline'></ion-icon>
        </Navbar.Brand>
        <h4 style={{ color: 'white' }}>dd</h4>
        <Nav className='mr-auto'>
          <Nav.Link style={{ color: 'white', paddingLeft: '30px' }}>
            trez
          </Nav.Link>
        </Nav>
        <Nav.Item className=' mr-sm-2'>
          <ion-icon style={{ color: 'white' }} name='time-outline'></ion-icon>
        </Nav.Item>
        <Nav.Item className=' mr-sm-2'>
          <ion-icon
            style={{ color: 'white' }}
            name='chatbubbles-outline'
          ></ion-icon>
        </Nav.Item>
        <Nav.Item className=' mr-sm-2'>
          <ion-icon style={{ color: 'white' }} name='bug-outline'></ion-icon>
        </Nav.Item>
        <Nav.Item className=' mr-sm-2'>
          <ion-icon style={{ color: 'white' }} name='build-outline'></ion-icon>
        </Nav.Item>
        <Nav.Item className='mr-sm-2'>
          <Image
            src={Face}
            roundedCircle
            style={{
              height: '1rem',
              width: '1rem',
              alignItems: 'center',
              margin: '0',
            }}
          />
        </Nav.Item>
        <p
          style={{
            fontSize: '16px',
            color: 'white',
            alignItems: 'center',
            margin: '0',
          }}
        >
          Mitchell Admin (gantt)
        </p>
      </Navbar>
      <br />
    </>
  );
}
