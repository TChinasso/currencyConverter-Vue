<template>
    <div class="main">
    <header class="mainHeader">
      <p>date of rates <strong>{{ siglas.date }}</strong></p>
    </header>
    <div class="mainLeftPannel">
      <div class="space">
        <div class="field">
          <div class="control">
            <input type="" class="input" :class="screenSize" id="inputSize" v-model="moneyIn"
              @keyup="calculateMoneyOut" @keypress="onlyNumber">
            <div class="select" :class="screenSize" style="width: 45%;">
              <select name="moneyIn" id="moneyIn" v-model="moneyInOption" @change="calculateMoneyOut">
                <option v-for="(value, named, index) in siglas.rates" :key="index" :value="value" :moneyInOption="value">
                  {{currencyNames[`${named}`]}}
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="space">

        <div class="field">
          <div class="control">
            <input type="text" class="input" :class="screenSize" id="inputSize2" v-model="moneyOut"
              @keyup="calculateMoneyIn" @keypress="onlyNumber">
            <div class="select" :class="screenSize" ref="selectOut" style="width: 45%;">
              <select name="moneyOut" id="moneyOut" v-model="moneyOutOption" @change="calculateMoneyOut">
                <option v-for="(value, named, index) in siglas.rates" :value="value" :key="index">
                  {{currencyNames[`${named}`]}}
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mainRightPannel">
      <i class="fas fa-funnel-dollar absolute-ico"></i>
    </div>
    <footer class="mainFooter">
      <p class="mainFooterP">
        current and historical foreign exchange rates published by the <a
          href="https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html"
          target="_blank">European Central Bank</a>
      </p>
    </footer>
  </div>
</template>

<script>
import axios from 'axios';
export default {
        data() {
      return {
        screenSize: 'is-medium',
        moneyIn: '1',
        moneyOut: '',
        moneyInOption: '',
        moneyOutOption: '',
        moneyInSigla: '',
        moneyOutSigla: '',
        EUR: "",
        siglas: {},
        currencyNames: {}
      }
    },
    created: function () {
      axios.get("https://api.exchangeratesapi.io/latest").then(response => {
        this.EUR = response.data
        this.siglas = response.data
        this.moneyInOption = response.data.rates.BRL
        this.moneyOutOption = response.data.rates.USD
        this.siglas.rates['EUR'] = 1
        this.calculateMoneyOut()
      })
        axios.get('https://openexchangerates.org/api/currencies.json').then(response => {
        this.currencyNames = response.data
      })
      let windowSize = document.body.clientWidth;
      if(windowSize < 600){
        this.screenSize = ''
      }
    },

    methods: {
      calculateMoneyOut: function () {
        this.moneyOut = (Number(this.moneyIn) / this.moneyInOption) / (1 / this.moneyOutOption)
        this.moneyOut = this.moneyOut.toFixed(2)
      },
      calculateMoneyIn: function () {
        this.moneyIn = (Number(this.moneyOut) / this.moneyOutOption) / (1 / this.moneyInOption)
        this.moneyIn = this.moneyIn.toFixed(2)
      },
      onlyNumber ($event) {
        //console.log($event.keyCode); //keyCodes value
        let keyCode = ($event.keyCode ? $event.keyCode : $event.which);
        if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) { // 46 is dot
          $event.preventDefault();
   }
}
    }
}
</script>

<style scoped>
.main{
  grid-template-columns: 1.3fr 0.7fr;
    grid-template-rows: 0.05fr 1fr 0.05fr;
    grid-template-areas:  "mainHeader mainHeader"
                          "mainLeftPannel mainRightPannel"
                          "mainFooter mainFooter";
    grid-area: main;
}
.mainHeader{
  grid-area: mainHeader;
  margin: 2% 0 0 2%
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
#inputSize, #inputSize2{
  width: 45%;
  margin-right: 6%;
}
.space{
  margin: 10% 0 0 10%;
}
p{
  font-size: 15px;
}
a{
  font-weight: bolder;
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
select{
  border: 1px solid rgb(219, 219, 219);
  border-radius: 4px;
}
select:focus{
  border: 1px solid rgb(219, 219, 219);
  border-radius: 4px;
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