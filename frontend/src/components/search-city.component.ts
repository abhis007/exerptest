import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
  }
})

export default class SearchCity extends Vue {

  selectedPlace: { lat: number; lng: number } | null = null;
  
  placeChanged(place: any) {
    this.selectedPlace = {
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    };
    this.$emit('location-updated', this.selectedPlace);
  }

  handleMapClick(event:any) {
    // Get the clicked location's latitude and longitude
    this.selectedPlace = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };
    console.log(this.selectedPlace)
    this.$emit('location-updated', this.selectedPlace);
 
  }


}