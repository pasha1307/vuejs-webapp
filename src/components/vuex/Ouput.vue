<template>
    <div class="ui segment">
        <h1>{{result}}</h1>
    </div>
</template>
<script>
    export default {
      computed: {
        result() {
          return this.$store.state.counter
        }
      }
    }
</script>