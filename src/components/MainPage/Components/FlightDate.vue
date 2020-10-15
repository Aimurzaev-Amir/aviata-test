<template>
  <div class="FlightDate">
    <p class="FlightDay">
      {{ GetDate(flight.itineraries[0][0].segments[0].dep_time) }}
    </p>
    <p class="FlightTime">
      {{ GetTime(flight.itineraries[0][0].segments[0].dep_time) }}
    </p>
  </div>
</template>

<script>
export default {
  name: "FlightDate",
  props: {
    flight: {
      type: Object,
      default() {
        return {};
      }
    },
    GetTime: {
      type: Function
    },
    GetDate: {
      type: Function
    }
  }
};
</script>
