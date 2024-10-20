<template>

  <div class="basket">
    <div class="items" v-if="productsInBags.length">

      <div class="item" v-for="product in productsInBags" :key="product.id">
        <div class="remove" @click=" this.$store.dispatch('removeFromBag', product.id);">Remove item</div>
        <div class="photo">
          <img :src="product.image" alt=""></div>
        <div class="description">{{product.description}}</div>
        <div class="price">
          <span class="quantity-area">
            <button @click="product.quantity--" :disabled='product.quantity <= 1'>-</button>
            <span class="quantity">{{product.quantity}}</span>
            <button @click="product.quantity++">+</button>
          </span>
          <span class="amount">US$ {{product.price}}</span>
        </div>
      </div>
      <div class="grand-total"> Grand Total: US$ {{orderTotal()}}</div>

    </div>
    <div class="items" v-else>
      <div class="item2">
        Your shopping bag is empty
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'ShoppingBasket',

  methods: {
    orderTotal(){
      let total = 0;
      this.productsInBags.forEach(el => {
        total += el.price * el.quantity
      });
      return total.toFixed(2);
    },
  },
    computed: {
  maCOmputed() {
         return this.productsInBags;
  },
    ...mapState([
      'productsInBags'
    ]),
  },
 
}
</script>

<style lang="scss">

.basket {
  padding: 60px 0;  
  .items {
    max-width: 800px;
    margin: auto;
    .item {
      display: flex;
      justify-content: space-between;
      padding: 40px 0;
      border-bottom: 1px solid lightgrey;
      position: relative;

      .remove {
        position: absolute;
        top: 8px;
        right: 0;
        font-size: 11px;
        text-decoration: underline;
        cursor: pointer;
      }

      .quantity-area {
        margin: 8px auto;
        height: 14px;

        button {
          width: 16px;
          height: 16px;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }

        .quantity {

            margin: 0 4px;
        }
      }

      .photo {
        img {
          max-width: 80px;
        }
      }

      .description {
        padding-left: 30px;
        box-sizing: border-box;
        max-width: 50%;
        text-align: center;

      }

      .price {
        .amount {
          font-size: 16px;
          margin-left: 8px;
          vertical-align: middle;

        }
      }
    }
    .item2 {
      text-align: center;
      padding: 40px 0;
      border-bottom: 1px solid lightgrey;
    }
      .grand-total {
          font-size: 24px;
          font-weight: bold;
          text-align: right;
          margin-top: 8px;
      }

  }

}

</style>
