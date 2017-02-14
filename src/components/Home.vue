<template>
        <div class="ui raised segment">
            <h2 class="ui header huge">Trade of View Portfolio</h2>
            <h3>VueJS Project</h3>
            <h4>SemanticUI, Vuex, Routing, and Firebase</h4>
            <p>Communicating between components and state management via Vuex</p>
        </div>
</template>

<script>
    import Pfolio from './portfolio/Portfolio.vue'
    import Stocks from './stocks/Stocks.vue'
    import Menu from './Header.vue'
    export default {
      name: 'home',
      components: {
        AppFolio: Pfolio,
        AppStocks: Stocks,
        AppMenu: Menu
      }

    }
</script>

<style>

</style>