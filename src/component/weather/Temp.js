import React, { useEffect, useState } from "react";
import "./style.css";
import WeatherCard from "./WeatherCard";


const Temp = () => {
  const [searchValue , setSearchValue]=useState("pune");
  const [tempInfo,setTempInfo]=useState({});
  const getWeatherInfo=async ()=>{
  try {
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=be3e559be2f9044856e1d626bf3f1dda`;
    const res=await fetch(url);
    const data=await res.json();
    console.log(data);
    const {temp,pressure, humidity}=data.main;
    const {main:weathermood}=data.weather[0];
    const{speed}=data.wind;
    const {country,sunset}=data.sys;
    const {name}=data;

    const mynewWeatherInfo={
      temp,pressure, humidity,weathermood,speed,country,sunset,name, 
    };
    setTempInfo(mynewWeatherInfo);
    // console.log(temp);
  } catch (error) {
    console.log(error)
  }
};
  useEffect(()=>{
    getWeatherInfo();
  },[]);
  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search..."
            autoFocus
            id="search"
            className="seachItem"
            value={searchValue}
            onChange={(e)=>{setSearchValue(e.target.value)}}
          />
          <button className="searchButton" type="button" onClick={getWeatherInfo}>
            Search
          </button>
        </div>
      </div>
      <WeatherCard tempInfo={tempInfo}/>
    </>
  );
};

export default Temp;
