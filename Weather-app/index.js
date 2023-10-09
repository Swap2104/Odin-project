// 6bab9aaf64ab4007b2f71805230910

async function apiCall(){
    const response= await fetch('https://api.weatherapi.com/v1/current.json?key=6bab9aaf64ab4007b2f71805230910&q=goa', { mode: 'cors' })
    const response_forecast= await fetch('https://api.weatherapi.com/v1/forecast.json?key=6bab9aaf64ab4007b2f71805230910&q=goa&dt=2023-10-10', { mode: 'cors' })
    const response_json= await response.json()
    const forecast_json=await response_forecast.json()
    

    const location = await response_json.location
    const data = await response_json.current
    const forecast = await forecast_json.forecast.forecastday

    console.log(forecast)
    console.log(location)
    console.log(data)

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
    
    

}

apiCall()