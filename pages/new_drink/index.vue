<template>
  <b-container class="bv-example-row text-center">
    <b-card class="mt-3" title="Crea la merengada de tus sueños!">
      <b-form v-on:submit.prevent="guardar" class="p-1 m-2">
        <b-form-group id="input-group-name" label="Nombre de la bebida:" label-for="name">
          <b-form-input
            id="input-name"
            v-model="drink.name"
            type="text"
            required
            placeholder="Super Power"
          ></b-form-input>
        </b-form-group>
        <label>Selecciona varias frutas:</label>
        <b-row class="mb-2">
          <b-col>
            <b-form-select id="input-3" v-model="newFruit">
              <option value>Selecciona una fruta</option>
              <option v-for="fruit in fruits" :key="fruit._id" :value="fruit._id">{{ fruit.name }}</option>
            </b-form-select>
          </b-col>
          <b-col>
            <b-button variant="success" block v-on:click="addFruit(newFruit)">
              <i class="fa fa-plus"></i> Añadir
            </b-button>
          </b-col>
        </b-row>
        <b-form-group id="input-group-3" label="Liquido:" label-for="input-3">
          <b-form-select id="input-3" v-model="drink.liquid" required>
            <option value>Selecciona un liquido</option>
            <option v-for="liquid in liquids" :key="liquid._id" :value="liquid._id">{{ liquid.name }}</option>
          </b-form-select>
        </b-form-group>
        <b-form-group id="input-group-3" label="Proteina:" label-for="input-3">
          <b-form-select id="input-3" v-model="drink.protein" required>
            <option value>Selecciona una proteina</option>
            <option v-for="protein in proteins" :key="protein._id" :value="protein._id"
            >{{ protein.name }}</option>
          </b-form-select>
        </b-form-group>
        <b-row class="mb-2">
          <b-col>
            <label>Sabor:</label>
            <b-form-spinbutton id="demo-sb" v-model="drink.taste" min="1" max="100"></b-form-spinbutton>
          </b-col>
        </b-row>
        <b-row class="pt-3">
          <b-col>
             <nuxt-link to="/" class="btn btn-warning btn-block">Atras</nuxt-link>
          </b-col>
          <b-col>
            <b-button block type="submit" variant="primary">Guardar</b-button>
          </b-col>
        </b-row>
      </b-form>
    </b-card>
  </b-container>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data: () => {
    return {
      drink: {
        name: '',
        fruits: [],
        liquid: '',
        protein: '',
        taste: 50
      },
      newFruit: ""
    }
  },
  methods: {
    addFruit (newFruit) {
      let found = this.drink.fruits.indexOf(newFruit);
      if (found >= 0) {
        return swal('Ya añadio esta fruta', 'Seleccione otra fruta', 'warning')
      } else {
        this.drink.fruits.push(newFruit);
        this.newFruit = "";
        return swal('Fruta añadida', '', 'success')
      }
    },
    guardar () {
      let drink = {};
      drink = this.drink;
      this.$axios.$post('/drink', drink).then(response => {
        this.drink.name = '';
        this.drink.fruits = [];
        this.drink.liquid = '';
        this.drink.protein = '';
        this.drink.taste = 50;
        this.newFruit = "";
        swal('Success', 'Nueva bebida añadida!', 'success')
      })
      .catch(err => {
        this.addLoading = false
        swal('Error', 'No se pudo guardar la bebida', 'error')
        console.log(err)
      })
    }
  },
  async fetch({ $axios, store }) {
    let fruits = await $axios.$get('/fruits')
    store.commit('GET_FRUITS', fruits)
    let liquids = await $axios.$get('/liquids')
    store.commit('GET_LIQUIDS', liquids)
    let proteins = await $axios.$get('/proteins')
    store.commit('GET_PROTEINS', proteins)
  },
  computed: mapState(['fruits', 'liquids', 'proteins'])
}
</script>