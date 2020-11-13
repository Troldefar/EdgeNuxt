<template>
  <div class="pa-10 gameContainer" id="gameSelectedAndCanSearch">
    <h2 class="font-weight-light text-start">
      Select your game
    </h2>
    <hr>
    <div class="outerSelectGame">
      <div v-for="(item, index) in games" :key="index" class="gameSelector mr-3" @click="findMembers(item.title)">
        <p class="gameText font-weight-light">
          {{ item.title }}
        </p>
        <v-dialog
          v-model="dialog"
          content-class="customizeTheme"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn 
              dark 
              v-bind="attrs"
              color="primary"
              v-on="on"
              text
              x-small
              class="gameCog white--text"
              @click.native.stop="searchGame(item.title)"
            >
              <v-icon>
                {{ item.cog }}
              </v-icon>
            </v-btn>
          </template>
          <v-card class="customizeTheme pa-10">
            <h2 class="font-weight-light">
              {{ currentGameSettings }}
            </h2>
            <hr>
            <div v-if="currentGameSettings === 'CS:GO'">
              <v-switch
                v-model="voiceChatCs"
                label="Voice chat"
              />
              <v-switch
                v-model="wingman"
                label="Wingman"
              />
              <v-switch
                v-model="fiveVersusFiveCs"
                label="5 vs 5 ranked"
              />
              <v-switch
                v-model="deathmatch"
                label="Deathmatch"
              />
            </div>
            <div v-else-if="currentGameSettings === 'League of Legends'">
              <v-switch
                v-model="voiceChatLol"
                label="Voice chat"
              />
              <v-switch
                v-model="aram"
                label="ARAM"
              />
              <v-switch
                v-model="tft"
                label="Team fight tactics"
              />
              <v-switch
                v-model="rankedLol"
                label="Ranked"
              />
              <v-switch
                v-model="normalLol"
                label="Normal"
              />
            </div>
            <div v-else-if="currentGameSettings === 'World Of Warcraft'">
              <v-switch
                v-model="readyToGameWow"
                label="Voice chat"
              />
              <v-switch
                v-model="raid"
                label="Raid"
              />
              <v-switch
                v-model="mplus"
                label="Mythic+"
              />
              <v-switch
                v-model="arenaSkirmish"
                label="Arena (Skirmish)"
              />
              <v-switch
                v-model="arenaRanked"
                label="Arena (Ranked)"
              />
              <v-switch
                v-model="rbg"
                label="Rated battlegrounds"
              />
            </div>
            <div v-else-if="currentGameSettings === 'Modern Warfare'">
              <v-switch
                v-model="voiceChatCOD"
                label="Voice chat"
              />
              <v-switch
                v-model="brQuad"
                label="Battle royal quads"
              />
              <v-switch
                v-model="brTrio"
                label="Battle royal trio"
              />
              <v-switch
                v-model="brDuo"
                label="Battle royal duo"
              />
              <v-switch
                v-model="plunder"
                label="Plunder"
              />
            </div>
          </v-card>
        </v-dialog>
        <img v-if="item.title === 'CS:GO'" width="300" height="200" class="gameImage" src="@/static/images/CounterStrike/csgo.jpg" />
        <img v-if="item.title === 'League of Legends'" width="300" height="200" class="gameImage" src="@/static/images/LeagueOfLegends/leagueoflegends.png" />
        <img v-if="item.title === 'World Of Warcraft'" width="300" height="200" class="gameImage" src="@/static/images/WorldOfWarcraft/worldofwarcraft.jpg" />
        <img v-if="item.title === 'Modern Warfare'" width="300" height="200" class="gameImage" src="@/static/images/ModernWarfare/modernwarfare.jpg" />
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
          title: 'CS:GO',
          image: '@/static/images/CounterStrike/csgo.jpg',
          cog: 'mdi-cog-clockwise'
        },
        {
          title: 'League of Legends',
          image: '@/static/images/LeagueOfLegends/leagueoflegends.png',
          cog: 'mdi-cog-clockwise'
        },
        {
          title: 'World Of Warcraft',
          image: '@/static/images/WorldOfWarcraft/worldofwarcraft.jpg',
          cog: 'mdi-cog-clockwise'
        },
        {
          title: 'Modern Warfare',
          image: '@/static/images/ModernWarfare/modernwarfare.jpg',
          cog: 'mdi-cog-clockwise'
        }
      ],
      currentGameSettings: '',
      dialog: false,
      /* CS */
      voiceChatCs: false,
      tryhardCs: false,
      multipleCs: false,
      wingman: false,
      fiveVersusFiveCs: false,
      deathmatch: false,
      /* LOL */
      voiceChatLol: false,
      tryhardLol: false,
      multipleLol: false,
      aram: false,
      tft: false,
      rankedLol: false,
      normalLol: false,
      /* WOW */
      readyToGameWow: false,
      raid: false,
      mplus: false,
      arenaSkirmish: false,
      arenaRanked: false,
      rbg: false,
      /* Call of duty */
      voiceChatCOD: false,
      brQuad: false,
      brTrio: false,
      brDuo: false,
      plunder: false
    }
  },
  methods: {
    searchGame (value) {
      this.currentGameSettings = value;
      console.log(this.currentGameSettings);
    },
    findMembers (value) {
      const el = document.querySelector('#gameSelectedAndCanSearch');
      el.innerHTML = 'Looking for team members: ' + value;
    }
  }
}
</script>

<style lang="scss">

.customizeTheme {
  width: 60vw;
}

.gameContainer {
  height:100%;
  .outerSelectGame {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    .gameSelector {
      position:relative;
      display:flex;
      justify-content:center;
      align-items:center;
      transition: all 0.3s ease-in;

      .gameText {
        position:absolute;
        z-index:100;
        background: black;
        padding: 5px;
        border-radius: 10px;
      }

      .gameCog {
        position:absolute;
        z-index:100;
        right: 0;
        bottom: 0;
      }

      &:hover {
        filter: brightness(1.5);
        cursor: pointer;
      }

      .gameImage {
        border-radius: 10px;
      }
    }
  }
}
</style>