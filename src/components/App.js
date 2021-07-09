import React from 'react';
import './App.css';
import Calendar from './CustomCalendar';
import virus from '../assests/svg/virus.svg';
import Navbar from './Navbar';
import CountryInput from './CountryInput';
import CustomAnimatedNumber from './CustomAnimatedNumber';
import API from '../api/api';
import './mobile.css'

function App() {
  var api = new API();
  return (
    <div className="App">
      <Navbar />
      <CountryInput api_obj={api} />
      <Calendar api_obj={api} />
      <img className='virus-img-1 virus-logo' style={{ filter: 'var(--filter-yellow)' }} src={virus} alt="virus" />
      <CustomAnimatedNumber caseType='Cases' number={103243200} textColor='white' />
      <CustomAnimatedNumber caseType='Death' number={10326500} textColor='rgb(255, 39, 39)' />
      <CustomAnimatedNumber caseType='Recovered' number={12034500} textColor='rgb(15, 214, 108)' />
      <img className='virus-img-2 virus-logo' style={{ filter: 'var(--filter-blue)' }} src={virus} alt="virus" />
    </div>
  );
}

export default App;
