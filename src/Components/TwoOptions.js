import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const TwoOptions = (props) => {
    return (
        <>
            <Header name={props.headername} />
            <div className='outing_leave_total'>
                <Link to={`${props.previous_path}/${props.name1}`} className='linking'>
                    <div className='outing_leave_individual'>{props.name1}</div>
                </Link>
                <Link to={`${props.previous_path}/${props.name2}`} className='linking'>
                    <div className='outing_leave_individual'>{props.name2}</div>
                </Link>
            </div>
            <Footer previouspath={props.previouspath}/>
        </>
    );
}

export default TwoOptions;
