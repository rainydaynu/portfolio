<template>
  <div class="card">
    {{ message }}
    <button @click="onClick">
      Change
    </button>
  </div>
</template>

<script>
export default {
  name: 'Card',
  data () {
    return {
      message: 'Try change card!'
    }
  },
  methods: {
    onClick () {
      this.message = 'Here you card :)'
    }
  }
}
</script>

<style>
.card {
  padding: 20px;
  background: cornflowerblue;
}
</style>