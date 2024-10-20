<template>
<div class="container">
  <ScoreBoard :winCount="this.winCount" :loseCount="this.loseCount"></ScoreBoard>
<template v-if="this.question">
    <h1 v-html=" this.question"></h1>
  <template >
    <div v-for="(answer, index) in this.answers" :key="index">
      <input 
      type="radio"
      name="option" 
      :value="answer" 
      v-model="this.chosen_answer"
      :disabled="this.submited"
      >
      <label v-html="answer"></label>
    </div>
  </template>

<button v-if="!this.submited" @click="submitAnswer()" class="send" type="button">Envoyer </button>
  </template>

<section v-if="this.submited" class="result">
<h4 v-if="this.chosen_answer == this.correct_answer">
  &#9989; Bravo vous avez trouvé la bonne réponse qui était {{ this.correct_answer }}
  </h4>  

  <h4 v-else>
  &#10060; Dommage vous avez choisi la mauvaise réponse, la bonne réponse était {{ this.correct_answer }}
  </h4>  
  <button @click="this.getNewQuestion()" type="button" class="send">Prochaine question</button>
</section>
</div>
</template>

<script>

  import ScoreBoard from '@/components/ScoreBoard.vue'

export default {
  name: 'App', 
  components: {
    ScoreBoard
  },
  data(){
    return{
      question: '',
      incorrect_answers: [],
      correct_answer: '',
      chosen_answer: '',
      submited: false,
      winCount: 0,
      loseCount: 0,
     
    }
  },
  computed: {
    answers(){
      let answers = JSON.parse(JSON.stringify(this.incorrect_answers));
      answers.splice(Math.round(Math.random() * answers.length),0 ,  this.correct_answer);
      return answers;
    }
  },
  methods:{
    submitAnswer(){
      if(!this.chosen_answer){
        this.submited = false;
        alert('Veuillez choisir une réponse'); 
        return;
      }else if (this.chosen_answer === this.correct_answer){
        
        this.submited = true;
        this.winCount++;
    }else{
     
      this.submited = true;
      this.loseCount++;
    }
    }, 
    getNewQuestion(){
      this.submited = false;
      this.chosen_answer = '';
      this.question = '';
      this.axios
      .get("https://opentdb.com/api.php?amount=1")
      .then((response) => {
        this.question = response.data.results[0].question;
        this.incorrect_answers = response.data.results[0].incorrect_answers;
        this.correct_answer = response.data.results[0].correct_answer;
      console.log(response.data.results[0]);
      })
    }
  },
 created() {
this.getNewQuestion();
 }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  max-width: 960px;

.container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 960px;
  padding: 0 15px;
  text-align: center;
  h1{
    font-size: 1.5em;
    font-weight: 400;
    margin: 0 0 40px;
  }
  input[type='radio'] {
    margin: 12px 4px;

}



}
button.send {
 
  margin-top: 15px;
  height: 40px;
  min-width: 100px;
  padding: 0 15px;
  color: #fff;
  background-color: #42b983;
  border: 1px solid #42b983;
  border-radius: 4px;
  cursor: pointer;
}
}
</style>
