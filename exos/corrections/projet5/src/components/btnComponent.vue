<template>
   <button @click="$emit('addBag')">{{this.value}}</button>
</template>

<script>

    export default {
        name: 'btn-component',
        data() {
            return {
                
            }
        },
        emits:['addBag'],
        props:['value'],
        methods: {
            
        }, 
    
    }
</script>

<style lang="scss" scoped>

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
</style>