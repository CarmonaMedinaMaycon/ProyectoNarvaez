<template>
  <div>
    <b-row>
      <b-col>`Session`</b-col>
      <b-col>
        session<b-form>
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
            <b-button type="submit" variant="primary" @click="savePerson(person)">Submit</b-button>
          </b-form-group>
        </b-form>
      </b-col>
      <b-col>Sesion</b-col>
    </b-row>

    <h1>{{ valueX }}</h1>
    <code>{{ person }}</code>
<b-row>
    <b-col
      cols="12"
      sm="6"
      md="4"
      v-for="person in people.data"
      v-bind:key="person.id"
    >
      <b-card title="Card Title">
        <b-avatar :src="person.avatar" size="4rem"></b-avatar>
        <b-card-text>
          {{ person.first_name }}
          <p></p>
          {{ person.email }}
        </b-card-text>

        <b-button href="#" variant="primary">Editar</b-button>
      </b-card>
    </b-col>
  </b-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Person } from "../../entities/person";
import { PeopleController } from "../people-controller";
import { AllPersonDTO } from "../../entities/AllpeopleDTO";
export default Vue.extend({
  name: "IndexPersonVue",
  data() {
    return {
      people: {} as AllPersonDTO,
      valueX: "Este valor esta aquí" as string,
      person: {
        name: "" as string,
      } as Person,
    };
  },
  methods: {
    async findAll(page: number) {
      const controller = new PeopleController();
      const response = await controller.findAllPeople(page);
      this.people = response.entity!;
    },
    async savePerson(person:Person){
      const controller = new PeopleController();
      const response = await controller.savePerson(person);
      console.log(response, "olaaaaa");
      this.$swal.fire({
        title:"bien",
        text:"todo correcto",
        icon:'success',
        confirmButtonText:"cool"
      })
    }
  },
  mounted() {
    this.findAll(2);
  },
});
</script>

<style></style>
