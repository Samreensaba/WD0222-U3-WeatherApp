
import "bootstrap/dist/css/bootstrap.min.css"
import {useState} from 'react'

const api={
  key:"1c883548f975ddcaa3c1ba05a78d91b3",
  base:"https://api.openweathermap.org/data/2.5/"
}

function App() {

  const [query, setQuery]=useState('')
  const [weather, setWeather]=useState({})

  const search = async(evt)=>{
    if(evt.key ==='Enter'){
      const response = await fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      const data = await response.json()
      setWeather(data)
      console.log(data)
      setQuery('')
    }
  }

  const dateBuilder = (d)=>{
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    let day= days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year= d.getFullYear();

    return`${day} ${date} ${month} ${year}`
  }
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search...." onChange={e=> {setQuery(e.target.value)}}
          value={query}
          onKeyPress={search}/>
        </div>
        {weather.main&&
        <div>
        <div className="location-box">
          <div className="location">{weather.name}, {weather.sys.country}</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
        </div> 
          }
        <div className="weather-box">
          <div className="temp">{Math.round(weather.main.temp)}&#176; C</div>
          <div className="weather">{weather.weather[0].main}</div>
        </div>
      </main>
    </div>
    
  );
}

export default App;
