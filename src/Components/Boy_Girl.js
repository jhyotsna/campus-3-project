import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Boy_Girl = (props) => {
  return (
    <>
      <Header name={props.headername} />
      <div className='boy_girl_total'>
        <Link to={`${props.previous_path}/boy`} className="linking">
          <div>Boy<div className='boy'></div></div>
        </Link>
        <Link to={`${props.previous_path}/girl`} className="linking">
          <div>Girl<div className='girl'></div></div>
        </Link>
      </div>
      <Footer previouspath={props.previouspath} />
    </>
  );
};

export default Boy_Girl;
