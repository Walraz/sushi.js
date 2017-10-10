<template>
  <div id="app">
    <v-toolbar fixed size="large" gradient>
      <v-button icon contrast slot="left">
        <v-icon>menu</v-icon>
      </v-button>
      <span class="ml-2" slot="left">
        <img height="24" src="./sushi.png" alt="Sushi.js">
      </span>
      <v-button class="mr-1" rounded contrast icon size="medium" slot="right">
        <v-icon>account_circle</v-icon>
      </v-button>
      <v-button class="mr-2" rounded contrast icon size="medium" slot="right">
        <v-icon>settings</v-icon>
      </v-button>
    </v-toolbar>

    <div class="intro">
      <div class="intro__text">
        <h3>Create your combo</h3>
        <p>Providing flexible UI components that scales 🍣🍣🍣</p>
      </div>
      <img src="./sushi_intro.svg" alt="Sushi intro">
    </div>

    <v-toolbar border size="small">
      <v-button squared size="medium" icon slot="left">
        <v-icon size="medium">bookmark</v-icon>
      </v-button>
      <v-button squared size="medium" slot="left">
        <v-icon size="medium" slot="icon-left">invert_colors</v-icon>Invert
      </v-button>
      <v-button squared size="medium" slot="left">
        <v-icon slot="icon-left" size="medium">content_paste</v-icon>Paste
      </v-button>
    </v-toolbar>

    <div class="component-details" v-html="buttonMD"></div>

    <p class="elevation-2">
      <v-button>Normal</v-button>
      <v-button rounded>Normal</v-button>
      <v-button squared>Normal</v-button>
      <v-button disabled>Normal</v-button>
    </p>
    <p>
      <v-button primary>Primary</v-button>
      <v-button primary rounded>Primary</v-button>
      <v-button primary squared>Primary</v-button>
      <v-button primary disabled>Primary</v-button>
    </p>
    <p>
      <v-button :loading="loading" theme="alert">Primary</v-button>
      <v-button @click="toggleLoading" theme="raised" rounded>Primary</v-button>
      <v-button theme="raised" squared>Primary</v-button>
      <v-button theme="raised" disabled>Primary</v-button>
    </p>
    <p>
      <v-button theme="raised" primary>Primary</v-button>
      <v-button theme="raised" primary rounded>Primary</v-button>
      <v-button theme="raised" primary squared>Primary</v-button>
      <v-button theme="raised" primary disabled>Primary</v-button>
    </p>
    <p>
      <v-button theme="outlined">Primary</v-button>
      <v-button theme="outlined" rounded>Primary</v-button>
      <v-button theme="outlined" squared>Primary</v-button>
      <v-button theme="outlined" disabled>Primary</v-button>
    </p>
    <p>
      <v-button theme="outlined" primary>
        Primary
      </v-button>
      <v-button theme="outlined" primary rounded>
        Primary
      </v-button>
      <v-button theme="outlined" primary squared>Primary</v-button>
      <v-button theme="outlined" primary disabled>Primary</v-button>
    </p>
    <p style="background: #333; padding: 32px;margin: 0">
      <v-button contrast theme="outlined">Primary</v-button>
      <v-button contrast theme="outlined" rounded>Primary</v-button>
      <v-button contrast theme="outlined" squared>Primary</v-button>
      <v-button contrast theme="outlined" disabled>Primary</v-button>
    </p>
    <p style="background: #333; padding: 32px; margin: 0">
      <v-button contrast theme="flat">Primary</v-button>
      <v-button contrast theme="flat" rounded>Primary</v-button>
      <v-button contrast theme="flat" squared>Primary</v-button>
      <v-button contrast theme="flat" disabled>Primary</v-button>
    </p>
    <p style="background: #333; padding: 32px; margin: 0">
      <v-button contrast primary theme="alert">Primary</v-button>
      <v-button contrast primary theme="raised" rounded>Primary</v-button>
      <v-button contrast primary theme="raised" squared>Primary</v-button>
      <v-button contrast primary theme="raised" disabled>Primary</v-button>
    </p>
  </div>
</template>

<script>
import ButtonMD from './docs/Button.md'
export default {
  name: 'app',

  data() {
    return {
      buttonMD: ButtonMD,
      loading: false,
    }
  },

  methods: {
    toggleLoading() {
      this.loading = !this.loading
    }
  }
}
</script>

<style lang="scss">
@import '../src/core/styles/main';

#app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.component-details {
  padding: 16px;
  color: rgba(#333, 1);
  >p {
    line-height: 32px !important;
  }
  h1 {
    text-transform: capitalize;
  }

  h2 {
    padding-top: 32px;
  }

  ul:first-of-type {
    code:nth-child(n + 2) {
      display: block;
      padding: 16px 0 8px 0;
      color: theme(primary);
    }
  }

  ul:last-of-type {
    font-size: 14px;
    code {
      padding: 16px 0 8px 0;
    }
  }

  ul {
    list-style-type: none;
    em {
      color: rgba(#333, .5);
    }
    strong em {
      color: rgba(#333, 1);
      font-size: 14px;
    }
    code:first-child {
      min-width: 200px;
      box-shadow: 0 1px 3px 1px rgba(#000, .11);
      padding: 4px 8px;
      font-weight: 700;
      color: #333;
      margin: 0 4px 0 0;
    }
    li {
      padding: 32px 0;
      p {
        font-size: 14px;
      }
    }
  }

  p {
    line-height: 18px;
    max-width: 420px;
  }

  code:only-child {
    box-shadow: 0 1px 3px 1px rgba(#000, .11);
    padding: 4px 8px;
    font-weight: 700;
    color: theme(primaryLighter);
    margin: 0 4px;
  }
}


.intro {
  display: flex;
  padding: 32px 32px 0px 16px;
  justify-content: center;
  background: theme(gradient);
  img {
    height: 380px;
  }
  &__text {
    color: #fff;
    padding-right: 32px;
    h3 {
      font-weight: 700;
      letter-spacing: -1.25px;
      font-size: 38px;
    }
    p {
      width: 300px;
      font-size: 18px;
      letter-spacing: .25px;
      line-height: 24px;
    }
  }
}
</style>
