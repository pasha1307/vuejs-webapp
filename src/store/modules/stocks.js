import stocks from '../../data/stocks'

const state = {
  stocks: []
};
const getters = {
  getStocks: state => state.stocks
};

const mutations = {
  SET_STOCKS: (state, stocks) => state.stocks = stocks,
  SET_RANDOM: (state) => { }
};

const actions = {
  initSetStocks: ({commit}) => commit('SET_STOCKS', stocks),
  buyStock: ({commit},order) => commit('BUY_STOCK', order),
  randomizeStock: ({commit}) => commit()
};

export default {
  state,
  getters,
  mutations,
  actions
}