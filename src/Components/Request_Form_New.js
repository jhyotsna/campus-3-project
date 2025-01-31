import React from 'react';
import Header from './Header';
import Footer from './Footer';
const Request_Form_New=(props)=>{
    return(
        <>
            <Header name={props.headername}/>
            <div className='request_form_new-page'>
            <form className='request_form_new-form'>
                <div className='request_form_new-label_input'>
                <label className='request_form_new-label'>Student Name:</label>
                <input 
                type='text' 
                placeholder='Enter your name'
                className='request_form_new-input'></input>
                </div>
               <div className='request_form_new-label_input'>
                <label className='request_form_new-label'>Student Id:</label>
                <input 
                type='text' 
                placeholder='Enter your ID number'
                className='request_form_new-input'></input>
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
                <button className='attendance_form_button'>Request For New Laptop</button>
                </form>
            </div>
            <Footer previouspath={props.previouspath}/>
        </>
    );
}
export default Request_Form_New;