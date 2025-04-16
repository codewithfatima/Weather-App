import React, { useEffect, useState } from 'react';
import clouds from '../assets/icons/clouds.svg';

const HourlyForecast = () => {
    const [hourlyData, setHourlyData] = useState([]);
    const API_KEY = import.meta.env.VITE_API_KEY;
    const country = 'Kuwait';
    const API_URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${country}&days=1`;

    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => {
                setHourlyData(data.forecast.forecastday[0].hour);
            })
            .catch((err) => console.log.error('Failed to fetch hourly forecast', err))
    }, []);

    return (
        <div className='parent'>
            <div className='wind-details'>
                <div className="hourly-forecast">
                    <h1>Hourly Forecast</h1>
                    <ul className="weather-list">
                        {hourlyData.slice(0, 12).map((hour, index) => (
                            <li className='weather-item' key={index}>
                                <p className='time'>{hour.time.slice(11)}</p>
                                <img src={`https:${hour.condition.icon}`} alt={hour.condition.text} />
                                <p className='temp'>{hour.temp_c}°C</p>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default HourlyForecast