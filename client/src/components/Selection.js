import React, { useState } from 'react';

const Selection = ({ selectTimes, disabledTimes }) => {
  const [showMenu, setMenu] = useState(false);

//render out  the times that are available based upon the times that are  in the database

  const showDropDown = () => {
    if (showMenu === false) setMenu(true);
    else {
      setMenu(false);
      // document.removeEventListener("click",showDropDown)
    }
  };

  const onClick = (e) => {
    if (e.target.value === '9am') {
      selectTimes({
        start_time: '09:00:00',
        end_time: '11:00:00',
      });
    } else if (e.target.value === '11am') {
      selectTimes({
        start_time: '11:00:00',
        end_time: '13:00:00',
      });
    } else if (e.target.value === '1pm') {
      selectTimes({
        start_time: '13:00:00',
        end_time: '15:00:00',
      });
    } else if (e.target.value === '3pm') {
      selectTimes({
        start_time: '15:00:00',
        end_time: '17:00:00',
      });
    }
  };
  

  //if the time exist in the data bse for that specific date, then make the buttons disbaled and show the dates that are available

  return (
    <div className="dropdown">
      <button className="dropdownBtn" onClick={showDropDown}>
        Pick A Time
      </button>
      {!showMenu ? null : (
        <div className="dropdown-menu">
          <button onClick={onClick} value="9am">
            9am - 11am
          </button>
          <button onClick={onClick} value="11am">
            11am - 1pm
          </button>
          <button onClick={onClick} value="1pm">
            1pm - 3pm
          </button>
          <button onClick={onClick} value="3pm">
            3pm - 5pm
          </button>
        </div>
      )}
    </div>
  );
};
export default Selection;
