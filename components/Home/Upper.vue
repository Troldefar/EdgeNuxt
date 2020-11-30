<template>
  <div class="upperHome mb-3">
    <div class="smoothStat pa-10 mr-5">
      <h5 class="font-weight-light">
        Reviews
      </h5>
      <h1 class="big">
        1.281
      </h1>
      <p>
        You got <span style="color:lightgreen">22.3%</span>
        more reviews, this week!
      </p>
      <div class="bottom">
        <div class="positive">
          <h2>
            354
          </h2>
          <v-icon color="green">
            mdi-alpha-p-circle
          </v-icon>
        </div>
        <div>
          <h2>
            2
          </h2>
          <v-icon color="red">
            mdi-alpha-n-circle
          </v-icon>
        </div>
      </div>
    </div>
    <div class="smoothStat pa-10 mr-5">
      <h5 class="font-weight-light">
        Games (Today)
      </h5>
      <h1 class="big">
        10
      </h1>
      <div class="statGames">
        <div v-for="(item, index) in games" :key="index" class="mb-2">
          <p style="font-size: 0.8rem;">
            {{ item.game }} -
            {{ item.type }} <br>
            {{ item.date }}
          </p>
          <hr>
        </div>
      </div>
    </div>
    <div class="smoothStat pa-10">
      <h5 class="font-weight-light mb-10">
        Analysis
      </h5>
      <div class="progressBar">
        <div>
          <v-progress-circular 
            color="#0096c7" 
            :value="54" 
            class="mr-4"
            :size="70"
            :width="10"
          >
            54
          </v-progress-circular>
          <span>
            <h1>
              Kill streaks
            </h1>
            Keep it up
          </span>
        </div>
        <div>
          <v-progress-circular 
            color="red" 
            :value="11" 
            class="mr-4"
            :size="70"
            :width="10"
          >
            11
          </v-progress-circular>
          <span>
            <h1>
              Wards placed
            </h1>
            Keep it up
          </span>
        </div>
        <div>
          <v-progress-circular 
            color="yellow" 
            :value="32" 
            class="mr-4"
            :size="70"
            :width="10"
          >
            32
          </v-progress-circular>
          <span>
            <h1>
              DPS
            </h1>
            Keep it up
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      games: [
        {
          game: 'World of Warcraft',
          date: '2020-12-01',
          type: 'Raid'
        },
        {
          game: 'World of Warcraft',
          date: '2020-12-01',
          type: 'M+'
        },
        {
          game: 'World of Warcraft',
          date: '2020-12-01',
          type: 'M+'
        },
        {
          game: 'World of Warcraft',
          date: '2020-12-01',
          type: 'PVP (Arena ranked 2s)'
        },
        {
          game: 'League of legends',
          date: '2020-12-01',
          type: 'Solo/ Duo ranked'
        },
      ]
    }
  }
}
</script>

<style lang="scss">
.upperHome {
  display: flex;
  user-select: none;
  .big {
    font-size: 4rem;
  }
  .smoothStat {
    flex: 1;
    position: relative;
    border-radius: 5px;
    background: rgb(27, 26, 26);
    opacity: 0.7;
    position: relative;
    height: 100%;
    .statGames {
      overflow-y: auto;
    }
    .progressBar {
      display: flex;
      flex-direction: column;
      height: 90%;
      div {
        flex: 1;
        display: flex;
        * {
          flex: 1;
        }
      }
    }
    .bottom {
      position: absolute;
      bottom: 0px;
      width: 100%;
      height: 30%;
      left: 0px;
      display: flex;
      border-top: 1px solid rgb(94, 93, 93);
      .positive {
        border-right: 1px solid rgb(94, 93, 93);
      }
      div {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
    }
  }
}
</style>