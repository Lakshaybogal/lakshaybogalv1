import React from 'react';
// import { BrowserRouter as Router,Route,Routes,link} from 'react-router-dom';
import './App.css';
import Loading from './loading';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();
function App() {
  return (
    <div className='center'>
      <Loading/>
    </div>
  );
}

export default App;
