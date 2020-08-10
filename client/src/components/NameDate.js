import React, { useState } from 'react';

const NameDate = ({ setDate, localDate, setName }) => {
  //add in validation for input data 
  //fetch interviewer information from the database to display the names in the drop down menu

  const [showName, setNameBool] = useState(false);

  const showDropDown = () => {
    if (showName === false) setNameBool(true);
    else {
      setNameBool(false);
      // document.removeEventListener("click",showDropDown)
    }
  };

  const onChange = (e) => {
    setDate(e.target.value);
  };

  const onClick = (e) => {
    setName(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} placeholder="Enter a date mm/dd/yyyy" />
        <input type="submit" value="Submit" />
      </form>
      {localDate !== '' ? (
        <div className="dropdown">
          <button className="dropdownBtn" onClick={showDropDown}>
            Select An Interviewer
          </button>
          {!showName ? null : (
            <div className="dropdown-menu">
              <button onClick={onClick} value="Ash Bash">
                Ash Bash
              </button>
              <button onClick={onClick} value="Jessi J">
                Jessi J
              </button>
              <button onClick={onClick} value="E Da Black Engineer">
                E Da Black Engineer
              </button>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};
export default NameDate;
