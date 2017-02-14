<template>
    <div class="card">
        <div class="content">
            <div class="header">
                {{stock.name | upper }} <span style="color: darkgrey">Stocks: {{stock.quantity}}</span>
                <small class="ui grey label right floated"> {{stock.price | currency}}</small>
            </div>
            <div class="description">
                <div class="ui input">
                    <input type="number" placeholder="quantity..." v-model="quantity">
                </div>
            </div>
        </div>
        <button class="ui bottom attached button" @click="sellThisStock" :disabled="tooHigh || quantity <= 0 || !Number.isInteger(quantity)">
            <i class="thumbs outline icon large" :class="{ up: !tooHigh && quantity > 0, down: tooHigh && quantity > 0 }"></i>
            {{tooHigh ? 'more than you have': 'SELL' }}
        </button>
    </div>
</template>

<script>
  export default {
    props: ['stock'],
    data() {
      return {
        quantity: 0
      }
    },
    computed: {
      tooHigh() {
        return this.quantity > this.stock.quantity
      }
    },
    methods: {
      sellThisStock() {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity
        }
        this.$store.dispatch('sellStock', order)
        this.quantity = 0
      }
    }
  }
</script>