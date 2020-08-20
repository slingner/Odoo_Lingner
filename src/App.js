import React from 'react';
import ChromeBar from '../src/components/ChromeBar/ChromeBar';
import ButtonBar from '../src/components/ButtonBar/ButtonBar';
import Gantt from '../src/components/Gantt/Gantt';

function App() {
  return (
    <main className='App'>
      <ChromeBar />
      <h2 style={{ fontSize: '26px', fontWeight: 'bold', paddingLeft: '1rem' }}>
        trez
      </h2>
      <ButtonBar />
      <Gantt />
    </main>
  );
}

export default App;
