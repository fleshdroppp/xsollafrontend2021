
import React from 'react';
import Event from './Event/Event'
import styles from './Events.module.css'


const Events = ({events, favouritesId, setFavouritesId}) => {

    return (
        <div className={styles.events}>
            {events.map(event =>
                <Event
                    key={event.id}
                    favouritesId={favouritesId}
                    setFavouritesId={setFavouritesId}
                    event={event}
                />)}
        </div>
    );
};

export default Events;