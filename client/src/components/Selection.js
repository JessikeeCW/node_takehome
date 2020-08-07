import React, { useState } from 'react';

const Selection = ({}) => {
  const [showMenu, setMenu] = useState(false);
  const [disableFirst, setFirst] = useState(true);
  const [disableSecond, setSecond] = useState(true);
  const [disableThird, setThird] = useState(true);
  const [disableFourth, setFourth] = useState(true);


  // const [disableTimes, setTimes] = useState();

  const showDropDown = () => {
    if (showMenu === false) setMenu(true);
    else {
      setMenu(false)
      // document.removeEventListener("click",showDropDown)
    };
  }
//   const checkDateAndTime = (e) => {
   
  
// }
  
  const firstInterval = (e) => {
    setFirst(false);
    //send information to save to the db
  }
  const secondInterval = (e) => {
    setSecond(false);
    //send information to save to the db
  }
  const thirdInterval = (e) => {
    setThird(false);
    //send information to save to the db
  }
  const fourthInterval = (e) => {
    setFourth(false);
    //send information to save to the db
  }


  //if the date and time exist in the database display as disabled

  return (
    <div className="dropdown">
      <button
        className="dropdownBtn"
        onClick={showDropDown}
      >
        Large button
        </button>
      {!showMenu ? null :
        <div className="dropdown-menu" >
          {disableFirst ? <button onClick={firstInterval}>9am - 11am</button> : <button disabled>9am - 11am</button>}
          {disableSecond ? <button onClick={secondInterval}>11am - 1pm</button> : <button disabled>11am - 1pm</button>}
          {disableThird ? <button onClick={thirdInterval}>11am - 1pm</button> : <button disabled>1pm - 3pm</button>}
          {disableFourth ? <button onClick={fourthInterval}>11am - 1pm</button> : <button disabled>3pm - 5pm</button>}
        </div>
      }
      </div>
      
    
  );
};
export default Selection;
