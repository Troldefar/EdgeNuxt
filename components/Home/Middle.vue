<template>
  <div class="middleHome">
    
  </div>
</template>

<script>
import Chart from 'chart.js';
export default {
  methods: {
    render (el, type, labels, data) {
      const ctx = document.querySelector(`#${el}`).getContext('2d');
      const myChart = new Chart(ctx, {
        type: type,
        data: {
          labels: labels,
          datasets: [{
              data: data
          }]
        },
        options: {
          response: true,
          maintainAspectRatio: false
        }
      });
      return myChart;
    }
  },
  created () {
    setTimeout(() => {
      this.render('gamesPlayed', 'line', ['12-12', '13-12', '14-12', '15-12', '16-12'], [33, 10, 10, 100, 5], ['rgba(205, 180, 219, 0.7)']);
    }, 2000);
  }
}
</script>

<style lang="scss">
.middleHome {
  display: flex;
  position: relative;
  background: rgb(27, 26, 26);
  opacity: 0.7;
}
</style>