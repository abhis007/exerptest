import { Options, Vue } from 'vue-class-component';
import SearchCity from '@/components/SearchCity.vue';
import WeatherForecast from '@/components/WeatherForecast.vue';

@Options({
  components: {
    SearchCity,
    WeatherForecast,
  },
})
export default class HomeView extends Vue {
  latitude: number | null = null;
  longitude: number | null = null;

  updateLocation(location: { lat: number; lng: number }) {
    this.latitude = location.lat;
    this.longitude = location.lng;

    console.log('here',this.latitude)
  }
  
}