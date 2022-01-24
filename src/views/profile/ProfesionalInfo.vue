<template>
    <b-container>
        <b-row>
            <b-col cols="12">
                <b-form-group
                label="Ärea"
                label-for="area"
                class="personal-input"
            >
                <b-form-select
                v-model="selected"
                :options="select_areas"
                size="lg"
                
                />
                </b-form-group>
            </b-col>
            <b-col cols="12">
                <b-form-group
                label="Profesión"
                label-for="profesion"
                class="personal-input"
            >
                <b-form-select
                v-model="selected"
                :options="select_profesiones"
                size="lg"
                
                />
                </b-form-group>
            </b-col>
            <b-col cols="12">
                <b-form-group
                label="Especialidad"
                label-for="especialidad"
                class="personal-input"
                >
                <multiselect v-model="value" :options="options" :multiple="true" :close-on-select="false" :clear-on-select="false" :preserve-search="true" placeholder="Seleccione sus especialidades" label="name" track-by="name" :preselect-first="true">
                    <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} options selected</span></template>
                </multiselect>
                </b-form-group>
            </b-col>
            <b-col cols="12">
                <b-form-group
                    label="Zona de atendimiento (Opcional)"
                    label-for="zone"
                    class="personal-input"
                >
                    <b-form-input
                    id="zone"
                    placeholder="Ej. Santa Fé, Polanco y Jardines"
                    />
                </b-form-group>
            </b-col>
            <b-col cols="12">
                <b-form-group
                    label="Descripción (Opcional)"
                    label-for="descripcion"
                    class="personal-input"
                >
                    <b-form-textarea
                    id="descripcion"
                    placeholder="Describa tu trabajo aquí"
                    rows="3"
                    />
                </b-form-group>
            </b-col>
            <b-col cols="12">
                <b-form-group
                    label="Mi URL"
                    label-for="url"
                    class="personal-input"
                >
                    <b-input-group class="input-group-merge">
                    <b-input-group-prepend is-text>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-link-2"><path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                        
                    </b-input-group-prepend>
                    <b-form-input 
                    value="https://instagram.com/giuliamoura"
                    readonly
                    placeholder="Url" />
                    </b-input-group>
                </b-form-group>
            </b-col>
            <feather-icon
            icon="password"
            class="cursor-pointer"
          />
          <b-col cols="12">
              <b-form-group
                    label="Instagram (Opcional)"
                    label-for="instagram"
                    class="personal-input"
                >
                <b-input-group class="input-group-merge">
                    <b-input-group-prepend is-text>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </b-input-group-prepend>
                    <b-form-input value="https://instagram.com/giuliamoura" placeholder="Search" />
                </b-input-group>
                </b-form-group>
            </b-col>
            <b-col class="switch">
                <b-form-checkbox
                checked="true"
                name="check-button"
                switch
                inline
                class="cjeck personal-inp"
                >
                <i data-feather='instagram'></i>
                Importar fotos de instagram
                </b-form-checkbox>
            </b-col>
            <b-col class="next-finished" cols="12">
                <b-button 
                    variant="relief-primary"
                    block
                >
                Finalizar
                </b-button>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>

import Multiselect from 'vue-multiselect'

import { BRow, BCol, BContainer, BButton, BAvatar,
        BFormInput, BFormGroup, BInputGroupPrepend, BInputGroup, 
        BFormSelect, BFormTextarea, BCardText, BFormCheckbox
    } from 'bootstrap-vue'

export default {
    components: {
        Multiselect,
        BRow, 
        BCol, 
        BContainer, 
        BButton, 
        BAvatar, 
        BFormInput, 
        BFormGroup,
        BInputGroupPrepend,
        BInputGroup,
        BFormSelect,
        BFormTextarea,
        BCardText,
        BFormCheckbox
    },
    data() {
        return {
            value: [],
            options: [
                { name: 'descontaminante', language: 'descontaminante' },
                { name: 'facial', language: 'Facial' },
                { name: 'pedicure', language: 'Pedicure' },
            ],
            selected: null,
            select_areas: [
                { value: null, text: 'Selecciona tu área' },
                { value: 'bienestar', text: 'Bienestar' },
                { value: 'salud', text: 'Salud' },
            ],
            select_profesiones: [
                { value: null, text: 'Selecciona tu profesion' },
                { value: 'masajista', text: 'Masajista' },
                { value: 'pedicure', text: 'Pedicure' },
            ],
            dir: 'ltr',
            selected_option: [
                { title: 'Square' },
                { title: 'Romboid' },
            ],
        }
    }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
    .personal-input label {
        text-align: left !important;
        font-weight: bold;
    }
    .custom-control-inline {
    margin-bottom: 1em;
    margin-right: 17em;
    }
    .next-finished button {
        margin-bottom: 2em;
        font-size: 20px;
    }
    .switch .personal-inp {
        text-align: left;
    }
    .custom-control-label {
        text-align: left !important;
    }
</style>