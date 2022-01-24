<template>
  <b-container>
    <b-row>
      <b-col cols="4">
        <b-media class="mb-4">
          <template #aside>
            <b-avatar
              ref="previewEl"
              src="https://pixabay.com/get/g2f37c97db2d2d36312e27b82dce8fb123180373386c11e8c1ffb8e1187ef901c90b35311301fb9007b85c780f39a9545bc9921bbb595b7ade181ac55cf53b348c2084b4474d2c6451d4d983d78ec5af1_1920.png"
              text="Gilberto Paredes"

              size="90px"
              rounded
            />
          </template>
        </b-media>
      </b-col>
      <b-col cols="8">
        <b-row>
          <b-form-group
              label="Personal Foto (Opcional)"
              label-for="basicInput"
              class="main-basic-input"
            >
          </b-form-group>
          <!-- <h3>Personal Foto opcional</h3> -->
        </b-row>
        <b-row>
          <p class="main-media-photo">Sube tu foto (Formato JPG o PNG max 2MB)</p>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BRow, BCol, BContainer, BButton, BAvatar, BMedia, BFormInput, BFormGroup } from 'bootstrap-vue'
//import { avatarText } from '@core/utils/filter'

export default {
  name: 'App',
  components: {
    BCardCode,
    BRow,
    BCol,
    BContainer,
    BButton,
    BAvatar,
    BMedia,
    BFormInput,
    BFormGroup
  },
}
</script>

<style>
  .badge-secondary {
      background-color: #f8f8f8 !important;
      width: 110px !important;
      height: 110px !important;
  }

  .b-avatar .b-avatar-img img {
  border-radius: 60px !important;
  border: 2px #000 dashed;
  }
  .main-basic-input {
    margin-bottom: 0.2857rem;
    position: absolute;
    height: 15px;
    left: -4%;
    top: calc(28% - 15px/2 + 1px);
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    line-height: 15px;
    color: #5E5873;
  }
  .main-basic-input label{
    font-size: 18px !important;
  }
  .main-media-photo {
    margin-top: 72px;
    width: 221px;
    height: 12px;
    left: 0px;
    top: 27px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    line-height: 12px;
    display: flex;
    color: #7367F0;
    flex: none;
    order: 1;
    flex-grow: 0;
    font-size: 11px;
    margin-left: -4%
  }
</style>
