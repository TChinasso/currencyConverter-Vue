<template>
  <div id="app">
      <Header class="pageHeader"/>
      <Main class=""/>
      <Footer class=""/>
  </div>
</template>

<script scoped>
  import Header from './components/header'
  import Main from './components/main'
  import Footer from './components/footer'
  export default {
    name: 'App',
    components: {
      Header,
      Main,
      Footer
    },
    data (){
      return{
      }
    },
    created: function (){

    }
  }
</script>
<style>
@media (max-width: 600px) {
  #app{
    width: 90vw;
  }
}
 body, html, #app {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 100vh;
    width: 100vw;
}
#app{
    background-color:#e1e1e2;
    display: grid;
    grid-template-columns: 100vw;
    grid-template-rows: 0.12fr auto 0.07fr;
    justify-items: center;
    align-items: center;
    grid-template-areas: "pageHeader" "main" "pageFooter";
}
.main {
    background:  #ffffff;
    width: 600px;
    height: 280px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: -5px 5px 8px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    display: grid;
    grid-template-columns: 1.3fr 0.7fr;
    grid-template-rows: 0.05fr 1fr 0.05fr;
    grid-template-areas:  "mainHeader mainHeader"
                          "mainLeftPannel mainRightPannel"
                          "mainFooter mainFooter";
    grid-area: main;
}
.pageHeader{
  grid-area: pageHeader;
  justify-self: start;
}
.pageFooter{
  grid-area: pageFooter;
  justify-self: start;
}

</style>