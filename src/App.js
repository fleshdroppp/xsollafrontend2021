import styles from './App.module.css'
import Header from './components/Header/Header';
import Filters from './components/Filters/Filters';
import Events from './components/Events/Events';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Loader from './components/Loader/Loader';

function App() {

    useEffect(() => {
        fetchEvents()
    }, [])

    const [events, setEvents] = useState([])
    const [filteredEvents, setFilteredEvents] = useState([])
    const [favouritesId, setFavouritesId] = useState(JSON.parse(localStorage.getItem("favouritesId")) || [])
    const [isFetching, setFetching] = useState(true)
    
    const fetchEvents = async () => {
        const response = await axios.get('https://raw.githubusercontent.com/xsolla/xsolla-frontend-school-2021/main/events.json')
        setEvents(response.data)
        setFilteredEvents(response.data)
        setFetching(false)
    }

    return (
        <div className={styles.container}>
            <div className={styles.events__container}>
                <Header />
                {isFetching 
                    ? <Loader /> 
                    : <div>
                        <Filters events={events} filteredEvents={filteredEvents} setEvents={setFilteredEvents} favouritesId={favouritesId} setFilteredEvents={setFilteredEvents}/> 
                        {filteredEvents.length ? <Events events={filteredEvents} favouritesId={favouritesId} setFavouritesId={setFavouritesId}/> : <div className={styles.empty__events}>Events wasn't found</div>}
                      </div>
                }
                
            </div>
        </div>
    );
}

export default App;
