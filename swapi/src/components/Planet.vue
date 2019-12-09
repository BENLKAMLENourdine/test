<template>
  <div class="container">
    <div class="row">
      <div v-if="loading" class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
      <div v-if="error" class="alert alert-danger" role="alert">
        Error while fetching Planet informations
      </div>
      <div v-if="!loading && !error" class="col-md-6">
        <h3>Information about planet : {{ results['name'] }}</h3>
        <ul>
          <li>Rotation period : {{ results['rotation_period'] }}</li>
          <li>Orbital period : {{ results['orbital_period'] }}</li>
          <li>Diameter : {{ results['diameter'] }}</li>
          <li>Climate : {{ results['climate'] }}</li>
          <li>Gravity : {{ results['gravity'] }}</li>
          <li>Terrain : {{ results['terrain'] }}</li>
          <li>Surface water : {{ results['surface_water'] }}</li>
          <li>Population : {{ results['population'] }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
const api = 'https://swapi.co/api/planets/'

export default {
  name: 'planet',
  data(){
    return {
      results: [],
      loading: true,
      error: false
    }
  },
  async mounted() {
    await this.fetchPlanet()
  },
  methods: {
    async fetchPlanet() {
      try {
        const res = await axios.get(api + this.$route.params.id)
        this.results = res['data']
        this.loading = false
      } catch (error) {
        this.error = true
        this.loading = false
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
