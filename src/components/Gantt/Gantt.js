import React from 'react';
import { Table, Container } from 'react-bootstrap';
import Gantty from '../Gantty/Gantty';
import GreyboxEvents from '../GreyboxEvents/GreyboxEvents';

//Table for February Month Chart with Google Gantt Chart inside
export default function Gantt() {
  //funtion to expand the Primary(+) Button within Table to show colored Gantt chart
  function onClickHandler(e) {
    const hiddenElement = e.currentTarget.nextSibling;
    hiddenElement.className.indexOf('collapse show') > -1
      ? hiddenElement.classList.remove('show')
      : hiddenElement.classList.add('show');
  }

  return (
    <Container fluid>
      <Table bordered responsive='sm' style={{ fontSize: '14px' }}>
        <thead>
          <tr className='d-flex flex-row'>
            <th style={{ width: '270px' }}>Default Gantt View for x_trez</th>
            <tr className='d-flex flex-column' style={{ width: '100%' }}>
              <th
                style={{
                  width: '100%',
                  textAlign: 'center',
                  padding: '20px',
                  fontWeight: 'bold',
                }}
              >
                February 2019
              </th>

              <tr>
                <th>01</th>
                <th>02</th>
                <th>03</th>
                <th>04</th>
                <th>05</th>
                <th>06</th>
                <th>07</th>
                <th>08</th>
                <th>09</th>
                <th>10</th>
                <th>11</th>
                <th>12</th>
                <th>13</th>
                <th>14</th>
                <th>15</th>
                <th>16</th>
                <th>17</th>
                <th>18</th>
                <th>19</th>
                <th>20</th>
                <th>21</th>
                <th>22</th>
                <th>23</th>
                <th>24</th>
                <th>25</th>
                <th>26</th>
                <th>27</th>
                <th>28</th>
              </tr>
            </tr>
          </tr>
        </thead>
        <tbody>
          <tr onClick={onClickHandler}>
            <td
              style={{ display: 'flex', flexDirection: 'row', padding: '5px' }}
            >
              <ion-icon name='add-outline'></ion-icon>
              Primary
              <GreyboxEvents />
            </td>
          </tr>

          <div
            className='collapse'
            id='chart'
            style={{ paddingLeft: '235px', width: '100%' }}
          >
            <Gantty />
          </div>
        </tbody>
      </Table>
    </Container>
  );
}
