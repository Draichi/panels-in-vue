<template>
  <div class="hello">
    <h1>recently jobs</h1>
    <h4 v-show="msg">{{ msg }}</h4>
    <table>
      <tr class="titles">
        <td>jobs</td>
        <td>date</td>
        <td></td>
        <td></td>
      </tr>
      <tr v-for="job of jobs">
        <router-link :to="{name:'single', params:{id:job._id}}">
          <td>{{ job.title }}</td>
        </router-link>
          <td>{{ job.date | formatDate }}</td>
        <td><btn btnMsg="delete" model="button" :confirmation="true" btnStyle="danger" @btnActive="remove(job)" ></btn></td>
        <router-link :to="{name:'edit', params:{id:job._id}}">
          <td><btn btnMsg="edit" model="button" :confirmation="false" btnStyle="add-new"></btn></td>
        </router-link>
      </tr>
    </table>
    <div class="post-btn">
      <router-link :to="{name: 'New'}"><btn btnMsg="Post a Job" btnStyle="default" class="post-btn"/></router-link>
    </div>
  </div>
</template>

<script>
import Btn from './shared/Button.vue'
import JobService from '../domain/JobService'

export default {
  components: {
    'btn': Btn
  },
  name: 'HelloWorld',
  data () {
    return {
      jobs: [],
      msg: ''
    }
  },
  created () {
    this.service = new JobService(this.$resource)
    this.service
      .list()
      .then((jobs, err) => {
        if (err) {
          this.msg = err.message
        }
        this.jobs = jobs
      })
  },
  methods: {
    remove (job) {
      this.service.del(job._id)
        .then((error, data) => {
          if (error) {
            this.msg = 'something went wrong'
          }
          let index = this.jobs.indexOf(job)
          this.jobs.splice(index, 1)
          this.msg = 'job removed'
        })
    }
  }
}
</script>

<style scoped>
h1, h4 {
  text-transform: uppercase;
}
table {
  margin: 0 auto;
  font-size: 1.6rem;
  padding-top: 5vh;
}
.titles {
  font-size: 2rem;
  font-weight: bold;
  text-transform: capitalize;
}
td {
  max-width: 40vw;
  overflow: hidden;
  padding: 1.5vw;
}

tr:nth-child(2n) {
  background-color: #eeeeee;
}
.post-btn {
  padding: 5vh;
}
</style>
