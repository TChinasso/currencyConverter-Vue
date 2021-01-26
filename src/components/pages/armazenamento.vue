<template>
  <div>
    <div class="main">
    <header class="mainHeader">     
      <p>
        {{dataInInput}} {{dataInOption.name}} é equivalente a {{dataOutInput}} {{dataOutOption.name}}s
      </p>
    </header>
    <div class="mainLeftPannel">
      <div class="space">
        <div class="field">
          <div class="control">
            <input type="" class="width40 input" :class="screenSize" id="inputSize" v-model="dataInInput" @keyup="calculateDataOut">
            <div class="select" :class="screenSize" >
              <select name="" id="" v-model="dataInOption" @change="calculateDataOut">
                <option v-for="(dataName, index) in byteConverter" :key="index" 
                v-bind:value="{name: dataName.unity, value: dataName.value}" >
                  {{dataName.unity}}
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="space">
        <div class="field">
          <div class="control">
            <input type="" class="width40 input" :class="screenSize" id="inputSize" v-model="dataOutInput" @keyup="calateDataIn">
            <div class="select" :class="screenSize" >
              <select name="" id="outOption" v-model="dataOutOption" @change="calculateDataOut()">
                <option v-for="(dataName, index) in byteConverter" :key="index"
                v-bind:value="{name: dataName.unity, value: dataName.value}">
                  {{dataName.unity}}
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>    
    <div class="mainRightPannel">
      <i class="fas fa-hdd absolute-ico"></i>
    </div>
    <footer class="mainFooter">
      
    </footer>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      byteConverter: {},
      dataInInput: 1,
      dataOutInput: '',
      dataInOption: {},
      dataOutOption: {},
      dataName: {},
      screenSize: 'is-medium',

    }
  },
  created: function(){
    axios.get("https://raw.githubusercontent.com/TChinasso/currencyConverter-Vue/main/bit.json").then(response => {
      this.dataOutOption.value = response.data.values.megabyte.value
      this.dataOutOption.name = response.data.values.megabyte.unity
      this.dataInOption.name = response.data.values.gigabyte.unity
      this.dataInOption.value = response.data.values.gigabyte.value
      this.byteConverter = response.data.values
      this.calculateDataOut()
      console.log(this.dataOutOption)
    })
    let windowSize = document.body.clientWidth;
      if(windowSize < 600){
      this.screenSize = ''
    }

  },
    methods: {
    calculateDataOut: function(){
      this.dataOutInput = (this.dataInInput * this.dataInOption.value) / this.dataOutOption.value
    },
    calateDataIn: function(){
      this.dataInInput = (this.dataOutInput * this.dataOutOption.value) / this.dataInOption.value
    }
  },
  
}
</script>

<style scoped>
.main{
  grid-template-columns: 1.3fr 0.7fr;
    grid-template-rows: 40px auto 40px;
    grid-template-areas:  "mainHeader mainHeader"
                          "mainLeftPannel mainRightPannel"
                          "mainFooter mainFooter";
    grid-area: main;
}
.mainHeader{
  grid-area: mainHeader;
  align-self: center;
  justify-self: center;
}
.mainLeftPannel{
  width: 100%;
  grid-area: mainLeftPannel;
  justify-self: start;
}
.mainRightPannel{
  width: 100%;
  height: 100%;
  grid-area: mainRightPannel;
  align-self: center;
  justify-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.mainFooter{
  grid-area: mainFooter;
  margin: 0 0 2% 2%;
}
.width40{
  width: 50%;
  margin-right: 5%;
}
.space{
  margin: 10% 0 0 10%;
}
.absolute-ico{
  font-size: 100px;
  background:-moz-linear-gradient(top, #21e1af -20%, #09b0e8 100%); 
  background: -webkit-linear-gradient(top, #21e1af -20%,#09b0e8 100%); 
  background: linear-gradient(to bottom, #21e1af -20%,#09b0e8 100%);
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color:transparent;
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