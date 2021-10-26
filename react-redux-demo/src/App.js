import React from 'react';
import CakeContainer from './components/cakeContainer.js';
import HooksCakeContainer from './components/HooksCakeContainer.js';
import IceCreamContainer from './components/iceCreamContainer.js';
import HooksIceCreamContainer from './components/HooksIceCreamContainer.js';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
        <HooksIceCreamContainer />
      </div>
    </Provider>
  );
}

export default App;
