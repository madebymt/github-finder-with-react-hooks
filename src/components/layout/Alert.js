import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";

const Alert = () => {
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;
  return (
    alert !== null && (
      <div className={`alert ${alert.type}`}>
        <i className='fas fa-inbox' />
        <p>{alert.msg}</p>
      </div>
    )
  );
};

export default Alert;
