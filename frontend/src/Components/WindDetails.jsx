import React from 'react';
import clouds from '../assets/icons/clouds.svg';
import { WiHumidity } from "react-icons/wi";
import { BsCloudsFill } from "react-icons/bs";
import { MdVisibility } from "react-icons/md";

const WindDetails = ({ weatherData }) => (
    <div>
        {weatherData?.current && (

            <div className="weather-container">
                <div className="top-section">
                    <div className="current-weather">
                        <div>
                            <img
                                src={`https:${weatherData.current.condition.icon}`}
                                alt={weatherData.current.condition.text}
                                width="94"
                                height="94" />
                        </div>
                        <div>
                            
                              <h2 className="temp"><p><strong>Temp: {weatherData.current.temp_c}°C</strong></p></h2>
                            <p>Condition: {weatherData.current.condition.text}</p>
                        </div>
                    </div>
                    <div className="wind-weather">
                        <div>

                            <p>{weatherData.current.precip_mm} mm</p>
                            <p>Precipitation</p>
                        </div>
                        <div>
                            <p>    <WiHumidity /> {weatherData.current.wind_kph} kph</p>
                            <p>Wind</p>
                        </div>
                        <div>
                            <p> {weatherData.current.humidity}%  </p>
                            <p>Humidity</p>
                        </div>
                        <div>
                            <p> {weatherData.current.uv}</p>
                            <p>UV Index </p>
                        </div>
                        <div>
                            <p><BsCloudsFill /> {weatherData.current.cloud}%</p> 
                            <p>Cloud Cover</p>
                        </div>
                        <div>
                            <p>  <MdVisibility /> {weatherData.current.vis_miles} mi </p>
                            <p> Visibility</p>
                        </div>
                    </div>

                </div>

            </div>
        )}


    </div>

);

export default WindDetails;
