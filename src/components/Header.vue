<template>
    <div class="ui inverted pointing large menu">
        <router-link to='/' activeClass="active" class="item" tag="a" id="brand">
            <span>APP_NAME</span>
        </router-link>
        <router-link to='/stocks' activeClass="active" class="item" tag="a" >
            Stocks
        </router-link>
        <router-link to='/portfolio' activeClass="active" class="item">
            Portfolio
        </router-link>
        <div class="right menu">
            <a class="item" @click="toRandom">
                RANDOMIZE PRICES
            </a>
            <menu-drop></menu-drop>
            <div class="menu item">
                <div class="ui labeled button" tabindex="0">
                    <div class="ui inverted basic violet button">
                        Funds Available:
                    </div>
                    <a class="ui basic left pointing violet label">
                        {{portfolioStatus | currency}}
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    import Drop from './dropdown/Drop.vue'
    export default {
      created() {
        this.$store.dispatch('initStocks')
      },
      computed: {
        portfolioStatus() {
          return this.$store.getters.funds;
        }
      },
      methods: {
        ...mapActions([
          'randomizeStock'
        ]),
        toRandom() {
        this.randomizeStock()
        }
      },
      components: {
        MenuDrop: Drop
      }
    }
</script>
<style scoped>
#brand.nactive {
    background-color: rgba(0,0,0,.5);
    color: white;
}
</style>