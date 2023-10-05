import React from 'react';
import eventImage from '../images/children1.jpg'; // Corrected image path

const EventList = ({ events }) => {
  return (
    <div>
      <h2>Event List</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <div className="event-info">
              <img src={eventImage} alt={`Event ${event.id}`} />
              <div className="event-details">
                <h3>{event.title}</h3>
                <p>Date: {event.date}</p>
                <p>Location: {event.location}</p>
                <p>{event.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;