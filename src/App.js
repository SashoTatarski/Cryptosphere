import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Chart from './components/Chart';

const App = () => {
  return (
    <div className="App" style={ {display: 'flex', justifyContent: 'center' } }>
      <Provider store={store}></Provider>
      <div style={ {width: '70%' } }>
      <Chart />
      </div>
    </div>
    
  );
};

export default App;
