    <!-- <div class="container">
      <div class="column is-half is is-offset-one-quarter is-black money">
        <div class="border">
          <div class="header-money">
            <p>date of rates <strong>{{ siglas.date }}</strong></p>
          </div>
          <div class="grid-box">
            <div class="container-left">
              <div class="space">
                <input class="input is-half is-medium" id="half" v-model="moneyIn" @keyup="calculateMoneyOut">
                <select class="select is-medium" name="moneyIn" id="moneyIn" v-model="moneyInOption"
                  @change="calculateMoneyIn">
                  <option v-for="(value, name, index) in siglas.rates" :key="index" :value="value"
                    :moneyInOption="value" v-bind:moneyInSigla="name">
                    {{name}}
                  </option>
                </select>
              </div>
              <div class="space">
                <input class="input is-half is-is-inline is-medium" id="half1" v-model="moneyOut"
                  @keyup="calculateMoneyIn">
                <select class="select is-inline is-medium" name="moneyOut" id="moneyOut" v-model="moneyOutOption"
                  @change="calculateMoneyOut">
                  <option v-for="(value, name, index) in siglas.rates" :value="value" :key="index">
                    {{name}}
                  </option>
                </select>
              </div>
            </div>
            <div class="container-right">
              <img src="./assets/exchange.jpg" class="absolute-ico" alt="">
            </div>
          </div>
          <div class="footer-money">
            <p>
              current and historical foreign exchange rates published by the <a href="">European Central Bank</a>
            </p>
          </div>
        </div>
        <section class="section">
        </section>
      </div>
    </div> -->
    <template>
  <div id="app">
    <div class="container">
      <div class="column is-half is is-offset-one-quarter is-black money">
    <div class="border">
      <div class="header-money">
        <p>date of rates <strong>{{ siglas.date }}</strong></p>
      </div>
      <div class="grid-box">
              <div class="container-left">
              <div class="space">
      <input class="input is-half is-medium" id="half" v-model="moneyIn" @keyup="calculateMoneyOut" >
      <select class="select is-medium" name="moneyIn" id="moneyIn" v-model="moneyInOption" @change="calculateMoneyIn">
        <option v-for="(value, name, index) in siglas.rates" :key="index" :value="value" :moneyInOption="value" v-bind:moneyInSigla="name">
        {{name}}
        </option>
      </select>
      </div>
      <div class="space">
        <input class="input is-half is-is-inline is-medium" id="half1" v-model="moneyOut" @keyup="calculateMoneyIn">
        <select class="select is-inline is-medium" name="moneyOut" id="moneyOut" v-model="moneyOutOption" @change="calculateMoneyOut">
          <option v-for="(value, name, index) in siglas.rates" :value="value" :key="index">
            {{name}}
          </option>
        </select>
    </div>
      </div>
      <div class="container-right">
        <img src="./assets/exchange.jpg" class="absolute-ico" alt="">
      </div>
      </div>
    <div class="footer-money">
      <p>
         current and historical foreign exchange rates published by the <a href="">European Central Bank</a>
      </p>
    </div>
    </div>
     <section class="section">
  </section>
   </div>
    </div>
  </div>
</template>

<script scoped>
import axios from 'axios';
export default {
  name: 'App',
  components: {
  },
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
    }
  },
  created: function(){
    axios.get("https://api.exchangeratesapi.io/latest").then(response => {
      this.EUR = response.data
      this.siglas = response.data
      this.moneyInOption = response.data.rates.BRL
      this.moneyOutOption = response.data.rates.USD
      this.siglas.rates['EUR'] = 1
      console.log(response)
      this.calculateMoneyOut()
    })
  },
  
  methods: {
    calculateMoneyOut: function(){
      this.moneyOut = (Number(this.moneyIn) / this.moneyInOption)  / (1 / this.moneyOutOption)
      this.moneyOut = this.moneyOut.toFixed(2) 
      console.log(this.moneyOut)
    },
    calculateMoneyIn: function(){
      this.moneyIn = (Number(this.moneyOut) / this.moneyOutOption)  / (1 / this.moneyInOption)
      this.moneyIn = this.moneyIn.toFixed(2)    
    }
  },
}
</script>
<style>
*{
  margin: 0;
}

.border{
  border: 1px solid black;
  border-radius: 10px;
}
#half{
  width: 40%;
  margin-right: 5%;
}
#half1{
  width: 40%;
  margin-right: 5%;
}
.space{
  margin: 10% 10%;
  width: 180%;
  overflow: visible;
}
p{
  font-size: 100%;
}
.footer-money{
    margin: 3% 2% 2%;
}
.header-money{
  margin: 2% 2% 0%;
}
a{
  font-weight: bolder;
}
.absolute-ico{
  margin: auto auto;
  display: block;
  width: 60%;
}
.grid-box{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5%;
}
.border{
    margin-top: 22vh;
}
</style>
