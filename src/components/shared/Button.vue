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
      model: String
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
        if (this.estilo === 'default' || !this.estilo) return 'btn btn-default'
        if (this.estilo === 'danger') return 'btn btn-danger'
        if (this.estilo === 'add-new') return 'btn-add-new'
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
    font-size: 1vw;
  }
  .btn-danger {
    background: #E74C3C;
    color: white;
  }
  .btn-default {
    background: #3EB95F;
    color: white;
  }
  .btn-add-new {
    background: #000;
  }
</style>