import Vue from 'vue';

export const loadData = ({commit}) => {
  Vue.http.get('vuedata.json')
    .then(response => response.json())
    .then(vuedata => {
      if (vuedata) {
        const stocks = vuedata.stocks;
        const funds = vuedata.funds;
        const stockPortfolio = vuedata.stockPortfolio;

        const portfolio = {
          stockPortfolio,
          funds
        };

        commit('SET_STOCKS', stocks);
        commit('SET_PORTFOLIO', portfolio);
      }
    });
};