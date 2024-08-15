import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode("dark");
      document.body.style.backgroundColor = '#283c59';
      showAlert("Enabled DarkMode", "success");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = '#9eb0cb';
      showAlert("Enabled LightMode", "success");
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextWorkability" about="About Us" home="Home" link="Link" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        {/* <div className="container my-3">
        <TextForm heading="Type here to convert" mode={mode} toggleMode={toggleMode} showAlert={showAlert}/>
      </div>
      <About mode={mode}/> */}
        <Routes>
          <Route path='/' element={<div className="container my-3">
            <TextForm heading="Type here to convert" mode={mode} toggleMode={toggleMode} showAlert={showAlert} />
          </div>} />
          <Route path='/about' element={<About mode={mode}/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
