import React from 'react';
import Header from './Header';
import Footer from './Footer';
const Hostel_Attendance=(props)=>{
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
                <div className='request_form_new-label_input'>
                <label className='request_form_new-label'>Hostel:</label>
                <input 
                type='text' 
                placeholder='Enter block name'
                className='request_form_new-input'></input>
                </div>
                <div className='request_form_new-label_input'>
                <label className='request_form_new-label'>Room Number:</label>
                <input 
                type='text' 
                placeholder='Enter your room number'
                className='request_form_new-input'></input>
                </div>
               
                        
                <button className='attendance_form_button'>Mark My Attendance</button>
                </form>
            </div>
            <Footer previouspath={props.previouspath} />
        </>
    );
}
export default Hostel_Attendance;