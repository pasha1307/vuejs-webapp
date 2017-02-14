<template>
    <div class="ui pointing dropdown link item" @click="isOpen = !isOpen" :class="{active: !isOpen, visible: !isOpen}">
        <div class="text">FIREBASE</div>
        <i class="dropdown icon"></i>
        <div class="menu" :class="{transition: !isOpen, visible: !isOpen}">
            <div class="item" @click="saveData">Save</div>
            <div class="item" @click="loadExternalData">Load</div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
export default {
  data() {
    return {
        isOpen: true
    }
},
  methods: {
    ...mapActions([
        'loadData'
    ]),
    saveData() {
      const data = {
        funds: this.$store.getters.funds,
        stocks: this.$store.getters.stocks,
        stockPortfolio: this.$store.getters.stockPortfolio
      }
      this.$http.put('vuedata.json',data)
    },
    loadExternalData() {
        this.loadData()
    }
  }

}
</script>