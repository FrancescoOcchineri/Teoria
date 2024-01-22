import React from 'react';
import './App.css';
import MyFuncComponent from './components/MyFuncComponent';

function App() {
  return (
    <>
      <MyFuncComponent subTitle={'Sono il componente figlio di App'} num={10} />
    </>
  );
}

export default App;
