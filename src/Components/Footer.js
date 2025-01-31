import React from 'react';
import { Link } from 'react-router-dom';
const Footer=(props)=>{
    return(
        <div className='footerclass'>
            <footer>
        <Link to={props.previouspath}><button className="footer-button">Go Back</button></Link>
    </footer>
        </div>
    )
}
export default Footer;
