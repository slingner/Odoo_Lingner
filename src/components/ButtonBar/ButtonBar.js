import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import './ButtonBar.css';
import Dropdowns from '../Dropdowns/Dropdowns';
import Searchbar from '../Searchbar/Searchbar';

//container for all navigation buttons for Gantt chart
export default function ButtonBar() {
  return (
    <Row>
      <Col className='d-flex justify-content-start'>
        <Button
          className='p-2 text-left'
          style={{
            margin: '0 1rem 0 1rem',
            borderRadius: '0',
            maxHeight: '2.5rem',
          }}
          variant='info'
          size='sm'
        >
          ADD
        </Button>{' '}
        <Button
          variant='info'
          size='sm'
          style={{
            marginRight: '.2rem',
            borderRadius: '0',
            maxHeight: '2.5rem',
          }}
        >
          <ion-icon name='arrow-back-outline'></ion-icon>
        </Button>
        <Button
          variant='info'
          size='sm'
          style={{ borderRadius: '0', maxHeight: '2.5rem' }}
        >
          TODAY
        </Button>
        <Button
          variant='info'
          size='sm'
          style={{
            margin: '0 .2rem 0 .2rem',
            borderRadius: '0',
            maxHeight: '2.5rem',
          }}
        >
          <ion-icon name='arrow-forward-outline'></ion-icon>
        </Button>
        <Button
          variant='light'
          size='sm'
          style={{
            borderRadius: '0',
            margin: '0 1rem 0 1rem',
            maxHeight: '2.5rem',
          }}
        >
          MONTH
        </Button>
        <Button
          variant='info'
          size='sm'
          style={{
            borderRadius: '0',
            margin: '0 .2rem 0 .2rem',
            backgroundColor: 'transparent',
            border: 'none',
            color: 'teal',
            maxHeight: '2.5rem',
          }}
        >
          WEEK
        </Button>{' '}
        <Button
          variant='info'
          size='sm'
          style={{
            borderRadius: '0',
            margin: '0 .2rem 0 .2rem',
            backgroundColor: 'transparent',
            border: 'none',
            color: 'teal',
            maxHeight: '2.5rem',
          }}
        >
          <ion-icon name='resize-outline'></ion-icon>
        </Button>{' '}
        <Button
          variant='info'
          size='sm'
          style={{
            borderRadius: '0',
            backgroundColor: 'transparent',
            border: 'none',
            color: 'teal',
            maxHeight: '2.5rem',
          }}
        >
          <ion-icon name='resize-outline'></ion-icon>
        </Button>{' '}
      </Col>
      <Col
        style={{
          marginLeft: '540px',
        }}
        className='d-flex flex-column justify-content-end'
      >
        <Row>
          <Searchbar />
        </Row>
        <Row>
          <Dropdowns />
        </Row>
      </Col>
    </Row>
  );
}
