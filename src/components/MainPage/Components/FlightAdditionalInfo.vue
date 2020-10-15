<template>
  <div class="FlightAdditionalInfo">
    <p class="FlightAdditionalLink">Детали перелета</p>
    <p class="FlightAdditionalLink">Условия тарифа</p>
    <div class="RefundebleInfo">
      <img
        v-if="!flight.refundable"
        v-bind:src="require('../../../assets/icon-non-refundeble.svg')"
        alt="non refundeble ticket icon "
        class="RefundebleStatus"
      />
      <img
        v-else
        v-bind:src="require('../../../assets/refundeble.svg')"
        alt="refundeble ticket icon "
        class="RefundebleStatus"
      />
      <p v-if="!flight.refundable" class="RefundebleStatusTitle">
        невозвратный
      </p>
      <p v-else class="RefundebleStatusTitle">возвратный</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FlightAdditionalInfo",
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
