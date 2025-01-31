import React, { useState } from "react";
import { ChevronDown } from "lucide-react"; // Ensure you have lucide-react installed
import { Link } from "react-router-dom";


const HomeHeader = () => {
 
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownToggle = (section) => {
    
    setOpenDropdown(openDropdown === section ? null : section);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }else {
      console.error("Section not found:", id);
    }

  };

  return (
    <header className="home-header">
      {/* Left Side: Logo */}
      <div className="home-header-left">
        <img className="logo" src="https://www.rgukt.in/images/Logonew.png" alt="RGUKT logo" />
      </div>

      {/* Center: Title */}
      <div className="home-header-center">
        <h1 className="home-title">
          <span>Rajiv Gandhi University of Knowledge Technologies,</span>
          <br /> <span>Srikakulam - Campus 3</span>
        </h1>
      </div>

      {/* Right Side: Navigation Menu */}
      <nav className="home-header-right">
        <ul className="home-nav-menu">
          {/* Utilities Dropdown */}
          <li className="home-nav-item dropdown"  >
            <span onClick={() => scrollToSection("utilities")}>Utilities</span>
            <ChevronDown
              size={16}
              onClick={() => handleDropdownToggle("utilities")} // Open the dropdown when the icon is clicked
            />
            {openDropdown === "utilities" && (
              <ul className="home-dropdown-menu">
                <Link to="/class_attendance" className="linking"><li>College Attendance</li></Link>
                <Link to="/hostel_attendance" className="linking"><li>Hostel Attendance</li></Link>
                <Link to="/it_infra" className="linking"><li>Laptop Issue</li></Link>
                <Link to="/leave_outing" className="linking"><li>Leave/Outing</li></Link>
              </ul>
            )}
          </li>

          {/* Events and About Sections */}
          <li className="home-nav-item" onClick={() => scrollToSection("events")}>Events</li>
          <li className="home-nav-item" onClick={() => scrollToSection("about")} >About</li>
        </ul>
      </nav>
    </header>
  );
};

export default HomeHeader;

