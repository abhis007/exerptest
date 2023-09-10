import axios from 'axios'
export interface ForecastModel {
    latitude: number,
    longitude: number,
    elevation: number,
    current_weather: {
        temperature: number,
        windspeed: number,
        winddirection: number,
        weathercode: number,
        time: Date
    }
}


export async function getWeatherForecast(lat: number, lng: number): Promise<ForecastModel> {

 
    const apiUrl = 'https://api.open-meteo.com/v1/forecast'

    const response = await axios.get(apiUrl, {
        params: {
            latitude :lat,
            longitude :lng,
            current_weather: true,
        },
        });
     
  
    return {
        latitude: response.data.latitude,
        longitude:response.data.longitude,
        elevation: response.data.elevation,
        current_weather: {
            temperature: response.data.current_weather.temperature,
            windspeed: response.data.current_weather.windspeed,
            winddirection: response.data.current_weather.winddirection,
            weathercode:response.data.current_weather.weathercode,
            time:response.data.current_weather.time,
        }
    };
}
