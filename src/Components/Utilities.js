import React from 'react';
import { Link } from 'react-router-dom';


const Utilities = () => {
  return (
    <div className="utilities">
      {/* Heading */}
      <h2 className="utilities-heading">Utilities</h2>

      {/* Sections */}
      <div className="utility-sections">
        <Link to="/class_attendance" className='linking utility-item'> <div >College Attendance</div></Link>
        <Link to="/hostel_attendance" className='linking utility-item'><div >Hostel Attendance</div></Link>
        <Link to="/it_infra" className='linking utility-item'><div >Laptop Issue</div></Link>
       <Link to="/leave_outing" className='linking utility-item'> <div >Leave/Outing</div></Link>
      </div>
    </div>
  );
};

export default Utilities;
