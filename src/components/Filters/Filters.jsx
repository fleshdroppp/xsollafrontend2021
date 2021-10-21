import React, { useState } from 'react';
import Filter from './Filter/Filter';
import styles from './Filters.module.css'


const Filters = ({ events, setEvents, filteredEvents, favouriteEvents}) => {
    const [month, setMonth] = useState('')
    const [city, setCity] = useState('')
    const [checked, setChecked] = useState(false)

    const onMonthChange = (month) => {
        setMonth(month)
        setEvents([...filteredEvents].filter(function (item) {
            return item.date.slice(3, 5) === month
        }))
    }

    const onCityChange = (city) => {
        setCity(city)
        setMonth(month)
        setEvents([...filteredEvents].filter(function (item) {
            return item.city === city
        }))
    }

    const onFavouriteChange = (check) => {
        setChecked(!checked)
        if (check) {
            setEvents([...filteredEvents].filter(function (item) {
                return favouriteEvents.indexOf(item.id) !== -1
            }))
        } else {
            setEvents(events)
        }

        
    }

    const resetFilters = () => {
        console.log(checked)
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
            <Filter title={'City'} param={'city'} options={getOptions(filteredEvents, 'city')} value={city} onChange={onCityChange} />
            <Filter title={'Month'} param={'date'} options={getOptions(filteredEvents, 'date')} value={month} onChange={onMonthChange} />
            <div className={styles.events__filters_favourite}>
                <label htmlFor={"favourite"}>Favourite</label>
                <input checked={checked} onChange={event => onFavouriteChange(event.target.checked)} type={"checkbox"} id={"favourite"} />
            </div>
            <button className={styles.events__filters__reset} onClick={resetFilters}>Reset filters</button>
        </div>
    );
};

export default Filters;