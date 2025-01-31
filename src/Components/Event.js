import React from "react";

const Events = () => {
  return (
    <div className="events">
      <h2 className="events-heading">Events</h2>
      <div className="event-sections">
        
        {/* Event 1 */}
        <div className="event-item">
          <h3 className="event-title">TechZit</h3>
          <img 
            src="https://pbs.twimg.com/media/DxGZJsRUcAARp8E.jpg:large" 
            alt="TechZit" 
            className="event-image" 
          />
          <p className="event-description">
            The Annual Tech Fest is a celebration of innovation, featuring hackathons, coding competitions, and expert talks.
          </p>
        </div>

        {/* Event 2 */}
        <div className="event-item">
          <h3 className="event-title">Cultural Night</h3>
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDdaiJa0HmdixVkIkaY75nuwhDAq0MWmse2yR7j1cjuCyb3VFhUz_jmlDFxEEEvcxnHNI&usqp=CAU" 
            alt="Cultural Night" 
            className="event-image" 
          />
          <p className="event-description">
            Cultural Night brings together students to showcase their talents in music, dance, and drama, celebrating diversity.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Events;
