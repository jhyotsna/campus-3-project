import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
const New_Repair_Replace=(props)=>{
    return(
        <>
            <Header name={props.headername} />
            <div className='new_repair_replace_total'>
                <Link to='/it_infra/new' className="linking"><div>New<div className='new'></div></div></Link>
                <Link to='/it_infra/repair' className="linking"><div>Repair<div className='repair'></div></div></Link>
                <Link to='/it_infra/replace' className="linking"><div>Replace<div className='replace'></div></div></Link>
            </div>
            <Footer previouspath={props.previouspath}/>
        </>
    );
}
export default New_Repair_Replace;
