<template>
<b-container>
    <b-row >
    <b-col  cols="5" lg="2">
        <UploadImages @change="handleImages" :max="1"/>
    </b-col>
      <b-col  cols="7" lg="10">
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
<b-row>
    <!-- //end personal info -->
        <b-col cols="12">
            <b-form-group
                label="Nombre"
                label-for="basicInput"
                class="personal-input"
            >
                <b-form-input
                id="nombre"
                placeholder="Nombre"
                />
            </b-form-group>
        </b-col>
        <b-col cols="12">
            <b-form-group
                label="Apellido"
                label-for="apellido"
                class="personal-input"
            >
                <b-form-input
                id="nombre"
                placeholder="Apellido"
                />
            </b-form-group>
        </b-col>
        <b-col cols="12">
            <b-form-group
        label="Phone Number"
        label-for="phone"
        class="personal-input"
      >
        <b-input-group>
          <b-input-group-prepend is-text>
            MX (+52)
          </b-input-group-prepend>
          <cleave
            id="phone"
            v-model="form.phone"
            class="form-control"
            :raw="false"
            :options="options.phone"
            placeholder="1234 567 8900"
          />
        </b-input-group>

      </b-form-group>
        </b-col>
        <b-col cols="12">
            <b-form-group
                label="Email"
                label-for="Email"
                class="personal-input"
            >
                <b-form-input
                id="email"
                placeholder="usuario@mail.com"
                />
            </b-form-group>
        </b-col>
        <b-col cols="12">
            <b-form-group
                label="Género"
                label-for="genero"
                class="personal-input"
            >
                <b-form-select
                v-model="selected"
                :options="select_options"
                size="lg"
                
                />
            </b-form-group>
        </b-col>
        <b-col cols="12">
            <b-form-group
                label="Fecha de nacimiento"
                label-for="example-datepicker"
                class="personal-input"
            >
            <b-form-datepicker
                id="example-datepicker"
                placeholder="Seleccionar Fecha"
            />
            </b-form-group>
        </b-col>
        <b-col cols="12">
            <b-form-group
                label="Dirección"
                label-for="direccion"
                class="personal-input"
            >
                <b-form-input
                id="direccion"
                placeholder="Ej. Valle del paraíso, Tlanepantla de Baz"
                />
            </b-form-group>
        </b-col>
        <b-col class="next-button" cols="12">
            <b-button 
                variant="relief-primary"
                block
            >
            Próximo
            </b-button>
        </b-col>
    </b-row>
    <template #code>
      {{ codeMask }}
    </template>
    
</b-container>
    
</template>

<script>
import { BRow, BCol, BContainer, BButton, BAvatar, BMedia,
        BFormInput, BFormGroup, BInputGroupPrepend, BInputGroup, 
        BFormSelect, BFormDatepicker
    } from 'bootstrap-vue'
import Cleave from 'vue-cleave-component'
import 'cleave.js/dist/addons/cleave-phone.us'
import { codeMask } from '../components/code'
import UploadImages from "vue-upload-drop-images";

export default {
    components: {
    UploadImages,
    BRow, 
    BCol, 
    BContainer, 
    BButton, 
    BAvatar, 
    BMedia, 
    BFormInput, 
    BFormGroup,
    BInputGroupPrepend,
    BInputGroup,
    Cleave,
    BFormSelect,
    BFormDatepicker
    },
    methods: {
        handleImages(files){
      console.log(files)
    }
    },
    data() {
    return {
      selected: null,
      select_options: [
        { value: null, text: 'Selecciona tu género' },
        { value: 'mujer', text: 'Mujer' },
        { value: 'hombre', text: 'Hombre' },
      ],
      form: {
        cardNumber: null,
        date: null,
        phone: null,
      },
      options: {
        creditCard: {
          creditCard: true,
        },
        date: {
          date: true,
          delimiter: '-',
          datePattern: ['Y', 'm', 'd'],
        },
        phone: {
          phone: true,
          phoneRegionCode: 'US',
        },
        time: {
          time: true,
          timePattern: ['h', 'm', 's'],
        },
        number: {
          numeral: true,
          numeralThousandsGroupStyle: 'thousand',
        },
        block: {
          blocks: [4, 3, 3],
          uppercase: true,
        },
        delimiter: {
          delimiter: '·',
          blocks: [3, 3, 3],
          uppercase: true,
        },
        customDelimiter: {
          delimiters: ['.', '.', '-'],
          blocks: [3, 3, 3, 2],
          uppercase: true,
        },
        prefix: {
          prefix: '+63',
          blocks: [3, 3, 3, 4],
          uppercase: true,
        },
      },
      codeMask,
      date_value: '',
    }
  },
    
}
</script>

<style>

.container[data-v-44324f62] {
    padding: 0px;
    border: solid 0px !important;
}

.beforeUpload .icon[data-v-44324f62] {
    margin: auto;
    border-radius: 62px;
}
p.mainMessage {
    display: none;
}
.beforeUpload[data-v-44324f62] {
    text-align: center;
    border-radius: 80px;
    height: 140px;
    width: 140px;
    border: 2px dashed;
    background-color: #7367F01F;
    max-height: 143px;
    max-width: 137px;
    min-width: 137;
    min-height: 143px;
    margin-bottom: 18px;
}

.beforeUpload input[data-v-44324f62] {
    width: 80%;
    height: 80%;
    opacity: 0;
    border-radius: 50px;
    position: absolute;
    display: block;
}

.imgsPreview .imageHolder[data-v-44324f62] {
    width: 140px !important;
    height: 140px !important;
}

.plus {
    display: none;
}

.beforeUpload .icon[data-v-44324f62] {
    margin: auto;
    border-radius: 62px;
    height: 90px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0;
    margin-top: 25%;
    /* margin-left: 4px; */
}

/* image upload */
.imgsPreview .imageHolder img[data-v-44324f62] {
    object-fit: cover;
    width: 100%;
    border-radius: 80px;
    height: 100%;
}

/* .beforeUpload input[data-v-69bb59a3] {
    width: 90%;
    height: 69%;
    opacity: 0;
    position: absolute;
    display: block;
} */
    .badge-secondary {
      /* background-color: #f8f8f8 !important; */
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
    /* left: -4%; */
    top: calc(40% - 15px/2 + 1px);
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
    margin-top: 75px;
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
    /* margin-left: -4% */
  }

  
    .personal-input label {
        text-align: left;
        font-weight: bold;
    }

    .birthday {
        text-align: left;
        font-weight: bold;
    }
    .next-button button {
        margin-bottom: 2em;
        font-size: 20px;
    }
    /* .btn .b-icon.bi {
        font-size: -50px;
    } */

</style>
