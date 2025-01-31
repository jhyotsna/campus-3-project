import React from "react";
import Header from "./Header";
import Footer from "./Footer";
const Request_Status=()=>{
    return(
        <>
            <Header />
            <div className='boy_girl_total'>
                <div>Request<div className='request'></div></div>
                <div>Status<div className='status'></div></div>
            </div>
            <Footer />
        </>
    );
}
export default Request_Status;