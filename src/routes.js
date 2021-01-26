import Vue from 'vue'
import Router from 'vue-router'
import Main from './components/main.vue'
import Massa from './components/pages/massa.vue'
import Armazenamento from './components/pages/armazenamento.vue'
import Comprimento from './components/pages/comprimento.vue'
import Velocidade from './components/pages/velocidade.vue'
import Area from './components/pages/area.vue'
import Temperatura from './components/pages/temperatura.vue'
import Tempo from './components/pages/tempo.vue'
import Dados from './components/pages/dados.vue'
import About from './components/pages/about.vue'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/moeda',
            name: 'Conversor moeda',
            component: Main
        },
        {
            path: '/massa',
            name: `massa`,
            component: Massa
        },
        {
            path: '/armazenamento',
            name: 'Conversor armazenamento',
            component: Armazenamento
        },
        {
            path: '/comprimento',
            name: 'Conversor comprimento',
            component: Comprimento
        },
        {
            path: '/velocidade',
            name: 'Conversor velocidade',
            component: Velocidade
        },
        {
            path: '/area',
            name: 'Conversor area',
            component: Area
        },
        {
            path: '/temperatura',
            name: 'Conversor temperatura',
            component: Temperatura
        },
        {
            path: '/tempo',
            name: 'Conversor tempo',
            component: Tempo
        },
        {
            path: '/dados',
            name: 'Conversor dados',
            component: Dados
        },
        {
            path: '/',
            name: 'About',
            component: About
        }
    ]
})