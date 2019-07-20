import React, { Fragment } from "react";
import spinner from "./spinner.gif";

const Spinner = () => {
  return (
    <Fragment>
      <img
        src={spinner}
        alt='loading...'
        style={{ display: "block", width: "200px", margin: "0 auto" }}
      />
    </Fragment>
  );
};

export default Spinner;
