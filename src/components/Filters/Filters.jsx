import React, { useState } from 'react';
import Filter from './Filter/Filter';
import styles from './Filters.module.css'


const Filters = ({ events, setEvents, favouritesId, setFilteredEvents}) => {
    const [month, setMonth] = useState(events[0].date.slice(3, 5))
    const [city, setCity] = useState(events[0].city)
    const [checked, setChecked] = useState(false)

    const isFavourite = (id) => {
        return favouritesId.indexOf(id) !== -1
    }

    const showFavourite = (check) => {
        if (check) {
            setFilteredEvents([...events].filter(function (item) {
                return isFavourite(item.id)
            }))
        } else {
            setFilteredEvents([...events])
        }
        setChecked(!checked)
    } 

    const onMonthChange = (month) => {
        setMonth(month)
        console.log(city, month)
        setFilteredEvents([...events].filter(function (item) {
            return item.date.slice(3, 5) === month && item.city === city 
        }))
    }

    const onCityChange = (city) => {
        setCity(city)
        console.log(city, month)
        setFilteredEvents([...events].filter(function (item) {
            return item.date.slice(3, 5) === month && item.city === city
        }))
    }


    const resetFilters = () => {
        setEvents(events)
        setMonth('')
        setCity('')
        setChecked('')
    }

    const getOptions = (events, param) => {
        let options = []
        if (param === 'date') {
            options = events.map(event => event[param].slice(3, 5))
        } else {
            options = events.map(event => event[param])
        }
        return options.filter(function (item, pos) {
            return options.indexOf(item) === pos;
        })
    }

    return (
        <div className={styles.events__filters}>
            <Filter title={'City'} param={'city'} options={getOptions(events, 'city')} value={city} onChange={onCityChange} />
            <Filter title={'Month'} param={'date'} options={getOptions(events, 'date')} value={month} onChange={onMonthChange} />
            <div className={styles.events__filters_favourite}>
                <label htmlFor={"favourite"}>Favourite</label>
                <input checked={checked} onChange={e => showFavourite(e.target.checked)} type={"checkbox"} id={"favourite"} />
            </div>
            <button className={styles.events__filters__reset} onClick={resetFilters}>Reset filters</button>
        </div>
    );
};

export default Filters;