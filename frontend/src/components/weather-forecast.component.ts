import WeatherService from '@/services/weather-service.service';
import { Options, Vue } from 'vue-class-component';
import { Inject ,Watch} from 'vue-property-decorator';
export interface ForecastModel {
  latitude?: number,
  longitude?: number,
  elevation?: number,
  current_weather?: {
      temperature?: number,
      windspeed?: number,
      winddirection?: number,
      weathercode?: number,
      time?: Date
  }
}

@Options({
  props: {
    latitude: Number,
    longitude: Number,
  }
})


export default class WeatherForecast extends Vue {
 

  @Inject('weatherService')
  public weatherService!: WeatherService;
  public latitude!: number;
  public longitude!: number;
  get locationKey(): string {
    return `${this.latitude},${this.longitude}`;
  }
  public weatherData:ForecastModel = {}
  public errorMessage: string | null = null; 

   


  @Watch('locationKey') onLocationKeyChange(newVal: string, oldVal: string) {
    this.weatherService.getWeatherForecast(this.latitude, this.longitude).then((res) => {
      this.weatherData = res
    
    }).catch((error) => {
      this.weatherData ={}
      this.errorMessage = 'Failed to retrieve weather data. Please try again later.';
    });
  }

}



 