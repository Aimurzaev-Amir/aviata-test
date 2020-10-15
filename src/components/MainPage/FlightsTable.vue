<template>
  <div>
    <ul class="FlightTable">
      <FlightTableRow
        v-for="flight in FILTERED_FLIGHTS"
        :key="flight.id"
        v-bind:flight="flight"
      />
    </ul>
    <div v-if="FILTERED_FLIGHTS.length === 0" class="Message">
      <p>
        По вашему маршруту было найдено {{ FLIGHTS.length }} перелетов, но ни
        один из вариантов не соответствует заданным фильтрам
      </p>
    </div>
  </div>
</template>

<script>
import "./FlightsTable.scss";
import FlightTableRow from "./FlightTableRow";
import { mapGetters } from "vuex";

export default {
  name: "FlightsTable",
  computed: {
    ...mapGetters(["FLIGHTS", "FILTERED_FLIGHTS"])
  },
  components: {
    FlightTableRow
  }
};
</script>