<template>
  <div class="product-details" v-if="product" >
    <div class="left">
      <img class="img-product" :src="product.image" alt="">
    </div>
  <div class="right">
      <h1>{{ product.title }}</h1>
      <p class="price">US$ {{ product.price.toFixed(2) }}</p>
      <h2 class="title-description">description</h2>
      <p class="description">{{ product.description }}</p>
      <btnComponent 
      v-if="!isInBag(product)"  
      @addBag="addToBag(product); storeProduct(product)"
       value="ajouter au panier "
       class="btn-add"></btnComponent>
      <btnComponent 
      v-else  
      @addBag="deleteProduct(product)" 
      value="Supprimer "
      class="btn-add"></btnComponent>

      
  </div>
  </div>
  <div v-else>Ya un bug mon copaing</div>
</template>

<script>
import btnComponent from '@/components/btnComponent.vue';
 
export default {
  name: 'ProductDetails',
  data() {
    return {
      
      product:[],

    }
  },
  components: {
    btnComponent
  },

  computed: {
    products() {
        console.log('wxcwxcwxcwcwxc   ' + this.$store.state.products);
      return this.$store.state.products;
    },
      productsInBag() {
      return this.$store.state.productsInBags || [];
    }, 
  
  },
  methods: {
    getProductById(id) { 
       let prod= this.products.find(product => product.id == id);
        console.log('lala   ' + prod + '  ' + id);
      return prod;
    },
    addToBag(product) {
        product.quantity =1
        this.$store.dispatch('addToBag', product);
    }, 
      deleteProduct(product) {
    this.$store.dispatch('removeFromBag', product.id);
    
  },
         storeProduct(product) {
    localStorage.setItem('selectedProduct', JSON.stringify(product));
  },
      isInBag(product) {
          return this.productsInBag.find(productInBag => productInBag.id === product.id);
        },
  

  },



  created() {
    let id = this.$route.params.id;
    console.log('id' + id);
    this.product = JSON.parse(localStorage.getItem('selectedProduct'));
  },



}
</script>


<style lang="scss" scoped>
.product-details {
  display: flex;
  border: 1px solid rgb(163, 163, 163);
 


  max-width: 1000px;
  margin: 70px auto;
  padding:50px;

  position: relative;

  .left {
    width: 50%;
    position: relative;
 
    .img-product {
      width: 75%;
      height: 75%;
      margin: 20px auto;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

    }
  }
  .right {
    width: 50%;
    height: 100%;

    position: relative;


  .title-description {
    margin-top:30%;
  }
  .description {
    margin: 10px 0;
    line-height: 2.5;
  }
  .price {
    
    font-weight: bold;
    font-size: 1.2rem; 
    position: absolute;
    left: 40px;
    border: 1px solid #007bff;
    padding: 20px;
  }
  .addCard {
   

    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin : 10px 0;
 
   
  }
    .btn-add{
        background-color: #007bff;
       }
         .btn-delete{
        background-color: red;
        border: 1px solid red;
       }
  }
}

</style>