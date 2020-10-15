import Result from "./results.json";

export default {
  state: {
    flights: Result.flights,
    filteredFlights: Result.flights,
  },
  mutations: {
    SET_FILTERED: (state, options) => {
      state.filteredFlights = state.flights;
      state.filteredFlights = state.filteredFlights
        .map((flight) => {
          for (let i = 0; i < options.airlines.length; i++) {
            if (flight.validating_carrier === options.airlines[i]) {
              return flight;
            }
          }
        })
        .filter((flight) => flight);
      if (options.option1) {
        state.filteredFlights = state.filteredFlights.filter((flight) => {
          return flight.itineraries[0][0].stops === 0;
        });
      }
      if (options.option2) {
        state.filteredFlights = state.filteredFlights.filter((flight) => {
          return flight.refundable;
        });
      }
      if (options.option3) {
        state.filteredFlights = state.filteredFlights.filter((flight) => {
          return flight.itineraries[0][0].segments[0].baggage_options[0].value > 0;
        });
      }
    },
  },
  actions: {
    FILTER_FLIGHTS({ commit }, options) {
      commit("SET_FILTERED", options);
    },
  },
  modules: {},
  getters: {
    FLIGHTS(state) {
      return state.flights;
    },
    FILTERED_FLIGHTS(state) {
      return state.filteredFlights;
    },
  },
};
