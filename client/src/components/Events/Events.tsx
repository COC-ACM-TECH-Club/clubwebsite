import React from 'react'

import "./Events.css"
import EventsCard from "./EventsCard.tsx"
import * as eventsJSON from "./events.json";

const Events: React.FC = () => {
    const event_list = eventsJSON.events;
    return (
        <center><div className="EventsPage">
            <h1 className="EventTitle">
                EVENTS & ANNOUNCEMENTS
            </h1>
            <div className="EventList">
                {event_list.map((item, index) => (
                    <EventsCard 
                        key={index}
                        name={item.name}
                        date={item.date}
                        startTime={item.startTime}
                        endTime={item.endTime}
                        location={item.location}
                        link={item.link}
                    />
                ))}
            </div>
        </div></center>
    )
}

export default Events;