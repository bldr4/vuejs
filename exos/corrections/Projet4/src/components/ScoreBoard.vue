<template>
    <section class="score">
        Joueur <span>{{this.winCount}}</span> X <span>{{this.loseCount}}</span> Computer
    </section>
</template>

<script>
    export default {
        props: ['winCount', 'loseCount']
        
    }
</script>

<style lang="scss" scoped>

section.score {
    display: block;
    width:100%;
border-bottom: 1px solid #000;
padding: 10px 20px;
font-size :20px;
margin:20px;
span {
    font-weight: bold;
   
    border: 1px solid #000;
    padding: 5px;
  

}
}
</style>