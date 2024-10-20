
<template>
  <div class="home">
    
  <div class="product">
 
    </div>
    <div class="products">
      <div 
      class="product"
      v-for="(product, index) in this.products" :key="index"
      :class="{inBag: isInBag(product)}"
      >
        <div class="product-image" :style="{backgroundImage: 'url(' + product.image + ')'}"></div>
        <h4>{{product.title}}</h4>
        <p class="price">US$ {{product.price.toFixed(2)}}</p>

         <router-link :to="{ name: 'ProductDetails', params: { id: product.id }}" @click="s(product)">
              Voir les détails
         </router-link>
  
        <btnComponent 
        class="btn-nav btn-add" 
        v-if="!isInBag(product)" 
        @addBag="addToBag(product)" 
        value="ajouter au panier "
       ></btnComponent>
        

        <btnComponent 
        class="btn-nav btn-delete" 
        v-else @addBag="deleteProduct(product)" 
        value="Supprimer "></btnComponent>
      </div>

    </div>
  </div>

</template>

<script>
import { mapState } from 'vuex'
import btnComponent from '@/components/btnComponent.vue';
export default {
  name: 'HomePage',
  data() {
    return {
     
    }
  },
  computed: {
  maCOmputed() {
         return this.productsInBags;
  },
    ...mapState([
      'products',
      'productsInBags'
    ]),
  },

  components: {
    btnComponent
  },

  methods: {
        addToBag(product) {
          product.quantity =1
      this.$store.dispatch('addToBag', product);
        }, 
        isInBag(product) {
          return this.productsInBags.find(productInBag => productInBag.id === product.id);
        },
          storeProduct(product) {
    localStorage.setItem('selectedProduct', JSON.stringify(product));
  },
  deleteProduct(product) {
    this.$store.dispatch('removeFromBag', product.id);
    
  }
  }
}
</script>

<style lang="scss">

  .home {

    .products {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;


      .product {
        flex: 0 0 30%;
        box-sizing: border-box;  
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        padding: 16px;
        margin: 8px;
        height: 360px;

        @media only screen and (max-width: 769px) {
          flex: 0 0 40%;
        }

        @media only screen and (max-width: 640px) {
          flex: 0 0 90%;
        }

        &.inBag {
          border: 1px solid #007bff;
        }
        
        .product-image {
          margin: 20px auto;
          width: 160px;
          height: 140px;
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
        }
        h4 {
          margin: 22px auto;
          font-size: 12px;
          max-width: 60%;
          font-weight: normal;
        }

        p.price {
          font-size: 20px;
          font-weight: bold;
        }

        button {
          color: #fff;
          background-color: #007bff;
          border: 1px solid #007bff;
          border-radius: 100px;
          font-weight: 400;
          text-align: center;
          padding: 8px 16px;
          cursor: pointer;

          &:hover {
            opacity: 0.8;
          }
        }

       .btn-nav{
        margin : 0 20px;
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

  }


</style>
