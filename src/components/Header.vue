<template>
  <header class="headerOverlay">
    <div class="header wrapper">
      <div class="headerLogo">
        <img
          v-bind:src="require('../assets/aviataLogo.svg')"
          alt="aviata main logo"
          class="headerLogoImg"
        />
      </div>
      <div class="headerBody">
        <h3 class="headerBodyTitle">Поиск и бронирование авиабилетов</h3>
        <div class="headerBodySteps">
          <p class="headerBodyStep">Выбор варианта</p>
          <img
            v-bind:src="require('../assets/step_arrow.png')"
            alt="next step arrow"
            class="arrowImg"
          />
          <p class="headerBodyStep">Пассажиры</p>
          <img
            v-bind:src="require('../assets/step_arrow.png')"
            alt="next step arrow"
            class="arrowImg"
          />
          <p class="headerBodyStep">Способ оплаты</p>
          <img
            v-bind:src="require('../assets/step_arrow.png')"
            alt="next step arrow"
            class="arrowImg"
          />
          <p class="headerBodyStep">Подтверждение</p>
        </div>
      </div>
      <div class="headerContacts">
        <p class="headerContact">
          <span class="headerContactSpan"> +7(727)</span>
          <span class="headerContactSpan">22-55-055</span>
        </p>
        <p class="headerContact">+7(701)065-33-33</p>
        <p class="headerContact">help@aviata.kz</p>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  }
};
</script>

<style lang="scss">
@import "../Variables.scss";

.headerOverlay {
  z-index: 99;
  background-color: #fff;
  padding: 10px 0;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
  margin-bottom: 40px;
  @media (max-width: 790px) {
    margin-bottom: 60px;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @extend %smallScreenPadding;
    @media (max-width: 550px) {
      justify-content: center;
    }
    .headerLogo {
      width: 240px;
      @media (max-width: 650px) {
        width: 145px;
      }
      .headerLogoImg {
        max-width: 240px;
        @media (max-width: 650px) {
          max-width: 145px;
        }
      }
    }
    .headerBody {
      @media (max-width: 550px) {
        display: none;
      }
      .headerBodyTitle {
        font-size: 25px;
        font-weight: normal;
        white-space: nowrap;
        @media (max-width: 760px) {
          font-size: 18px;
        }
      }
      .headerBodySteps {
        margin-top: 16px;
        display: flex;
        align-items: center;
        @media (max-width: 760px) {
          margin-top: 7px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 7px;
        }
        .arrowImg {
          width: 18px;
          height: 18px;
          padding: 5px;
          @media (max-width: 760px) {
            display: none;
          }
        }
        .headerBodyStep {
          &:first-child {
            background-color: $greenColor;
            color: #fff;
          }
          white-space: nowrap;
          color: #000;
          background-color: #dddddd;
          cursor: pointer;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 11.4px;
        }
      }
    }
    .headerContacts {
      @media (max-width: 950px) {
        display: none;
      }
      .headerContact {
        font-size: 16px;
        text-align: right;
        padding-bottom: 2px;
        .headerContactSpan {
          &:first-child {
            padding-right: 5px;
            font-size: 16px;
          }
          font-size: 24px;
          font-weight: normal;
        }
      }
    }
  }
}
</style>
