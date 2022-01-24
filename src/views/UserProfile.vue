<template>
<b-container>
    <b-row>
        <b-col cols="12">
            <h1 class="main-profile">Completar Perfil</h1>
        </b-col>
    </b-row>
    <b-row>
        <b-col cols="6">
            <b-button
                v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                block
                variant="flat-primary"
                class="main-button"
                @click="changeCard(true)"
                >
                <b-avatar
                variant="light-primary"
                square
                />
                Personal
            </b-button>
        </b-col>
        <b-col cols="6">
            <b-button
                v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                block
                variant="flat-primary"
                class="main-button"
                @click="changeCard(false)"
                >
                <b-avatar
                variant="light-primary"
                square
                />
                Profesional
            </b-button>
        </b-col>
    </b-row>
    <b-row>
        <b-col cols="12">
            <div class="space">
                <h4><strong>complete su perfíl profresional para empezar</strong></h4>
            </div>
        </b-col>
    </b-row>
    <personal-info v-if="card_selected === true"></personal-info>
    <profesional-info v-if="card_selected === false"></profesional-info>
</b-container>
</template>

<script>
import PersonalInfo from './profile/PersonalInfo.vue'
import ProfesionalInfo from './profile/ProfesionalInfo.vue'
import BCardCode from '@core/components/b-card-code'
import { BRow, BCol, BContainer, BButton, BAvatar } from 'bootstrap-vue'
import ButtonFilled from '../components/button/ButtonFilled.vue'

export default {
  name: 'App',
  components: {
    BCardCode,
    BRow,
    BCol,
    BContainer,
    BButton,
    ButtonFilled,
    BAvatar,
    PersonalInfo,
    ProfesionalInfo
  },
  data() {
      return {
        card_selected: true,
      }
  },
  methods: {
      changeCard(select) {
          this.card_selected = select
      }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.row.text-center {
    text-align: center !important;
}

.main-profile {
    font-size: 18px;
    /* font-family: Montserrat; */
}

.b-avatar.badge-light-primary {
    background-color: #7367f0 !important;
    color: #ffffff !important;
    border-radius: 5px !important;
    width: 3.5em !important;
    height: 3.5em !important;
}

.main-button {
    font-size: 19px !important;
}

.space {
    margin-top: 20px;
    margin-bottom: 20px;
}
</style>
