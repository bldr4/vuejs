
const todos=[
    {
        text:"Learn JavaScript",
        status:true
    },
    {
        text:"Learn Vue",
        status:false
    },
]
const app = Vue.createApp({
    data() {
        return {
            todos: [],
            newTodo:{
                status:false
            }
        }
    },
    methods: {
        addTodo:function(){
            if(this.newTodo.text){
            this.todos.push(this.newTodo);
            this.newTodo = {
                status:false
            };
        }else{
            alert("Please enter a todo");
        }
        },
        clearTodos:function(){
            if(confirm("Are you sure you want to delete all todos?")){
            this.todos=[];
            }
        },
        checkTodo:function(todo){
            todo.status=!todo.status;
        },
        deleteTodo: function(index) {
            const todoText = this.todos[index].text;
            if (confirm(`Voulez-vous vraiment supprimer "${todoText}" ?`)) {
            this.todos.splice(index, 1); 
            }
        }
    },
    computed: {
        hasTodos() {
            return this.todos.length > 0;
        }
    },
    watch: {
        todos: {
            handler: function (todos) {
                localStorage.setItem('todos', JSON.stringify(todos));
                console.log("updated");
            },
            deep: true
        }
    },
    created() {
        this.todos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : this.todos;
    },
})
app.mount('#app');