<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <table>
      <caption>recently jobs</caption>
      <tr class="titles">
        <td>title</td>
        <td>decription</td>
        <td>date</td>
      </tr>
      <tr v-for="job of jobs">
        <td>{{ job.title }}</td>
        <td>{{ job.description }}</td>
        <td>{{ job.date }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      title: 'jobs',
      jobs: []
    }
  },
  created () {
    this.$http.get('http://localhost:3636/jobs')
      .then(res => res.json())
      .then(function (jobs) {
        this.jobs = jobs
      }, err => console.log(err))
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
  max-width: 20vw;
  overflow: hidden;
  padding: 1vw;
}
</style>
