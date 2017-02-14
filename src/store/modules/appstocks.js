import stocks from '../../data/stocks'

const state = {
  stocks: []
};
const mutations = {
  'SET_STOCKS' (state,stocks) {
    state.stocks = stocks
  },
  'SET_RANDOM'(state) {
    state.stocks.forEach((stock) => {
      stock.price = Math.round(stock.price * (1 + Math.random() - 0.5))
    })
  }
};

const actions = {
  initStocks: ({commit}) => commit('SET_STOCKS', stocks),
  randomizeStock: ({commit}) => commit('SET_RANDOM')
};

const getters = {
  stocks: (state) => state.stocks

}

export default {
  state,
  mutations,
  actions,
  getters
}