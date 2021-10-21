import React from 'react';
import notFavourite from '../../../static/images/favourie.svg'
import favourite from '../../../static/images/isFavourite.svg'
import styles from './Event.module.css'

const Event = ({ event, favouriteEvents, setFavouriteEvents }) => {

    const addFavouriteEvent = (event) => {
        if (favouriteEvents.indexOf(event) !== -1) {
            favouriteEvents = favouriteEvents.filter(function(item) {
                return item !== event
            })
            setFavouriteEvents(favouriteEvents)
            localStorage.setItem("favouriteEvents",JSON.stringify(favouriteEvents));
        } else {    
            setFavouriteEvents([...favouriteEvents, event])
            localStorage.setItem("favouriteEvents",JSON.stringify([...favouriteEvents, event]));
        }
        
    }

    return (
        <div className={styles.event} style={{ backgroundImage: `url(${event.image})` }}>
            <div onClick={event => addFavouriteEvent(event.target.id)} className={styles.event__favourite}>
                {favouriteEvents.indexOf(event.id) !== -1 
                    ? <img id={event.id} src={favourite} alt="favourite button" />
                    : <img id={event.id} src={notFavourite} alt="favourite button" />}
            </div>
            <div className={styles.event__date}>
                <p>{event.date.slice(0, 2)}</p>
            </div>
            <p className={styles.event__title}>
                {event.name}
            </p>
        </div>
    );
};

export default Event;