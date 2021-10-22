import React from 'react';
import notFavourite from '../../../static/images/favourie.svg'
import favourite from '../../../static/images/isFavourite.svg'
import styles from './Event.module.css'

const Event = ({ event, favouritesId, setFavouritesId }) => {

    const addFavouriteEvent = (event) => {
        if (favouritesId.indexOf(event) !== -1) {
            favouritesId = favouritesId.filter(function(item) {
                return item !== event
            })
            setFavouritesId(favouritesId)
            localStorage.setItem("favouritesId",JSON.stringify(favouritesId));
        } else {    
            setFavouritesId([...favouritesId, event])
            localStorage.setItem("favouritesId",JSON.stringify([...favouritesId, event]));
        }
        
    }

    return (
        <div className={styles.event} style={{ backgroundImage: `url(${event.image})` }}>
            <div onClick={event => addFavouriteEvent(event.target.id)} className={styles.event__favourite}>
                {favouritesId.indexOf(event.id) !== -1 
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