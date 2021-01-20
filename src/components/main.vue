<template>
    <div class="main">
    <header class="mainHeader">
      <p>date of rates <strong>{{ siglas.date }}</strong></p>
    </header>
    <div class="mainLeftPannel">
      <div class="space">
        <div class="field">
          <div class="control">
            <input type="" class="input is-medium " id="inputSize" v-model="moneyIn"
              @keyup="calculateMoneyOut" @keypress="onlyNumber">
            <div class="select is-medium" style="width: 45%;">
              <select name="moneyIn" id="moneyIn" v-model="moneyInOption" @change="calculateMoneyOut">
                <option v-for="(value, name, index) in siglas.rates" :key="index" :value="value" :moneyInOption="value"
                  v-bind:moneyInSigla="name">
                  {{currencyNames[`${name}`].name}}
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="space">

        <div class="field">
          <div class="control">
            <input type="text" class="input is-medium" id="inputSize2" v-model="moneyOut"
              @keyup="calculateMoneyIn" @keypress="onlyNumber">
            <div class="select is-medium" style="width: 45%;">
              <select name="moneyOut" id="moneyOut" v-model="moneyOutOption" @change="calculateMoneyIn">
                <option v-for="(value, name, index) in siglas.rates" :value="value" :key="index">
                  {{currencyNames[`${name}`].name}}
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>

    <img src="../assets/exchange.png" class="mainRightPannel absolute-ico" alt="">

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
        axios.get('https://gist.githubusercontent.com/Fluidbyte/2973986/raw/8bb35718d0c90fdacb388961c98b8d56abc392c9/Common-Currency.json').then(response => {
        this.currencyNames = response.data
      })
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

<style >
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
  width: 80%;
  grid-area: mainRightPannel;
  align-self: center;
  justify-self: center;
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

  width: 70%;
}
select{
  border: 1px solid rgb(219, 219, 219);
  border-radius: 4px;
}
select:focus{
  border: 1px solid rgb(219, 219, 219);
  border-radius: 4px;
}
</style>