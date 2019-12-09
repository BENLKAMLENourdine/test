<template>
  <div class="container">
    <div class="row">
      <div v-if="loading" class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
      <div v-if="error" class="alert alert-danger" role="alert">
        Error while fetching Star wars actors
      </div>
      <div class="col-md-4" v-for="result in results">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Name: {{ result.name }}</h5>
            <p class="card-text">Height: {{ result.height }}</p>
            <p class="card-text">Weight: {{ result.mass }}</p>
            <router-link :to="'/planet/' + result.homeworld.slice(-2, result.homeworld.length - 1)">
              <a :href="'/planet/' + result.homeworld.slice(-2, result.homeworld.length - 1)" class="btn btn-primary">See planet</a>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
const api = 'https://swapi.co/api/people'

export default {
  name: 'home',
  data(){
    return {
      results: [],
      error: false,
      loading: true
    }
  },
  async mounted() {
    await this.fetchActors()
  },
  methods: {
    async fetchActors() {
      const actors = []
      try {
        let res = await axios.get(api)
        actors.push(...res['data']['results'])
        this.results = actors
        this.loading = false
        while (res['data']['next']){
          res = await axios.get(res['data']['next'])
          actors.push(...res['data']['results'])
          this.results = actors
        }
      } catch (error) {
        this.loading = false
        this.error = true
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.col-md-4{
  margin-bottom: 10px
}
</style>
