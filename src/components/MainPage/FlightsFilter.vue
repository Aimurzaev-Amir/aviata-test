<template>
  <div class="FiltersContainer">
    <div
      v-on:click="showMenuMethod"
      v-bind:class="{
        FiltersBtn: true,
        hide: !this.mobileWindow
      }"
    >
      Фильтры
    </div>
    <div
      v-bind:class="{
        FlightsFiltersContainer: true,
        hide: !this.showMenu && this.mobileWindow
      }"
    >
      <form class="FilterWindow">
        <h3 class="FilterName">Опции Тарифа</h3>
        <label class="FilterCheckboxContainer"
          >Только прямые
          <input type="checkbox" class="filterCheckbox" v-model="onlyDirect" />
          <span class="checkmark"></span>
        </label>
        <label class="FilterCheckboxContainer"
          >Только с багажом
          <input
            type="checkbox"
            class="filterCheckbox"
            v-model="onlyWithBaggs"
          />
          <span class="checkmark"></span>
        </label>
        <label class="FilterCheckboxContainer"
          >Только возвратные
          <input
            type="checkbox"
            class="filterCheckbox"
            v-model="onlyRefundeble"
          />
          <span class="checkmark"></span>
        </label>
      </form>
      <form class="FilterWindow">
        <h3 class="FilterName">Авиакомпании</h3>
        <label class="FilterCheckboxContainer"
          >Все
          <input type="checkbox" class="filterCheckbox" v-model="set_all" />
          <span class="checkmark"></span>
        </label>
        <label class="FilterCheckboxContainer"
          >Air Astana
          <input
            type="checkbox"
            class="filterCheckbox"
            value="KC"
            v-model="selectedAirlines"
          />
          <span class="checkmark"></span>
        </label>
        <label class="FilterCheckboxContainer"
          >Uzbekistan Airways
          <input
            type="checkbox"
            class="filterCheckbox"
            value="HY"
            v-model="selectedAirlines"
          />
          <span class="checkmark"></span>
        </label>
        <label class="FilterCheckboxContainer"
          >Emirates
          <input
            type="checkbox"
            class="filterCheckbox"
            value="EK"
            v-model="selectedAirlines"
          />
          <span class="checkmark"></span>
        </label>
        <label class="FilterCheckboxContainer"
          >HR
          <input
            type="checkbox"
            class="filterCheckbox"
            value="HR"
            v-model="selectedAirlines"
          />
          <span class="checkmark"></span>
        </label>
        <label class="FilterCheckboxContainer"
          >Flydubai
          <input
            type="checkbox"
            class="filterCheckbox"
            value="FZ"
            v-model="selectedAirlines"
          />
          <span class="checkmark"></span>
        </label>
        <label class="FilterCheckboxContainer"
          >S7 Airlines
          <input
            type="checkbox"
            class="filterCheckbox"
            value="S7"
            v-model="selectedAirlines"
          />
          <span class="checkmark"></span>
        </label>
        <label class="FilterCheckboxContainer"
          >Lufthansa
          <input
            type="checkbox"
            class="filterCheckbox"
            value="LH"
            v-model="selectedAirlines"
          />
          <span class="checkmark"></span>
        </label>
        <label class="FilterCheckboxContainer"
          >Air Baltic
          <input
            type="checkbox"
            class="filterCheckbox"
            value="BT"
            v-model="selectedAirlines"
          />
          <span class="checkmark"></span>
        </label>
        <label class="FilterCheckboxContainer"
          >China Southern Airlines
          <input
            type="checkbox"
            class="filterCheckbox"
            value="CZ"
            v-model="selectedAirlines"
          />
          <span class="checkmark"></span>
        </label>
        <label class="FilterCheckboxContainer"
          >Aeroflot
          <input
            type="checkbox"
            class="filterCheckbox"
            value="SU"
            v-model="selectedAirlines"
          />
          <span class="checkmark"></span>
        </label>
        <label class="FilterCheckboxContainer"
          >Belavia
          <input
            type="checkbox"
            class="filterCheckbox"
            value="B2"
            v-model="selectedAirlines"
          />
          <span class="checkmark"></span>
        </label>
        <label class="FilterCheckboxContainer"
          >SCAT Airlines
          <input
            type="checkbox"
            class="filterCheckbox"
            value="DV"
            v-model="selectedAirlines"
          />
          <span class="checkmark"></span>
        </label>
        <label class="FilterCheckboxContainer"
          >Turkish Airlines
          <input
            type="checkbox"
            class="filterCheckbox"
            value="TK"
            v-model="selectedAirlines"
          />
          <span class="checkmark"></span>
        </label>
      </form>
      <div class="cancelAllFilters">
        <p v-on:click="dropAllFilters">Сбросить все фильтры</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "FlightsFilter",
  mounted() {
    this.handleView();
    window.addEventListener("resize", this.handleView);
  },
  data() {
    return {
      mobileWindow: false,
      showMenu: false,
      set_all: true,
      onlyDirect: false,
      onlyWithBaggs: false,
      onlyRefundeble: false,
      existingAirlines: [
        "KC",
        "HY",
        "EK",
        "HR",
        "FZ",
        "S7",
        "LH",
        "BT",
        "CZ",
        "SU",
        "B2",
        "DV",
        "TK"
      ],
      selectedAirlines: [
        "KC",
        "HY",
        "EK",
        "HR",
        "FZ",
        "S7",
        "LH",
        "BT",
        "CZ",
        "SU",
        "B2",
        "DV",
        "TK"
      ]
    };
  },
  methods: {
    ...mapActions(["FILTER_FLIGHTS", "FILTER_AIRLINES"]),
    dropAllFilters() {
      (this.onlyDirect = false),
        (this.onlyWithBaggs = false),
        (this.onlyRefundeble = false),
        (this.selectedAirlines = this.existingAirlines);
    },
    handleView() {
      this.mobileWindow = window.innerWidth <= 790;
    },
    showMenuMethod() {
      this.showMenu = !this.showMenu;
    }
  },
  watch: {
    set_all() {
      if (this.set_all) {
        this.selectedAirlines = this.existingAirlines;
      } else {
        this.selectedAirlines = [];
      }
    },
    onlyDirect() {
      this.FILTER_FLIGHTS({
        airlines: this.selectedAirlines,
        option1: this.onlyDirect,
        option2: this.onlyRefundeble,
        option3: this.onlyWithBaggs
      });
    },
    onlyRefundeble() {
      this.FILTER_FLIGHTS({
        airlines: this.selectedAirlines,
        option1: this.onlyDirect,
        option2: this.onlyRefundeble,
        option3: this.onlyWithBaggs
      });
    },
    onlyWithBaggs() {
      this.FILTER_FLIGHTS({
        airlines: this.selectedAirlines,
        option1: this.onlyDirect,
        option2: this.onlyRefundeble,
        option3: this.onlyWithBaggs
      });
    },
    selectedAirlines() {
      this.FILTER_FLIGHTS({
        airlines: this.selectedAirlines,
        option1: this.onlyDirect,
        option2: this.onlyRefundeble,
        option3: this.onlyWithBaggs
      });
    }
  }
};
</script>

<style lang="scss">
@import "../../Variables.scss";
.FiltersContainer {
  display: flex;
  justify-content: center;
}
.FiltersBtn {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  width: 100px;
  border-radius: 15px;
  background-color: $greenColor;
  color: #fff;
  &.hide {
    display: none;
  }
  @media (max-width: 790px) {
    top: 120px;
  }
  @media (max-width: 550px) {
    top: 73px;
  }
}
.FlightsFiltersContainer {
  width: 100%;
  position: relative;
  transform: translateY(0);
  &.hide {
    transform: translateY(-150%);
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 30%;
    display: block;
    margin: auto;
    position: absolute;
    transition: 1s;
  }
  z-index: 90;
  transition: 1s;
  .FilterWindow {
    margin-bottom: 12px;
    padding: 12px;
    border-radius: 4px;
    background-color: #f5f5f5;
    .FilterName {
      font-size: 14px;
      font-weight: 700;
    }
    .FilterCheckboxContainer {
      display: flex;
      align-items: center;
      position: relative;
      cursor: pointer;
      font-size: 12px;
      padding: 12px 24px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      &:hover .filterCheckbox ~ .checkmark {
        display: block;
      }
      .filterCheckbox {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
        &:checked ~ .checkmark {
          background-color: $greenColor;
        }
        &:checked ~ .checkmark:after {
          display: block;
        }
      }
      .checkmark {
        position: absolute;
        top: 14px;
        left: 0;
        height: 12px;
        width: 12px;
        background-color: #fff;
        border: 1px solid #b9b9b9;
        border-radius: 2px;
        &:after {
          content: "";
          position: absolute;
          display: none;
          left: 3px;
          top: 1px;
          width: 1.5px;
          height: 4px;
          border: solid white;
          border-width: 0 2px 2.5px 0;
          transform: rotate(45deg);
        }
      }
    }
  }
  .cancelAllFilters {
    font-size: 12px;
    font-weight: 400;
    color: #7284e4;
    padding-bottom: 1px;
    border-bottom: 1px dashed #7284e4;
    max-width: 134px;
    cursor: pointer;
  }
}
</style>
