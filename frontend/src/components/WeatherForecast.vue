<template>
  <div
    v-if="Object.keys(weatherData).length > 0"
    class="bg-gray-800 text-white p-4 rounded-lg shadow-lg fixed bottom-0 left-0 right-0"
  >

    <div class="flex flex-row mb-4">

      <div class="flex-1 pr-4">
        <h3 class="text-lg font-semibold">Location</h3>
        <p>Latitude: {{ weatherData.latitude }}</p>
        <p>Longitude: {{ weatherData.longitude }}</p>
      </div>

    
      <div class="flex-1 pr-4">
        <h3 class="text-lg font-semibold">Elevation</h3>
        <p>{{ weatherData.elevation }} meters</p>
      </div>

      <div class="flex-1">
        <div class="flex-1 pr-4">
          <h3 class="text-lg font-semibold">Current Weather</h3>
          <p>Temperature: {{ weatherData.current_weather?.temperature }}°C</p>
          <p>Wind Speed: {{ weatherData.current_weather?.windspeed }} km/h</p>
          <p>Wind Direction: {{ weatherData.current_weather?.winddirection }}°</p>
        </div>
      </div>
    </div>
  </div>
  <div v-if="errorMessage" class="text-red-500 mt-4">
      {{ errorMessage }}
    </div>
</template>
  




<script lang="ts" src="./weather-forecast.component.ts"></script>

<style>

</style>
