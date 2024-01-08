import './App.css';
import Navbar from './components/Navbar';
import News from './components/News'
import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default function App(){
  const pageSize=12;
  const apiKey = process.env.REACT_APP_NEWS_API;
  // const [mode,setMode] = useState('light');

 
    // let toggleMode = () => {
    //   if (state.mode === 'light') {
    //     setState({ mode: 'dark', textColor: 'light' });
    //   } else {
    //     setState({ mode: 'light', textColor: 'dark' });
    //   }
    // }
   
    return (
      <div>
        <Router>

          <Navbar  />
          <Routes>
            <Route exact path="/" element={<News key="general" apiKey={apiKey} pageSize={pageSize} country="in" category="general" />} ></Route>
            <Route exact path="/general" element={<News key="general" apiKey={apiKey} pageSize={pageSize} country="in" category="general" />} ></Route>
            <Route exact path="/business" element={<News key="business" apiKey={apiKey} pageSize={pageSize} country="in" category="business" />} ></Route>
            <Route exact path="/technology" element={<News key="technology" apiKey={apiKey} pageSize={pageSize} country="in" category="technology" />} ></Route>
            <Route exact path="/health" element={<News key="health" apiKey={apiKey} pageSize={pageSize} country="in" category="health" />} ></Route>
            <Route exact path="/sports" element={<News key="sports" apiKey={apiKey} pageSize={pageSize} country="in" category="sports" />} ></Route>
            <Route exact path="/science" element={<News key="science" apiKey={apiKey} pageSize={pageSize} country="in" category="science" />} ></Route>
          </Routes>
        </Router>
      </div>

    )
  
}

