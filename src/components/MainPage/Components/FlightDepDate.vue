<template>
  <div class="FlightDate">
    <p class="FlightDay">
      {{
        GetDate(
          flight.itineraries[0][0].segments[
            flight.itineraries[0][0].segments.length - 1
          ].arr_time
        )
      }}
      <span
        v-if="
          GetDeffDay(
            flight.itineraries[0][0].segments[
              flight.itineraries[0][0].segments.length - 1
            ].dep_time_iso,
            flight.itineraries[0][0].segments[0].arr_time_iso
          ) !== 0
        "
        class="FlightDaySpan"
        >+{{
          GetDeffDay(
            flight.itineraries[0][0].segments[
              flight.itineraries[0][0].segments.length - 1
            ].dep_time_iso,
            flight.itineraries[0][0].segments[0].arr_time_iso
          )
        }}</span
      >
    </p>
    <p class="FlightTime">
      {{
        GetTime(
          flight.itineraries[0][0].segments[
            flight.itineraries[0][0].segments.length - 1
          ].arr_time
        )
      }}
    </p>
  </div>
</template>

<script>
export default {
  name: "FlightDepDate",
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
    },
    GetDeffDay: {
      type: Function
    }
  }
};
</script>
