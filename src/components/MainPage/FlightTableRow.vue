<template>
  <li class="FlightBlock">
    <div class="FlightInfo">
      <div class="FlightMainInfo">
        <FlightAirline v-bind:flight="flight" />
        <FlightDate
          v-bind:flight="flight"
          v-bind:GetTime="GetTime"
          v-bind:GetDate="GetDate"
        />
        <FlightRoute v-bind:flight="flight" />
        <FlightDepDate
          v-bind:flight="flight"
          v-bind:GetTime="GetTime"
          v-bind:GetDate="GetDate"
          v-bind:GetDeffDay="GetDeffDay"
        />
      </div>
      <FlightAdditionalInfo v-bind:flight="flight" />
    </div>
    <BuyFlightInfo
      v-bind:flight="flight"
      v-bind:mobileWindow="this.mobileWindow"
    />
  </li>
</template>

<script>
import FlightDepDate from "./Components/FlightDepDate";
import FlightDate from "./Components/FlightDate";
import FlightAirline from "./Components/FlightAirline";
import FlightRoute from "./Components/FlightRoute";
import FlightAdditionalInfo from "./Components/FlightAdditionalInfo";
import BuyFlightInfo from "./Components/BuyFlightInfo";
export default {
  name: "FlightTableRow",
  props: {
    flight: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      mobileWindow: false
    };
  },
  mounted() {
    this.handleView();
    window.addEventListener("resize", this.handleView);
  },
  components: {
    BuyFlightInfo,
    FlightAdditionalInfo,
    FlightRoute,
    FlightAirline,
    FlightDate,
    FlightDepDate
  },
  methods: {
    handleView() {
      this.mobileWindow = window.innerWidth <= 790;
    },
    GetDeffDay(dateDepInfo, dateArrInfo) {
      let dep = new Date(dateDepInfo);
      let arr = new Date(dateArrInfo);
      let depDay = dep.getDate();
      let arrDay = arr.getDate();
      return depDay - arrDay;
    },
    GetTime(dateInfo) {
      return dateInfo.split(" ")[3];
    },
    GetDate(dateInfo) {
      return dateInfo
        .split(" ")
        .splice(0, 3)
        .join(" ")
        .toLowerCase();
    }
  }
};
</script>