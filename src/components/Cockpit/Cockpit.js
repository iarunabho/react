import React, { useEffect, useRef } from "react";
import classes from "./Cockpit.css";

const cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  // ComponentDidMount + ComponentDidUpdate
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    // http request
    // setTimeout(() => {
    //   alert("Saved data to cloud");
    // }, 1000);
    toggleBtnRef.current.click();
    return () => {
      console.log("[Cockpit.js cleanup work in useEffect]");
    };
  }, []);

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");
    return () => {
      console.log("[Cockpit.js cleanup work in 2nd useEffect]");
    };
  });

  const assignedClass = [];
  let btnClass = "";

  if (props.showPerson) {
    btnClass = classes.red;
  }
  if (props.personsLength <= 3) {
    assignedClass.push(classes.red);
  }
  if (props.personsLength <= 1) {
    assignedClass.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClass.join(" ")}>This is really working!</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default React.memo(cockpit);
