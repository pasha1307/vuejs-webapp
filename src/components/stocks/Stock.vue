<template>
        <div class="card">
            <div class="content">
                <div class="header">
                    {{stock.name | upper }}
                    <small class="ui grey label right floated"> {{stock.price | currency}}</small>
                </div>
                <div class="description">
                    <div class="ui input">
                        <input type="number" placeholder="quantity..." v-model="quantity">
                    </div>
                </div>
            </div>
            <button class="ui bottom attached button" @click="buyStock" :disabled="tooMuch || quantity <= 0 || !Number.isInteger(quantity)">
                <i class="thumbs outline icon large" :class="{up: quantity > 0}"></i>
               {{ tooMuch ? 'low funds' : 'BUY' }}
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
        funds() {
          return this.$store.getters.funds
        },
        tooMuch() {
          return this.quantity * this.stock.price > this.funds
        }
      },
      methods: {
        buyStock() {
          const order = {
            stockId: this.stock.id,
            stockPrice: this.stock.price,
            quantity: this.quantity
          }
          this.$store.dispatch('buyStock', order)
          console.log(order)
          this.quantity = 0
        }
      }
    }
</script>