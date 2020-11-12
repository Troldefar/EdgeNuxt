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
                v-model="tryhardCs"
                label="Tryhard"
              />
              <v-switch
                v-model="multipleCs"
                label="Multiple games (Possibly)"
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
            <div v-else-if="currentGameSettings === 'League of legends'">
              <v-switch
                v-model="voiceChatLol"
                label="Voice chat"
              />
              <v-switch
                v-model="tryhardLol"
                label="Tryhard"
              />
              <v-switch
                v-model="multipleLol"
                label="Multiple games (Possibly)"
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
          </v-card>
        </v-dialog>
        <img width="300" height="200" class="gameImage" :src="item.image" />
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
          image: 'https://dmarket.com/blog/best-csgo-wallpapers/cs-go-wallpaper_hub6d22fdcaa8629b6f1a6781f6a106093_183473_1920x1080_resize_q75_lanczos.jpg',
          cog: 'mdi-cog-clockwise'
        },
        {
          title: 'League of legends',
          image: 'https://cdn.guidingtech.com/imager/assets/196284/Best-League-of-Legends-Wallpapers-2_4d470f76dc99e18ad75087b1b8410ea9.png?1526290837',
          cog: 'mdi-cog-clockwise'
        },
        {
          title: 'World Of Warcraft',
          image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4a8b89eb-212e-48ac-b1d8-0554cbe12ff1/dcdmkmg-ecddde99-b9a6-460b-852a-0b8fa7c7ee87.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRhOGI4OWViLTIxMmUtNDhhYy1iMWQ4LTA1NTRjYmUxMmZmMVwvZGNkbWttZy1lY2RkZGU5OS1iOWE2LTQ2MGItODUyYS0wYjhmYTdjN2VlODcuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.kKU1lcAMuxf0F3evMkuW985VYBsxLHzEjkV7WCcsSsE',
          cog: 'mdi-cog-clockwise'
        },
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