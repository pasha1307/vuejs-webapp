<template>
  <div id="app">
    <app-menu></app-menu>
  <div class="ui container">
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>

  </div>
    <!--<img src="./assets/logo.png">-->
  </div>
</template>

<script>
  import Menu from './components/Header.vue'
export default {
  name: 'app',
  components: {
    AppMenu: Menu
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
}
.ui.container {
  margin-top: 70px;
}
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
