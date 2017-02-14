<template>
    <div class="ui container">
        <app-out></app-out>
        <hr>
        <app-in></app-in>
    </div>
</template>
<script>
    import Input from './Input.vue'
    import Output from './Ouput.vue'
    export default {
//      data() {
//        return {
//          counter: 0
//        }
//      },
      components: {
        AppIn: Input,
        AppOut: Output
      }
    }
</script>