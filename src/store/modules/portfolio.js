const state = {
  funds: 1000,
  stocks: []
};
const mutations = {
  BUY_STOCK: (state,{ stockId, stockPrice, quantity}) => {
    const record = state.stocks.find( el => el.id == stockId);
    if(record) {
      record.quantity += quantity
    } else {
      state.stocks.push({
        id: stockId,
        quantity: quantity
      })
    }
    state.funds -=stockPrice * quantity
  },
  SELL_STOCK: (state,{stockId, stockPrice, quantity}) => {
    const record = state.stocks.find(el => el.id == stockId);
    if(record.quanity > quanity) {
      record.quanity -= quantity
    } else {
      state.stocks.splice(state.stocks.indexOf(record),1)
    }
    state.funds += stockPrice * quantity
  }
};

const actions = {
  sellStoreStock: ({commit}, order) => commit('SELL_STOCK', order)

};

const getters = {
  stockPortfolio (state, getters)  {
    return state.stocks.map(stock => {
            const record = getters.stocks.find(element => element.id == stock.id)
            return {
              id: stock.id,
              quantity: stock.quantity,
              name: record.name,
              price: record.price
            }
    })
  },
  getFunds: state => state.funds
}

export default {
  state,
  mutations,
  actions,
  getters
}