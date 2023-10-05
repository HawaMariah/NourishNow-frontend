import { useState } from 'react';
// import './App.css';
import EventList from './EventList';
import EventForm from './EventForm';

import Header from './Header';

const Events = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Event 1',
      description:
        'Join us for Event 1, where we come together to make a positive impact on the lives of needy children. Your support in the form of funds, food, and more is greatly appreciated!',
      date: '2023-10-10',
      location: 'Location 1',
    },
    {
      id: 2,
      title: 'Event 2',
      description:
        'Event 2 is a wonderful opportunity to make a difference. Let\'s unite to provide hope and nourishment to those in need. Your contributions matter!',
      date: '2023-10-15',
      location: 'Location 2',
    },
    {
      id: 3,
      title: 'Event 3',
      description:
        'At Event 3, we focus on empowering the future generation. Together, we can ensure a brighter tomorrow for underprivileged children. Join us on this mission!',
      date: '2023-10-20',
      location: 'Location 3',
    },
  ]);

  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  return (
    <div className="App">
      <Header />
      <marquee behavior="" direction=""><h1>Our Events...</h1></marquee>
      
      <div className="container">
        <div className="event-list">
          <EventList events={events} />
        </div>
        <div className="event-form">
          <EventForm addEvent={addEvent} />
        </div>
      </div>
    
    </div>
  );
};

export default Events;