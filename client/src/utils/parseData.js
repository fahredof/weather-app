function parseData(data) {
    if (!data.error)
        return ({
            city: data.name,
            temp: `${(data.main.temp - 273.15).toFixed(0)}°C`,
            image: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
            wind: `Wind ${data.wind.speed} m/s`,
            overcast: data.weather[0].description,
            pressure: `Pressure ${data.main.pressure} hpa`,
            humidity: `Humidity ${data.main.humidity} %`,
            coordinates: `Coordinates [${data.coord.lat}, ${data.coord.lon}]`
        });
    else
        return ({error: data.error});
}

export {
    parseData
}
