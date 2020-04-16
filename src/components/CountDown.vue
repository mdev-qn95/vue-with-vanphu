<template>
  <div class="main">
    <div class="countdown">
      <div class="block">
        <p class="digit">{{ day }}</p>
        <p class="text">Ngày</p>
      </div>
      <div class="block">
        <p class="digit">{{ hourETA }}</p>
        <p class="text">Giờ</p>
      </div>
      <div class="block">
        <p class="digit">{{ minuteETA }}</p>
        <p class="text">Phút</p>
      </div>
      <div class="block">
        <p class="digit">{{ secondETA }}</p>
        <p class="text">Giây</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CountDown",
  data: function() {
    return {
      day: 0,
      hour: 0,
      minute: 0,
      second: 0
    };
  },
  created() {
    setInterval(() => {
      const currentDate = new Date();
      this.calculateETA(currentDate);
    }, 1000);
  },
  computed: {
    hourETA() {
      return this.hour >= 10 ? this.hour : `0${this.hour}`;
    },
    minuteETA() {
      return this.minute >= 10 ? this.minute : `0${this.minute}`;
    },
    secondETA() {
      return this.second >= 10 ? this.second : `0${this.second}`;
    }
  },
  methods: {
    calculateETA(currentDate) {
      const destinationDate = new Date("2020-06-16").setHours(0, 0, 0, 0);
      let diff = destinationDate - currentDate;
      let milliseconds = diff % 1000;
      diff = (diff - milliseconds) / 1000;
      this.second = diff % 60;
      diff = (diff - this.second) / 60;
      this.minute = diff % 60;
      diff = (diff - this.minute) / 60;
      this.hour = diff % 24;
      this.day = (diff - this.hour) / 24;
    }
  }
};
</script>

<style scoped>
/* @import url(https://fonts.googleapis.com/css2?family=Comfortaa&family=Roboto:wght@100&display=swap); */

.main {
  align-items: center;
  bottom: 0;
  width: 100%;
  background-image: url("~@/assets/bg-love.png");
  display: flex;
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.countdown {
  display: flex;
}

.block {
  display: flex;
  flex-direction: column;
  margin: 20px;
}

.text {
  color: #ffffff;
  font-size: 25px;
  font-family: "Comfortaa", cursive;
  font-weight: 40;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
}

.digit {
  color: #ecf0f1;
  font-size: 130px;
  font-weight: 100;
  font-family: "Roboto", serif;
  margin: 10px;
  text-align: center;
}
</style>