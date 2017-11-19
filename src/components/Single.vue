<template>
  <div class="hello">
    <h2>{{ job.title }}</h2>
    <p>{{ job.description }}</p>
    <div class="btn">
      <router-link :to="{name: 'Home'}"><btn btnMsg="Back" btnStyle="add-new"/></router-link>
    </div>
  </div>
</template>

<script>
import Button from './shared/Button.vue'
import Job from '../domain/Job'
import JobService from '../domain/JobService'

export default {
  name: 'Single',
  components: {
    'btn': Button
  },
  data () {
    return {
      job: new Job(),
      id: this.$route.params.id
    }
  },
  created () {
    this.service = new JobService(this.$resource)
    if (this.id) {
      this.service
        .find(this.id)
        .then((job, err) => {
          if (err) {
            console.log(err)
          }
          this.job = job
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  padding: 0 20vw;
}
h2 {
  font-weight: normal;
  text-transform: uppercase;
  padding: 3vh;
  font-size: 3vw;
}
p {
  font-size: 1.5vw;
}
.btn {
  margin: 10vh;
}
</style>
