<template>
  <div>
    <h2 v-if ="job._id" class="title">{{ job.title }}</h2>
    <h2 v-else class="title">add new</h2>
    <form @submit.prevent="add()">
      <div class="control">
        <label for="title">title</label>
        <input data-vv-rules="required|min:3|max:30" name="title" data-vv-as="title" id="title" autocomplete="off" v-model="job.title">
      </div>
      <div class="control">
        <label for="description">description</label>
        <textarea id="description" autocomplete="off" v-model="job.description"></textarea>
      </div>
      <div>
        <btn btnMsg="Add" model="submit" btnStyle="default"/>
        <router-link :to="{name: 'Home'}"><btn btnMsg="Back" btnStyle="add-new"/></router-link>
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
      this.service
        .addNew(this.job)
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
  .title {
    text-align: center;
    text-transform: uppercase;
  }
  .control {
    font-size: 1.2em;
    margin-bottom: 5vh;
  }
  .control label {
    display: block;
    font-weight: bold;
    text-transform: capitalize;
  }
 .control label + input, .control textarea {
    text-align: center; 
    font-size: inherit;
    width: 60vw;
    padding: 2vh 2vh;
    margin: 1vh 0;
    box-sizing: border-box;
    background-color: #eeeeee;
  }
  .control textarea {
    height: 30vh;
  }
  .control label + input:focus, textarea:focus {
    background-color: initial;
  }
</style>