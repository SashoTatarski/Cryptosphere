import React from 'react';
import { Provider } from 'react-redux';
import { Login } from './components';
import store from './redux/store';

const App = () => {
  return (
    <div>
      <Provider store={store}></Provider>
    </div>
  );
};

export default App;
