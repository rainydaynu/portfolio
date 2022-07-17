<template>
  <div class="test">
    {{ message }}
    <button @click="onClick">
      Change
    </button>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {
      message: 'Try change test!'
    }
  },
  methods: {
    onClick () {
      this.message = 'Here you test :)'
    }
  }
}
</script>

<style>
.test {
  padding: 20px;
  background: magenta;
}
</style>