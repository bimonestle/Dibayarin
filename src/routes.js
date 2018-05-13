import MainPage from './components/MainPage.vue';
import BPJS from './components/BPJSKesehatanPage.vue';
import PDAM from './components/PDAMPage.vue';
import TagihanListrik from './components/TagihanListrikPage.vue';

export default [
    {path:'/', component: MainPage},
    {path:'/tagihan-listrik', component: TagihanListrik},
    {path:'/bpjs-kesehatan', component: BPJS},
    {path:'/pdam', component: PDAM}
]