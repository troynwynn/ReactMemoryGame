import React from "react";

function Wrapper(props) {
  console.log(props);
  return <div className={props.shake ? "container shake" : "container" }>{props.children}</div>;
}

export default Wrapper;
