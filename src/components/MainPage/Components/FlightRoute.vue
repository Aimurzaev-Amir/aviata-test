<template>
  <div class="FlightRoute">
    <div class="FlightPlan">
      <p class="PlanAirportIATA">ALA</p>
      <p class="FlightDuration">{{ GetTotalTime(flight.best_time) }}</p>
      <p class="PlanAirportIATA">
        {{
          flight.itineraries[0][0].segments[
            flight.itineraries[0][0].segments.length - 1
          ].dest_code
        }}
      </p>
    </div>
    <div class="FlightMap">
      <div class="FlightMapPoint"></div>
      <div class="FlightMapPoint"></div>
      <div class="FlightMapPoint"></div>
      <hr class="FlightMapLine" />
    </div>
    <div class="FlightTransferPlaceTime">
      <p v-if="flight.itineraries[0][0].stops === 1">
        через {{ flight.itineraries[0][0].segments[0].airport_dest }},
        {{ GetTotalTime(flight.itineraries[0][0].layovers[0]) }}
      </p>
      <p v-else-if="flight.itineraries[0][0].stops > 1">
        {{ flight.itineraries[0][0].stops }} пересадки
      </p>
      <p v-else>прямой рейс</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FlightRoute",
  props: {
    flight: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    GetTotalTime(totalSeconds) {
      let totalMins = totalSeconds / 60;
      let totalHours = Math.floor(totalMins / 60);
      let totalDefFloat = (totalMins / 60 - totalHours) * 60;
      let totalDeff = Math.ceil(totalDefFloat);
      return totalHours + " ч " + totalDeff + " м";
    }
  }
};
</script>
