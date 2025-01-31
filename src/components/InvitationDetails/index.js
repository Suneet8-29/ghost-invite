import React from "react";
import "./style.css";

const InvitationDetails = () => {
  const calculateDaysToGo = () => {
    const targetDate = new Date("2025-03-02");
    const currentDate = new Date();
    const diff = Math.abs(targetDate - currentDate);
    const timeDiff = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return timeDiff > 0
      ? `${timeDiff} DAYS TO GO`
      : timeDiff == 0
      ? "THE DAY HAS ARRIVED"
      : "HOPE YOU HAD A GREAT TIME";
  };
  return (
    <div className="invite_wrapper">
      <h1>SUNEET & SARITA</h1>
      <p>MARCH 02, 2025</p>
      <p>CASA ROYALE, BHUBANESWAR</p>
      <p>{calculateDaysToGo()}</p>
    </div>
  );
};

export default InvitationDetails;
