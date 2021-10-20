import React from 'react';
import CakeContainer from './components/cakeContainer.js';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
