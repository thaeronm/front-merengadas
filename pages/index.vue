<template>
  <div>
    <b-container class="bv-example-row text-center">
      <b-card class="mt-5" title="Super Merengadas"> 
        <b-row class="m-2">
          <b-col class="p-4">
            <nuxt-link to="/new_drink" class="btn btn-outline-primary btn-block btn-lg">Crea tu propia merengada</nuxt-link>
          </b-col>
        </b-row>
        <b-row class="m-2">
          <b-col class="p-4">
            <nuxt-link to="/drinks" class="btn btn-outline-success btn-block btn-lg">Elije una merengada!</nuxt-link>
          </b-col>
        </b-row>
      </b-card>
    </b-container>
  </div>
</template>
<script>

export default {
  
}
</script>