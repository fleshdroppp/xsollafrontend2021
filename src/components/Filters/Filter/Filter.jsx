import React from 'react';
import styles from './Filter.module.css'

const Filter = ({ title, options, param, value, onChange}) => {
    const months = {
        '01': 'January',
        '02': 'Febuary',
        '03': 'March',
        '04': 'April',
        '05': 'May',
        '06': 'June',
        '07': 'July',
        '08': 'August',
        '09': 'September',
        '10': 'October',
        '11': 'November',
        '12': 'December'
    }

    const propsToOptions = (options, param) => {
        if (param === 'date') {
            options = options.map((option, index) => <option value={option} key={index}>{months[option]}</option>)
        }
        else {
            options = options.map((option, index) => <option value={option} key={index}>{option}</option>)
        }
        return options
    }

    return (
        <div className={styles.events__filter}>
            <div className={styles.events__filter__title}>
                <p>{title}:</p>
            </div>
            <select value={value} onChange={event => onChange(event.target.value)} className={styles.events__filter__selector}>
                {options.length !== 0 ? propsToOptions(options, param) : <option>Unavailable!</option>}
            </select>
        </div>
    );
};

export default Filter;