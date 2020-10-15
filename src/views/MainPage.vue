<template>
  <div class="FlightsGrid">
    <FlightsFilter />
    <FlightsTable />
  </div>
</template>

<script>
import FlightsTable from "../components/MainPage/FlightsTable";
import FlightsFilter from "../components/MainPage/FlightsFilter";
export default {
  components: {
    FlightsTable,
    FlightsFilter
  }
};
</script>

<style lang="scss">
.FlightsGrid {
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-gap: 20px;
  @media (max-width: 790px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
}
</style>
