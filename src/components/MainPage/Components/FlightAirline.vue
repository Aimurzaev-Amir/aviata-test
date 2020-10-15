<template>
  <div class="FlightAirline">
    <img
      v-bind:src="
        require('../../../assets/Airlines/' +
          flight.validating_carrier +
          '.png')
      "
      alt="airline logo"
      class="FlightAirlineLogo"
    />
    <p class="FlightAirlineName">
      {{ flight.itineraries[0][0].carrier_name }}
    </p>
  </div>
</template>

<script>
export default {
  name: "FlightAirline",
  props: {
    flight: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>
