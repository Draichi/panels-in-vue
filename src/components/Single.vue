<template>
  <div class="hello">
    <h2>{{ job.title }}</h2>
    <p>{{ job.description }}</p>
  </div>
</template>

<script>
import Job from '../domain/Job'
import JobService from '../domain/JobService'

export default {
  name: 'Single',
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
h1, h2 {
  font-weight: normal;
  text-transform: uppercase;
}
table {
  margin: 0 auto;
  font-size: 1.6rem;
}
.titles {
  font-size: 2.5rem;
  font-weight: bold;
}
td {
  max-width: 40vw;
  overflow: hidden;
  padding: 1.5vw;
}
</style>
