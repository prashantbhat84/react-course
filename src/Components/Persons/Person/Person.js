import React from "react";
import classes from "./Person.module.css";
import Radium from "radium";

const person = props => {
  const style = {
    "@media(min-width:500px)": {
      width: "450px"
    }
  };

  return (
    <div className={classes.Person} style={style}>
      <p onClick={props.click}>
        I am a {props.name} and I am {props.age} years old.{" "}
      </p>
      <p> {props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />{" "}
      {/* pass the event object in the handler function for dynamic state update*/}
    </div>
  );
};
export default Radium(person);
