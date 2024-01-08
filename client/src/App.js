import { useState } from 'react';
import './App.css';
//import TestBlock from './TestBlock/TestBlock';
//import WebSocketConnection from './WebSocket/WebSocket';

const App = () => {
  const [text, setText] = useState('');
  const onClick = () => {
    setText('Hello World');
    setTimeout(() => {
      setText('');
    }, 3000);
  };

  return (
    <div className='container'>
      <div className='message-box'>
        <button className='btn' onClick={onClick}>
          Get Logs
        </button>
        <div style={{ marginTop: '20px' }}>{text}</div>
        {/* <WebSocketConnection /> */}
      </div>
      {/* <TestBlock /> */}
    </div>
  );
};

export default App;
