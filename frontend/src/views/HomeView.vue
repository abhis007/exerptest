<template>
  <div class="home">
    <SearchCity @location-updated="updateLocation" />
    <WeatherForecast :latitude="latitude" :longitude="longitude"/>
  </div>
</template>

<script lang="ts" src="./home.component.ts"></script>
