<template>
  <b-container class="text-center">
    <b-row class="mt-2 p-2" v-for="drink in drinks" :key="drink._id">
      <b-col>
        <b-card :title="drink.name" v-b-toggle="`${drink._id}`">
            <b-collapse :id="drink._id" class="mt-2">
              <p>Frutas:</p>
              <b-badge variant="primary" class="m-1" v-for="fruit in drink.fruits" :key="fruit._id">{{fruit.name}}</b-badge>
              <p class="mt-2">Liquido: </p>
              <p>{{drink.liquid.name}} - Calorias: {{drink.liquid.calories}} ml</p>
              <p>Proteina: </p>
              <p>{{drink.protein.name}} - Calorias: {{drink.protein.calories}} ml</p>
              <b-button-group>
                <b-button variant="success">
                  <i class="fa fa-heart"></i> Sabor: {{drink.taste}}
                </b-button>
                <b-button variant="danger">
                  <i class="fa fa-fire"></i> Total calorias: {{getSuma(drink._id)}}
                </b-button>
              </b-button-group>
            </b-collapse>
        </b-card> 
      </b-col>
    </b-row>
  </b-container>
</template>
<script>

import { mapState, mapGetters  } from 'vuex';
export default {
  async fetch ({ $axios, store }) {
    let response = await $axios.$get('/drinks')
    store.commit('GET_DRINKS', response);
  },
  computed: {
    ...mapGetters([
      'getSuma',
    ]),
    ...mapState([
      'drinks'
    ])
  }
}
</script>