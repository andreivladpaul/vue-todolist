/* BONUS:
modificare la struttura dell'array dei todos. Da array di stringhe diventa array di oggetti:

Con la proprietà done colorare in verde gli <li> di tasks  che sono stati svolti, in rosso gli <li> con tasks non ancora svolti.
Al click su un <li> potremo infine modificare la proprietà done, portandola a false se era precedentemente a true e viceversa. */


Vue.config.devtools = true;

const app = new Vue({
    el : '#root',
    
    data : {
        newTask: "",
        true: 'green',
        false: 'red',
        
        tasks: [
            {
                title: 'Fare spesa',
                done: false
            },
            {
                title: 'Fare compiti',
                done: false
            },
            {
                title: 'Fare bucato',
                done: false
            }
        ]
        
    },
    methods: {
        addTask() {
            if(this.newTask != '') {
                this.tasks.push({title: this.newTask, done: false});
                this.newTask = ''
            }
            
        },
        removeTask(index) {
            this.tasks.splice(index,1)
        },
        changeColor(element,i) {
            this.tasks[i].done = !this.tasks[i].done;
        }
    },

});
