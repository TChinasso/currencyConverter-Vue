<template>
  <div id="app">
      <Header class="pageHeader"/>
      <Sidebar class="sideBar" />
      <router-view/>
      <Footer class=""/>
  </div>
</template>

<script scoped>
  import Header from './components/header'
  import Sidebar from './components/sidebar'
  import Footer from './components/footer'
  export default {
    name: 'App',
    components: {
      Header,
      Footer,
      Sidebar
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
    grid-template-columns: 12vw auto;
    grid-template-rows: 0.12fr auto 0.07fr;
    justify-items: center;
    align-items: center;
    grid-template-areas: "pageHeader pageHeader" "sidebar main" "pageFooter pageFooter";
}
.main {
    background:  #ffffff;
    width: 600px;
    height: 280px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: -5px 5px 8px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    display: grid;
}
.pageHeader{
  grid-area: pageHeader;
  justify-self: start;
}
.pageFooter{
  grid-area: pageFooter;
  justify-self: start;
}
.sideBar{
  grid-area: sidebar;
  justify-self: start;
}
@media (max-width: 600px) {
  .main{
    grid-template-columns: 1fr;
  }
  .mainRightPannel{
    display: none;
  }
  .main{
    width: 90vw;
  }
  #inputSize, #inputSize2{
    width: 40vw;
  }
  .space{
    margin-left: 2%;
  }

}

</style>