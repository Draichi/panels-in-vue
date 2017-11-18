<template>
  <div>
    <h2 v-if ="job._id" class="centralizado">{{ job.title }}</h2>
    <h2 v-else class="centralizado">add new</h2>
    <form @submit.prevent="add()">
      <div class="controle">
        <label for="title">title</label>
        <input data-vv-rules="required|min:3|max:30" name="title" data-vv-as="title" id="title" autocomplete="off" v-model="job.title">
          <!--<span v-show="errors.has('titulo')">
            {{ errors.first('titulo') }}
          </span>-->
      </div>
      <div class="controle">
        <label for="description">description</label>
        <textarea id="description" autocomplete="off" v-model="job.description"></textarea>
      </div>
      <div class="centralizado">
        <btn btnMsg="add" model="submit"/>
        <router-link :to="{name: 'Home'}"><btn btnMsg="back"/></router-link>
      </div>
    </form>
  </div>
</template>

<script>

import Button from './shared/Button.vue'
import JobService from '../domain/JobService'
import Job from '../domain/Job'

export default {
  components: {
    'btn': Button
  },
  data () {
    return {
      job: new Job(),
      id: this.$route.params.id
    }
  },
  methods: {
    add () {
      this.$http
        .post('http://localhost:3636/jobs', this.job)
        .then((sucess, err) => {
          if (err) {
            console.log(err)
          }
          this.job = new Job()
        })
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

<style scoped>
  .centralizado {
    text-align: center;
  }
  .controle {
    font-size: 1.2em;
    margin-bottom: 20px;
  }
  .controle label {
    display: block;
    font-weight: bold;
  }
 .controle label + input, .controle textarea {
    width: 100%;
    font-size: inherit;
    border-radius: 5px
  }
  .centralizado {
    text-align: center;
  }
</style>