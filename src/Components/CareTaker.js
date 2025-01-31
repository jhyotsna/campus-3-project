import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const CareTaker = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [requests, setRequests] = useState([
        { id: 1, name: "Manikanta Alamanda", type: "leave", academic_year: "4th Year", mobile_number: "9876543210", out_date: "2025-02-01", reason: "Personal work", status: null },
        { id: 2, name: "Devika Boddepalli", type: "leave", academic_year: "4th Year", mobile_number: "9876543211", out_date: "2025-02-02", reason: "Family emergency", status: null },
        { id: 3, name: "Jhyotsna Yandrapu", type: "outing", academic_year: "1st Year", mobile_number: "9876543212", out_date: "2025-02-03", reason: "Friend's wedding", status: null },
        { id: 4, name: "Komali Surada", type: "outing", academic_year: "10th Class", mobile_number: "9876543213", out_date: "2025-02-04", reason: "Personal work", status: null },
        { id: 5, name: "Sandeep Kollepara", type: "leave", academic_year: "4th Year", mobile_number: "9876543214", out_date: "2025-02-05", reason: "Medical leave", status: null },
        { id: 6, name: "Janaki Ram Pindi", type: "outing", academic_year: "6th Year", mobile_number: "9876543215", out_date: "2025-02-06", reason: "Sports event", status: null },
        { id: 7, name: "Vinay Anandha Raju Patnala", type: "outing", academic_year: "4th Year", mobile_number: "9876543216", out_date: "2025-02-07", reason: "Vacation", status: null }
    ]);

    const handleAccept = (id, event) => {
        event.stopPropagation();
        setRequests(requests.map(req => 
            req.id === id ? { ...req, status: "accepted" } : req
        ));
    };

    const handleReject = (id, event) => {
        event.stopPropagation();
        setRequests(requests.filter(req => req.id !== id)); // Remove request on rejection
    };

    return (
        <>
            <Header name="Leave/Outing Requests" />
            <div className="total_caretaker_page">
                <div className="search_field">
                    <div>
                        <input
                            type="text"
                            placeholder="Search Student Name"
                            className="search_field_input"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button className="search_field_search_icon">
                            <img
                                className="search_icon"
                                src="https://static-00.iconduck.com/assets.00/search-icon-2048x2048-cmujl7en.png"
                                alt="Search"
                            />
                        </button>
                    </div>
                    <div>
                        <img className="profile-icon" src="https://cdn-icons-png.flaticon.com/512/6522/6522516.png" alt="Profile" />
                    </div>
                </div>

                <div className="caretaker_cards">
                    <div className="caretaker_card">
                        <h2>Leave Requests</h2>
                        {requests
                            .filter(req => req.type === "leave" && req.name.toLowerCase().includes(searchQuery.toLowerCase()))
                            .map((req) => (
                                <div key={req.id} className={`individual_card ${req.status === "accepted" ? "accepted_card" : ""}`}>
                                    <Link to="/leave_outing/Caretaker/request_card" state={{ ...req }} className="card-content linking">
                                        <div>{req.name}</div>
                                    </Link>
                                    <div>
                                        <button 
                                            className="accept" 
                                            onClick={(e) => handleAccept(req.id, e)} 
                                            disabled={req.status !== null}
                                        >
                                            Accept
                                        </button>
                                        <button 
                                            className="reject" 
                                            onClick={(e) => handleReject(req.id, e)}
                                            disabled={req.status !== null}
                                        >
                                            Reject
                                        </button>
                                    </div>
                                </div>
                            ))}
                    </div>

                    <div className="caretaker_card">
                        <h2>Outing Requests</h2>
                        {requests
                            .filter(req => req.type === "outing" && req.name.toLowerCase().includes(searchQuery.toLowerCase()))
                            .map((req) => (
                                <div key={req.id} className={`individual_card ${req.status === "accepted" ? "accepted_card" : ""}`}>
                                    <Link to="/leave_outing/Caretaker/request_card" state={{ ...req }} className="card-content linking">
                                        <div>{req.name}</div>
                                    </Link>
                                    <div>
                                        <button 
                                            className="accept" 
                                            onClick={(e) => handleAccept(req.id, e)} 
                                            disabled={req.status !== null}
                                        >
                                            Accept
                                        </button>
                                        <button 
                                            className="reject" 
                                            onClick={(e) => handleReject(req.id, e)}
                                            disabled={req.status !== null}
                                        >
                                            Reject
                                        </button>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default CareTaker;
