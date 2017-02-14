<template>
        <div>
            <div class="ui cards">
                <stocks-stock v-for="stock in stocks" :stock="stock"></stocks-stock>
            </div>

        </div>

</template>

<script>
    import Stock from './Stock.vue'
    export default {
      name: 'stocks',
      computed: {
        stocks() {
          return this.$store.getters.stocks
        }
      },
      components: {
        StocksStock: Stock
      }
    }
</script>
