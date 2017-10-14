<template lang="pug">
  div#app
    
    v-toolbar(fixed size="large" gradient)
      v-button(icon contrast slot="left" @click="toggleSidenav")
        v-icon menu
      span.ml-2(slot="left")
        img(height="24" src="./assets/img/sushi_white_logo.png" alt="Sushi.js")
      v-button.mr-1(rounded contrast icon size="medium" slot="right" @click="toGithub")
        img(src="./assets/img/github_logo.png" height="24")
    v-side-nav(v-model="showSidenav")
      v-button(slot="header" rounded icon contrast @click="toggleSidenav")
        v-icon arrow_back

      v-expansion-panel
        v-button(slot="trigger" align="left" block squared :to="{ path: '/button' }")
          | Button
          v-icon(slot="badge") keyboard_arrow_down
        v-button(squared block align="left") Test 1
        v-button(squared block align="left") Test 2
        v-button(squared block align="left") Test 3
      v-button(align="left" block squared :to="{ path: '/icon' }") Icon

    transition(name="su-anim--fadeRight" mode="out-in")
      router-view
    
</template>

<script>
export default {
  name: 'app',

  data() {
    return {
      showSidenav: false,
    }
  },

  methods: {
    toggleSidenav() {
      this.showSidenav = !this.showSidenav
    },
    toGithub() {
      location.href = 'https://github.com/Walraz/sushi.js'
    },
  }
}
</script>

<style lang="scss">
@import '../src/core/styles/main';
@import './assets/scss/intro';
@import './assets/scss/card';
@import './assets/scss/component-details';

#app {
  display: flex;
  flex-direction: column;
}

#content {
  margin: 0 auto;
  max-width: 960px;
  width: 100%;
  padding: 32px;
  display: flex;
  flex-direction: column;
  button {
    @extend .my-1;
  }
}
</style>

