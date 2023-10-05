// EventForm.js
import React, { useState } from 'react';

const EventForm = ({ addEvent }) => {
  const [event, setEvent] = useState({ title: '', description: '', date: '', location: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (event.title.trim() !== '' && event.description.trim() !== '' && event.date.trim() !== '' && event.location.trim() !== '') {
      addEvent(event);
      setEvent({ title: '', description: '', date: '', location: '' });
    }
  };

  return (
    <div>
      <h2>Add Event</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Event Title"
          value={event.title}
          onChange={(e) => setEvent({ ...event, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Event Description"
          value={event.description}
          onChange={(e) => setEvent({ ...event, description: e.target.value })}
        />
        <input
          type="date"
          placeholder="Event Date"
          value={event.date}
          onChange={(e) => setEvent({ ...event, date: e.target.value })}
        />
        <input
          type="text"
          placeholder="Event Location"
          value={event.location}
          onChange={(e) => setEvent({ ...event, location: e.target.value })}
        />
        <button type="submit">Add Event</button>
      </form>
    </div>
  );
};

export default EventForm;