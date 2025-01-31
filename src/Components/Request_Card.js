import React from "react";
import { useLocation } from "react-router-dom";

const Request_Card = () => {
    const location = useLocation();
    const { id, name, academic_year, mobile_number, out_date, reason } = location.state || {};

    return (
        <div className="request_card-container">
            <label className="request_label">Name: {name}</label>
            <label className="request_label">ID No: {id}</label>
            <label className="request_label">Year: {academic_year}</label>
            <label className="request_label">Phone Number: {mobile_number}</label>
            <label className="request_label">Out Date: {out_date}</label>
            <label className="request_label">Reason: {reason}</label>
            <button className="request_accept">Accept</button>
            <button className="request_reject">Reject</button>
        </div>
    );
};

export default Request_Card;

