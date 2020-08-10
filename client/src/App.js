import React, { useState } from 'react';
import Selection from './components/Selection';
import NameDate from './components/NameDate';
import './App.css';

const App = () => {
  const [state, setState] = useState({
    date: '',
    start_time: '',
    end_time: '',
    selected: false,
    name: '',
  })
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [times, setTimes] = useState({start_time:'',end_time:''});
  const [disabledTimes, setDisabled] = useState([])
  
  const onClick = () => {
    setState({
      date: date,
      start_time: times.start_time,
      end_time: times.end_time,
      selected: true,
      name: name,
    });
  }

  //do a fetch request to check the date for times in the database 
  //insert in mock data for all of the interviewers with time slots
  //
  
  
  return (
    <div className="App">
      <NameDate setDate={setDate} setName={setName} localDate={date} />
      {date !== '' ? <Selection selectTimes={setTimes} disabledTimes={disabledTimes} /> : null}
      {times.start_time !== ''  ? (
        <button onClick={onClick} className="confirm">
          Confirm Appointment
        </button>
      ) : (
        <button disabled className="confirm">
          Confirm Appointment
        </button>
      )}
    </div>
  );
};

export default App;
