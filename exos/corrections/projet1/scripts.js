var products = [
    {
        "photo": "img/big-mac.png",
        "name": "Big Mac",
        "price": 5.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/mc-chicken.png",
        "name": "Mc Chicken",
        "price": 4.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/double-cb.png",
        "name": "Double Cheese Burger",
        "price": 2.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/fries.png",
        "name": "Fries",
        "price": 2.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/nuggets.png",
        "name": "Mc Nuggets",
        "price": 3.49,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/salad.png",
        "name": "Salad",
        "price": 2.79,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/cola.png",
        "name": "Coke",
        "price": 1.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/lipton.png",
        "name": "Ice Tea",
        "price": 1.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/water.png",
        "name": "Water",
        "price": 1.49,
        "active": false,
        "quantity": 1
    }
];
 

const app = Vue.createApp({

    data() {
        return {
         products : window.products,
         disableDecrementButton: false 
        }
    }, 
    methods: {
        toggleActive: function(item){
            item.active = !item.active;
            if(!item.active){
                item.quantity = 1;
            }
        },
        total: function() {
            return this.products.reduce((total, product) => {
                if (product.active) {
                    return total + parseFloat(this.productTotal(product));
                }
                return total;
            }, 0).toFixed(2);
        },
        
        totalQuantity(product) {
            return product.quantity <= 1;
        }, 
        checkIf() {
            return this.total() > 0;
        }, 
        productTotal(product) {
            return (product.price * product.quantity).toFixed(2);
        }, 
        decrementQuantity(product) {
            if (product.quantity > 1) {
              product.quantity--; 
            } else {
                this.disableDecrementButton = true; 
            }
          },
          incrementQuantity(product) {
            product.quantity++;
            this.disableDecrementButton = false; 
          },
    
    },
    computed:{
        // Exemple avec computed 
        
    // totalQuantity: function(){
    //    return function(product) {
    //       return product.quantity <= 1;
    //    }
    // }, 
    // checkIf: function(){
    //     return this.total()>0
    // }, 
    // productTotal() {
    //     return function(product) {
    //       return (product.price * product.quantity).toFixed(2);
    //     };
    // }, 
},

// Ajouter un watch pour montrer que les computed ne servent a rien ici car la prop de données est modifié à chaque action 
    watch: {
        products: {
            handler(newProducts, oldProducts) {
                console.log('La variable "products" a été modifiée :', newProducts);
               
            },
            deep: true, 
        },
    },



});
app.mount('#app');

