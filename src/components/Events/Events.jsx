
import React from 'react';
import Event from './Event/Event'
import styles from './Events.module.css'


const Events = ({events, favouriteEvents, setFavouriteEvents}) => {

    return (
        <div className={styles.events}>
            {events.length ? events.map(event =>
                <Event
                    key={event.id}
                    favouriteEvents={favouriteEvents}
                    setFavouriteEvents={setFavouriteEvents}
                    event={event}
                />) : <div className={styles.empty__events}>Empty events!</div>}
        </div>
    );
};

export default Events;