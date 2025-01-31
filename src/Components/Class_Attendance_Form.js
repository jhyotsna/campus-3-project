import React from 'react';
import Header from './Header';
import Footer from './Footer';
const Class_Attendance_Form=(props)=>{
    return(
        <>
            <Header name="Class Attendance Form" />
            <div className='class_attendance_form-page'>
            <form className='class_attendance_form-form'>
                <div className='class_attendance_form-label_input'>
                <label className='class_attendance_form-label'>{props.name} Name:</label>
                <input 
                type='text' 
                placeholder='Enter your name'
                className='class_attendance_form-input'></input>
                </div>
               <div className='class_attendance_form-label_input'>
                <label className='class_attendance_form-label'>{props.name} Id:</label>
                <input 
                type='text' 
                placeholder='Enter your ID number'
                className='class_attendance_form-input'></input>
                </div>
                <button className='attendance_form_button'>Mark My Attendance</button>
                </form>
            </div>
            <Footer previouspath={props.previouspath}/>
        </>
    );
}
export default Class_Attendance_Form;