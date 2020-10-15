<template>
  <div class="BuyFlightInfo">
    <h2 class="PriceInfo">
      {{ flight.itineraries[0][0].price.amount }}
      <span class="currency">&#8376;</span>
    </h2>
    <div class="ChooseBtn" v-if="!this.mobileWindow">
      Выбрать
    </div>
    <div class="ChooseBtn" v-else>
      {{ flight.itineraries[0][0].price.amount }}
    </div>
    <p class="quantityPriceInfo">Цена за всех пассажиров</p>
    <div class="BaggageBlock">
      <p
        class="baggageInfo"
        v-if="flight.itineraries[0][0].segments[0].baggage_options[0].value > 0"
      >
        {{ flight.itineraries[0][0].segments[0].baggage_options[0].value }}
        {{ flight.itineraries[0][0].segments[0].baggage_options[0].unit }}
      </p>
      <p class="baggageInfo" v-else>
        Без багажа
      </p>
      <div class="addBaggageBtn">
        + Добавить багаж
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BuyFlightInfo",
  props: {
    flight: {
      type: Object,
      default() {
        return {};
      }
    },
    mobileWindow: {
      type: Boolean
    }
  }
};
</script>
