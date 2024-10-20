const app = Vue.createApp({
    data(){
        return{
        arrProd:[
            {
                nom: " prod1",
                prix: 12,
                qte: 5,
                categorie:"catégorie 1",
            },
            {
                nom: "prod2",
                prix: 12,
                qte:9,
                categorie: "catégorie 2",
            },
            
        ],

            newProd: {},

            isVisible: false,

            editProd: {},

            indexModal: -1


        }

    },

    methods:{
        addProd(){
            if(this.newProd.nom && this.newProd.prix && this.newProd.qte && this.newProd.categorie){
                this.arrProd.push(this.newProd);
                this.newProd = {};
            }
            else{
                alert("remplissez tous les champs !!!");
            }
        },

        showMod(id){
            this.isVisible = true
            this.editProd = {...this.arrProd[id]}
            this.indexModal = id
            
            
        },

        save(){
            if(this.editProd.nom && this.editProd.prix && this.editProd.qte && this.editProd.categorie){
                this.arrProd[this.indexModal] = {...this.editProd}
                this.closeModal();
            
            }
            else{
                alerte(" remplissez tout les champs !!!!")
            }
                
        },

        closeModal(){
            this.isVisible = false
        },

        deleted(indice){
            if(confirm("êtes vous sur de vouloir supprimer ce produit ??")){
                this.arrProd.splice(indice, 1)
            }
        },

        saveToLocalStorage(){
            localStorage.setItem("products", JSON.stringify(this.arrProd))
        }  
    },

    watch:{
        arrProd:{
            deep: true,
            handler(){
                this.saveToLocalStorage()
            }
        }
    },

    created(){
        let storedProducts = localStorage.getItem("products");
        if(storedProducts){
            this.arrProd = JSON.parse(storedProducts)
        }
    }

})

app.mount('#app');