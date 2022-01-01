import React from 'react';
import Chart from './components/Chart';

function App() {
  return (
    <div className="App" style={ {display: 'flex', justifyContent: 'center' } }>
      <div style={ {width: '70%' } }>
      <Chart />
      </div>
    </div>
  );
}

export default App;
