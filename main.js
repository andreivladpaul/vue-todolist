/* Stampiamo i numeri da 1 a 100 tramite la direttiva v-for
BONUS: stampare solo i numeri pari */
Vue.config.devtools = true;

const app = new Vue({
    el : '#root',
    
    data : {
        newToDo: "",
        toDos: [
            'fare la spesa',
            'fare compiti',
            'fare bucato'
        ]
        
    },
    methods: {
        addToDo() {
            if(this.newToDo != '') {
                this.toDos.push(this.newToDo);
                this.newToDo = ''
            }
            
        },
        removeToDo(index) {
            this.toDos.splice(index,1)
        }
    },

});
