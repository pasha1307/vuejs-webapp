<template>
        <div class="ui cards">
            <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
        </div>
</template>

<script>
import {mapGetters} from 'vuex';
import Stock from './Stock.vue';

export default {

  computed: {
    ...mapGetters({
      stocks: 'stockPortfolio'
    })
    },
    components: {
    appStock: Stock
    }
    }
</script>

<style>
    .slide-enter-active {
        animation: slide-in 200ms ease-out forwards;
    }
    .slide-leave-active {
        animation: slide-out 400ms ease-out forwards;

    }
    @keyframes slide-in {
        from {
            opacity: 0;
            transform: translateX(-50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    @keyframes slide-out {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(550px);
        }
    }
</style>