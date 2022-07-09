// import logo from './logo.svg';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Alert from './Components/Alert';

// import { type } from '@testing-library/user-event/dist/type';

function App() {
  const [mode, setmode] = useState('light');
  const [msg, setmsg] = useState('Darkm ode');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msgs: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === 'dark') {
      setmode('light');
      setmsg('DarkMode');
      document.body.style.backgroundColor = 'white';
      showAlert('light mode is enable', 'success');
      // console.log(message);
    } else {
      setmode('dark');
      setmsg('lightMode');

      document.body.style.backgroundColor = 'black';
      showAlert('dark mode is enable', 'success');
    }
  };
  return (
    <BrowserRouter>
      {/* <Navbar
        title="TextUtiles"
        mode={mode}
        toggle={toggleMode}
        message={msg}
        />
        // <Alert alert={alert} 
        <About />
      <Textform mode={mode} set={showAlert} /> */}

      <Alert alert={alert} />
      <Navbar
        title="TextUtiles"
        mode={mode}
        toggle={toggleMode}
        message={msg}
        path="/textbox"
      />
      <Routes>
        <Route
          path="/textbox"
          element={<Textform mode={mode} set={showAlert} />}
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
