import { createStore } from 'vuex'
import axios from 'axios';
export default createStore({
  state: {
    products: [],
    productsInBags:[],
    selectedProduct: []
  },
  getters: {
    
  },
  mutations: {
    loadProducts(state, products){

      state.products = products;
      console.log('SAlut' + state.products)
    }, 

    loadBag(state, products){
      
      state.productsInBags = products;
      },
    addToBag(state, product){
      state.productsInBags.push(product)
      localStorage.setItem('productsInBags', JSON.stringify(state.productsInBags))
    }, 
    removeFromBag(state, productId){
      state.productsInBags = state.productsInBags.filter(item => productId !== item.id )
      localStorage.setItem('productsInBags', JSON.stringify(state.productsInBags))
    }, 
   
  },
  actions: {
    loadProducts({commit}){
      axios
      .get('https://fakestoreapi.com/products')
      .then(res => {
        console.log(res);
      commit('loadProducts', res.data)

      })
    },
    loadBag({commit}){
      if (localStorage.getItem('productsInBags')){
        console.log("salut")
      commit('loadBag', JSON.parse(localStorage.getItem('productsInBags')))
      }
    },
      addToBag({commit}, product){
        commit('addToBag', product)
      }, 

      removeFromBag({commit}, productId){
        if (confirm('Voulez-vous vraiment supprimer ce produit ?')){
        commit('removeFromBag', productId)
        }

      },

},
  modules: {
  }

})
