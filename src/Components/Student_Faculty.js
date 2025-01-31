import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
const Student_Faculty=(props)=>{
    return(
        <>
            <Header name={props.headername} />
            <div className='student_faculty_total'>
                <Link to='student/branches' className="link"><div>Student<div className='student'></div></div></Link>
                <Link to='faculty/branches' className="link"><div>Faculty<div className='faculty'></div></div></Link>
            </div>
            <Footer previouspath={props.previouspath}/>
        </>
    );
}
export default Student_Faculty;