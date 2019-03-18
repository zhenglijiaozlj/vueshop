import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import PreFile from '../pages/PreFile/PreFile.vue'
import Search from '../pages/Search/Search.vue'
export default[
  {
    path:'/msite',
    component:Msite
  },
  {
    path:'/order',
    component:Order
  },
  {
    path:'/prefile',
    component:PreFile
  },
  {
    path:'/search',
    component:Search
  },
  {
    path:'/',
    redirect:'/msite'
  },
]
