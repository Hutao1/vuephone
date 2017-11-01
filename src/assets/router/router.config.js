import home from  "../components/home.vue";
import about from  "../components/about.vue";
import cas from  "../components/case.vue";
import shop from  "../components/shop.vue";


const routes = [
    {path:'/home',component:home},
    {path:'/about',component:about},
    {path:'/case',component:cas},
    {path:'/shop',component:shop},
    {path:'/',redirect:'/home'}
]
export default {
    routes,mode:'history'
}