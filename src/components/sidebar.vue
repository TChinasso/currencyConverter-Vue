<template>
    <div class="fullSide">
        <ul>
            <router-link to="/moeda">
                <li><a class="sideBarIcon" href=""><i class="fas fa-funnel-dollar"><span class="iconText">Moeda</span></i></a></li>
            </router-link>

            <router-link to="/armazenamento">
                <li><a class="sideBarIcon" href=""><i class="fas fa-hdd"><span class="iconText">Armazenamento</span></i></a></li>
            </router-link>

            <router-link to="/comprimento">
                <li><a class="sideBarIcon" href=""><i class="fas fa-arrows-alt-h"><span class="iconText">Comprimento</span></i></a></li>
            </router-link>

            <router-link to="/massa">
                <li><a class="sideBarIcon" href=""><i class="fas fa-weight"><span class="iconText">Massa</span></i></a>
                </li>
            </router-link>

            <router-link to="/velocidade">
                <li><a class="sideBarIcon" href=""><i class="fas fa-tachometer-alt"><span class="iconText">Velocidade</span></i></a></li>
            </router-link>

            <router-link to="/area">
                <li><a class="sideBarIcon" href=""><i class="fas fa-chart-area"><span class="iconText">Area</span></i></a></li>
            </router-link>

            <router-link to="/temperatura">
                <li><a class="sideBarIcon" href=""><i class="fas fa-temperature-high"><span class="iconText">Temperatura</span></i></a></li>
            </router-link>

            <router-link to="/tempo">
                <li><a class="sideBarIcon" href=""><i class="fas fa-clock"><span class="iconText">Tempo</span></i></a>
                </li>
            </router-link>

            <router-link to="/dados">
                <li><a class="sideBarIcon" href=""><i class="fas fa-network-wired"><span class="iconText">Dados</span></i></a>
                </li>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.fullSide{
    width: 30%;
    height: 100%;
    background:  #24292e;
    border-top: 0;
    overflow: hidden;
    transition: width 0.5s ease;
}
.fullSide:hover{
    width: 100%;
}
.iconText{
    color: white;
}
.fas{
    font-size: 4vh;
    background:-moz-linear-gradient(top, #21e1af 0%, #09b0e8 100%); 
        background: -webkit-linear-gradient(top, #21e1af 0%,#09b0e8 100%); 
        background: linear-gradient(to bottom, #21e1af 0%,#09b0e8 100%);
        -webkit-background-clip: text;
        -moz-background-clip: text;
        background-clip: text;
       -webkit-text-fill-color:transparent;
}
span{
    color: white;
    margin-left: 1.3vw;
    font-size: 2vh;
}
ul:first-child{
    padding-top: 5vh;
}
li{
    padding-bottom: 1vh;
    padding-top: 1vh;
}
li:hover{
    background-color:#2f353b;
}
.sideBarIcon{
    padding-left: 0.6vw;
}
</style>
