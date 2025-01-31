import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Footer2 from "./Footer2";

const Leave_Out_In_Out = (props) => {
    return (
        <>
        <Header name={props.headername}/>
        <div>
            <form className="leave_out_in-form">
                <div className="leave_out_in-form_div">
                    <div className="leave_out_in_side">
                        <div className="leave_out_label_input">
                            <label className="leave_out_input_label">Name:</label>
                            <input 
                                type="text" 
                                name="name" 
                                placeholder="Enter your name"
                                className="leave_out_input"
                            />
                        </div>
                        <div className="leave_out_label_input">
                            <label className="leave_out_input_label">Student Id:</label>
                            <input 
                                type="text" 
                                name="studentId"
                                placeholder="Enter your ID number"
                                className="leave_out_input"
                            />
                        </div>
                        <div className="leave_out_label_input">
                            <label className="leave_out_input_label">Hostel Room Number:</label>
                            <input 
                                type="text" 
                                name="roomNumber"
                                placeholder="Enter your room number"
                                className="leave_out_input"
                            />
                        </div>
                        <div className="leave_out_label_input">
                            <label className="leave_out_input_label">Academic Year:</label>
                            <select name="academicYear" className="leave_out_input_section">
                                <option>Select</option>
                                <option>E3</option>
                                <option>E4</option>
                            </select>
                        </div>
                        <div className="leave_out_label_input">
                            <label className="leave_out_input_label">Branch:</label>
                            <select name="branch" className="leave_out_input_section">
                                <option>Select</option>
                                <option>CSE</option>
                                <option>ECE</option>
                                <option>EEE</option>
                                <option>CE</option>
                                <option>MECH</option>
                            </select>
                        </div>
                        <div className="leave_out_label_input">
                            <label className="leave_out_input_label">Section:</label>
                            <select name="section" className="leave_out_input_section">
                                <option>Select</option>
                                <option>A</option>
                                <option>B</option>
                                <option>C</option>
                                <option>D</option>
                                <option>E</option>
                                <option>F</option>
                            </select>
                        </div>
                    </div>

                    <div className="leave_out_in_side">
                        <div className="leave_out_label_input">
                            <label className="leave_out_input_label">Student Mobile Number:</label>
                            <input 
                                type="text" 
                                name="studentMobile" 
                                className="leave_out_input"
                                placeholder="Enter your mobile number"
                            />
                        </div>

                        {props.name === "Out" && (
                            <>
                                <div className="leave_out_label_input">
                                    <label className="leave_out_input_label">Parent Name:</label>
                                    <input 
                                        type="text"
                                        name="parentName"
                                        className="leave_out_input"
                                        placeholder="Enter your Parent Name"
                                    />
                                </div>
                                <div className="leave_out_label_input">
                                    <label className="leave_out_input_label">Parent Mobile Number:</label>
                                    <input 
                                        type="text" 
                                        name="parentMobile"
                                        className="leave_out_input"
                                        placeholder="Enter your parent mobile number"
                                    />
                                </div>
                            </>
                        )}
                        
                        <div className="leave_out_label_input">
                            <label className="leave_out_input_label">{props.name} Date:</label>
                            <input 
                                type="date"
                                name={`${props.name}Date`}
                                className="leave_out_input"
                            />
                        </div>
                        <div className="leave_out_label_input">
                            <label className="leave_out_input_label">{props.name} Time:</label>
                            <input 
                                type="time" 
                                name={`${props.name}Time`} 
                                className="leave_out_input"
                            />
                        </div>
                        
                        {props.name === "Out" && (
                            <>
                                <div className="leave_out_label_input">
                                    <label className="leave_out_input_label">Address:</label>
                                    <input 
                                        type="text" 
                                        name="address"
                                        className="leave_out_input" 
                                        placeholder="Enter your address"
                                    />
                                </div>
                                <div className="leave_out_label_input">
                                    <label className="leave_out_input_label">Reason:</label>
                                    <input 
                                        type="text"
                                        name="reason" 
                                        className="leave_out_input"
                                        placeholder="Enter the reason"
                                    />
                                </div>
                            </>
                        )}
                    </div>
                </div>
                <button className="leave_out_in_button">
                    {props.name === "In" ? "Coming In" : "Going Out"}
                </button>
            </form>
        </div>
        <Footer2 previouspath={props.previouspath}/>
        </>
    );
};

export default Leave_Out_In_Out;
