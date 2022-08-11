import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux";
import { store } from './app/store';
import { MainContainer } from './components/MainContainer';

function App() {
  return (
    <Provider store={store}>
      <MainContainer/>
    </Provider>
  );
}

export default App;
