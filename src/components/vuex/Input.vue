<template>
<div class="ui segment">
    <button class="ui button basic purple" @click="plus">Increase</button>
    <button class="ui button basic teal" @click="minus">Decrease</button>
</div>
</template>
<script>
export default {
  methods: {
    plus() {
      this.$store.state.counter++
    },
    minus() {
      this.$store.state.counter--
    }
  }
}
</script>