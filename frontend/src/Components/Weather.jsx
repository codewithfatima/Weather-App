import React, { useState, useEffect } from 'react'
import { FaSearch } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaMoon } from "react-icons/fa6";



const Weather = ({ country, setCountry, weatherData, handleSearch }) => {



    return (
        <>
            <div className="weather">
                <nav className="navbar">{
                    weatherData?.current&&(
                    <div className="location">
                        <IoLocationSharp />
                        <p>{weatherData.location.name},{weatherData.location.country}</p>
                    </div>
                    )
                    }

                    <div className="input-container">
                        <form action="" onSubmit={handleSearch} style={{ cursor: 'pointer' }} >
                            <FaSearch />

                            <input
                                type="search"
                                placeholder="Enter a city..."
                                className='search-input'
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                            />
                        </form>

                    </div>
                    <FaMoon />
                </nav>
              
            </div>
        </>
    )
}

export default Weather;