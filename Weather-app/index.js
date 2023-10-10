//* 6bab9aaf64ab4007b2f71805230910

async function apiCall() {

    //* calculating dates
    const date = new Date();
    let month = date.getMonth() + 1
    let year = date.getFullYear()
    let day = date.getDate()
    let time=`${date.getHours()}:00`
    let time2=`${date.getHours()+1}:00`
    let time3=`${date.getHours()+2}:00`
    let full_date = `${year}-${month}-${day}`
    console.log(full_date);
    console.log(time);
    console.log(time2);
    console.log(time3);
    let full_time=`${full_date} ${time}`
    let full_time2=`${full_date} ${time2}`
    let full_time3=`${full_date} ${time3}`

    //* fetch the data
    // const response = await fetch('https://api.weatherapi.com/v1/current.json?key=6bab9aaf64ab4007b2f71805230910&q=goa', { mode: 'cors' })
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=6bab9aaf64ab4007b2f71805230910&q=goa&dt=${full_date}`, { mode: 'cors' })
    const response_json = await response.json()
    // const forecast_json = await response_forecast.json()

    // console.log(response_json)


    const location = await response_json.location

    const data = await response_json.current
    const forecast = await response_json.forecast.forecastday[0]

    console.log(forecast)
    // console.log(location)
    // console.log(data)

    console.log("\nLocation")
    console.log(`Location: ${location.name},${location.country}`)
    console.log(`Date and time: ${location.localtime}`)
    console.log(`Timezone: ${location.tz_id}`)

    console.log("\nWeather")
    console.log(`Temperature in Celsius: ${data.temp_c}C`)
    console.log(`Conditions: ${data.condition.text}`)
    console.log(`Feels like: ${data.feelslike_c}C`)
    console.log(`Humidity: ${data.humidity}%`)
    console.log(`Wind speed: ${data.wind_kph}Kph`)
    console.log(`Wind direction: ${data.wind_dir}`)
    console.log(`UV: ${data.uv}`)

    console.log("\nForecast")
    console.log(`Sunrise: ${forecast.astro.sunrise}`)
    console.log(`Sunset: ${forecast.astro.sunset}`)
    console.log(`Moonset: ${forecast.astro.moonset}`)
    console.log(`Moonrise: ${forecast.astro.moonrise}`)
    console.log(`Average temperature: ${forecast.day.avgtemp_c}C`)
    console.log(`Average humidity: ${forecast.day.avghumidity}%`)
    console.log(`Chance of rain: ${forecast.day.daily_chance_of_rain}%`)

    console.log("\nHours")
    // console.log(forecast.hour[2].time)
    // console.log(full_date_time)

    for (let i = 0; i < forecast.hour.length; i++) {
        if (forecast.hour[i].time==full_time || forecast.hour[i].time==full_time2 ||forecast.hour[i].time==full_time3) {
            console.log(forecast.hour[i])
        }
        
    }


    // const temps = document.getElementById('temps')
    // const condition = document.getElementById('condition')
    // const feel = document.getElementById('feel')
    // temps.textContent = `${data.temp_c}C`
    // condition.textContent = `${data.condition.text}`
    // feel.textContent = `Feels like ${data.feelslike_c}C`


}

apiCall()