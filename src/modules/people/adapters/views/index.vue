<template>
  <div>

  <b-row>
    <b-col>`Session`</b-col>
    <b-col> session<b-form>
      <b-form-group
            descripcion="Nombre de la persona a registrar"
            label="Nombre"
            label-for="inputName"
          >
            <b-form-input id="inputName" v-model="person.name"></b-form-input>
          </b-form-group>

          <b-form-group
            descripcion="Nombre del trabajo a registrar"
            label="Trabajo"
            label-for="inputJob"
          >
            <b-form-input id="inputJob" v-model="person.job"></b-form-input>
          </b-form-group>
    </b-form> </b-col>
    <b-col>Sesion</b-col>
  </b-row>
  
    <h1>{{valueX}}</h1>
    <code>{{ person }}</code>
  </div>
</template>

<script lang="ts" >
import Vue from "vue";
import {Person} from '../../entities/person'
export default Vue.extend({
    name:'IndexPersonVue',
    data(){
        return {
            valueX:'Este valor esta aquí' as string,
            person:{
              name:"" as string
            }  as Person

        }
    }
})
</script>

<style>

</style>