<template>
  <div class="pa-10 menu">
    <v-btn>
      Edge
    </v-btn>
    <v-btn class="ml-4" color="primary" dark x-small v-for="(item, index) in menuItems" :key="index" :to="item.value">
      {{ item.title }}
    </v-btn>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menuItems: [
        {
          id: 1,
          title: 'Stats',
          value: '/statistics'
        },
        {
          id: 2,
          title: 'Themes',
          value: '/themes'
        },
        {
          id: 3,
          title: 'Friends',
          value: '/friends'
        },
        {
          id: 4,
          title: 'Ranks',
          value: '/ranks'
        },
        {
          id: 5,
          title: 'Badges',
          value: '/badges'
        },
        {
          id: 6,
          title: 'Earnings',
          value: '/earnings'
        },
        {
          id: 7,
          title: 'Logs',
          value: '/logs'
        }
      ]
    }
  }
}
</script>

<style>
.menu {
  border-bottom: 1px solid white;
}

.ml-4 {
  margin-left: 10px;
}
</style>