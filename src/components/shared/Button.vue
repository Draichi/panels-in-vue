<template>
  <button :class="buttonStyle" :type="model" @click="trigger()">{{ btnMsg }}</button>
</template>

<script>
  export default {
    props: {
      btnMsg: {
        required: true,
        type: String
      },
      confirmation: Boolean,
      model: String,
      btnStyle: String
    },
    methods: {
      trigger () {
        if (this.confirmation) {
          if (confirm('Are you sure ?')) {
            this.$emit('btnActive')
          }
          return
        }
        this.$emit('btnActive')
      }
    },
    computed: {
      buttonStyle () {
        if (this.btnStyle === 'default' || !this.btnStyle) return 'btn btn-default'
        if (this.btnStyle === 'danger') return 'btn btn-danger'
        if (this.btnStyle === 'add-new') return 'btn btn-add-new'
      }
    }
  }
</script>

<style scoped>
  .btn {
    display: inline-block;
    padding: .5vw;
    border-radius: 1.8vh;
    border-style: none;
    margin: .3vw;
    font-size: 2vw;
    color: white;
  }
  .btn-danger {
    background: #E74C3C;
  }
  .btn-default {
    background: #3EB95F;
  }
  .btn-add-new {
    background: #000;
  }
</style>