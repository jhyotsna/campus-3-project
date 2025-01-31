import React from 'react';
import { Link } from 'react-router-dom';
const Footer2=(props)=>{
    return(
        <div className='footerclass2'>
            <footer>
        <Link to={props.previouspath}><button className="footer-button">Go Back</button></Link>
    </footer>
        </div>
    )
}
export default Footer2;
