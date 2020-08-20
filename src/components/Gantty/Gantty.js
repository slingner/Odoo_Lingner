import React from 'react';
import { Chart } from 'react-google-charts';

//React-Google-Chart Gantt Chart
export default function Gantty() {
  return (
    <>
      <Chart
        width={'100%'}
        height={'600px'}
        chartType='Gantt'
        loader={<div>Loading Chart</div>}
        data={[
          [
            { type: 'string', label: 'Task ID' },
            { type: 'string', label: 'Task Name' },
            { type: 'string', label: '' },
            { type: 'date', label: 'Start Date' },
            { type: 'date', label: 'End Date' },
            { type: 'number', label: 'Duration' },
            { type: 'number', label: 'Percent Complete' },
            { type: 'string', label: 'Dependencies' },
          ],
          [
            'a',
            '',
            'Plan Existing      Create',
            new Date(2019, 1, 3),
            new Date(2019, 1, 7),
            null,
            100,
            null,
          ],
          [
            'b',
            '',
            'Plan Existing      Create',
            new Date(2019, 1, 20),
            new Date(2019, 1, 21),
            null,
            100,
            null,
          ],
          [
            'f',
            '',
            'Create      Plan Existing',
            new Date(2019, 1, 15),
            new Date(2019, 1, 20),
            null,
            100,
            null,
          ],
          [
            'h',
            '',
            'Plan Existing      Create',
            new Date(2019, 1, 10),
            new Date(2019, 1, 21),
            null,
            100,
            null,
          ],
          [
            'jkkashdksdahkasd',
            '',
            'Plan Existing      Create',
            new Date(2019, 1, 11),
            new Date(2019, 1, 20),
            null,
            50,
            null,
          ],
          [
            'i',
            '',
            'Create      Plan Existing',
            new Date(2019, 1, 19),
            new Date(2019, 1, 20),
            null,
            0,
            null,
          ],
          [
            'k',
            '',
            'Plan Existing      Create',
            new Date(2019, 1, 17),
            new Date(2019, 1, 20),
            null,
            0,
            null,
          ],
          [
            'j',
            '',
            'Plan Existing      Create',
            new Date(2019, 1, 12),
            new Date(2019, 1, 25),
            null,
            0,
            null,
          ],
          [
            'jfhfsdkjhsfjksfh',
            '',
            'Create      Plan Existing',
            new Date(2019, 1, 5),
            new Date(2019, 1, 6),
            null,
            100,
            null,
          ],
          [
            'l',
            '',
            'Plan Existing      Create',
            new Date(2019, 1, 4),
            new Date(2019, 1, 6),
            null,
            14,
            null,
          ],
          [
            'm',
            '',
            'Plan Existing      Create',
            new Date(2019, 1, 4),
            new Date(2019, 1, 6),
            null,
            86,
            null,
          ],
          [
            'cd',
            '',
            'Create      Plan Existing',
            new Date(2019, 1, 5),
            new Date(2019, 1, 9),
            null,
            89,
            null,
          ],
        ]}
        options={{
          title: 'February 2019',
          height: 400,
          width: '1400',
          gantt: {
            trackHeight: 30,
          },
        }}
        rootProps={{ 'data-testid': '2' }}
      />
    </>
  );
}
