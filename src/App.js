import './App.css';
import Navbar from './components/Navbar';
import News from './components/News'
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default function App() {
  const pageSize = 12;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [mode, setMode] = useState('light');
  const [textColor, setTextColor] = useState('light');
  const [backgroundColor, setBackgroundColor] = useState('#e3f2fd');
  const [buttonMode, setButtonMode] = useState('primary');
  document.body.style.backgroundColor = mode==='light'?'white':'black';

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setTextColor('white');
      setBackgroundColor('#1e262e');
      setButtonMode('secondary');
      document.body.style.color = 'white';
    } else {
      setMode('light');
      setTextColor('black');
      setBackgroundColor('white');
      setButtonMode('primary');
      document.body.style.color = 'black';
    }
  }

  return (
    <div>
      <Router>
        <Navbar mode={mode} textColor={textColor} backgroundColor={backgroundColor} toggleMode={toggleMode} />
        <Routes>
          <Route exact path="/" element={<News key="general" apiKey={apiKey} buttonMode={buttonMode} toggleMode={toggleMode} pageSize={pageSize} country="in" mode={mode} textColor={textColor} backgroundColor={backgroundColor} category="general" />} ></Route>
          <Route exact path="/general" element={<News key="general" apiKey={apiKey} buttonMode={buttonMode} toggleMode={toggleMode} pageSize={pageSize} country="in" mode={mode} textColor={textColor} backgroundColor={backgroundColor} category="general" />} ></Route>
          <Route exact path="/business" element={<News key="business" apiKey={apiKey} buttonMode={buttonMode} toggleMode={toggleMode} pageSize={pageSize} country="in" mode={mode} textColor={textColor} backgroundColor={backgroundColor} category="business" />} ></Route>
          <Route exact path="/technology" element={<News key="technology" apiKey={apiKey} buttonMode={buttonMode} toggleMode={toggleMode} pageSize={pageSize} country="in" mode={mode} textColor={textColor} backgroundColor={backgroundColor} category="technology" />} ></Route>
          <Route exact path="/health" element={<News key="health" apiKey={apiKey} buttonMode={buttonMode} toggleMode={toggleMode} pageSize={pageSize} country="in" mode={mode} textColor={textColor} backgroundColor={backgroundColor} category="health" />} ></Route>
          <Route exact path="/sports" element={<News key="sports" apiKey={apiKey} buttonMode={buttonMode} toggleMode={toggleMode} pageSize={pageSize} country="in" mode={mode} textColor={textColor} backgroundColor={backgroundColor} category="sports" />} ></Route>
          <Route exact path="/science" element={<News key="science" apiKey={apiKey} buttonMode={buttonMode} toggleMode={toggleMode} pageSize={pageSize} country="in" mode={mode} textColor={textColor} backgroundColor={backgroundColor} category="science" />} ></Route>
        </Routes>
      </Router>
    </div>

  )

}

