import styles from './App.module.css'
import Header from './components/Header/Header';
import Filters from './components/Filters/Filters';
import Events from './components/Events/Events';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

    useEffect(() => {
        fetchEvents()
    }, [])

    const [events, setEvents] = useState([])
    const [filteredEvents, setFilteredEvents] = useState([])
    const [favouriteEvents, setFavouriteEvents] = useState(JSON.parse(localStorage.getItem("favouriteEvents")))

    
    const fetchEvents = async () => {
        const response = await axios.get('https://raw.githubusercontent.com/xsolla/xsolla-frontend-school-2021/main/events.json')
        setEvents(response.data)
        setFilteredEvents(response.data)
    }

    return (
        <div className={styles.container}>
            <div className={styles.events__container}>
                <Header />
                <Filters events={events} filteredEvents={filteredEvents} setEvents={setFilteredEvents} favouriteEvents={favouriteEvents}/>
                <Events events={filteredEvents} favouriteEvents={favouriteEvents} setFavouriteEvents={setFavouriteEvents}/>
            </div>
        </div>
    );
}

export default App;
