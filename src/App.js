import React, {Component} from "react";
import './App.css';

import { last } from 'lodash';

class App extends Component {

    constructor(props) {
        super(props)

        this.handleAdd = this.handleAdd.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleComplete = this.handleComplete.bind(this)
        this.handleChange = this.handleChange.bind(this)

        this.state = {
            todoName: "",
            todos: [
                {
                    id: 1,
                    title: "Comprar pão",
                    completed: true
                },
                {
                    id: 2,
                    title: "Pagar o pao",
                    completed: false
                },
            ]
        }
    }

    handleAdd() {
        const {todos, todoName} = this.state
        const lastId = last(todos).id
        const newTodos = {
            id: lastId + 1,
            title: todoName,
            completed: false
        }
        this.setState(prevState => ({...prevState, todos: [newTodos, ...todos]}))
    }

    handleDelete(id) {
        const newTodos = this.state.todos.filter(item => item.id !== id)
        this.setState(prevState => ({...prevState, todos: newTodos}))
    }

    handleComplete(id) {
        const newTodos = this.state.todos.map(item => {
            if (item.id === id) {
                item.completed = true
            }
            return item
        })

        this.setState(prevState => ({...prevState, todos: newTodos}))
    }

    handleChange(e) {
        this.setState(prevState => ({...prevState, todoName: e.target.value}))
    }

    render() {

        const {todos} = this.state

        return (
            <div>
                <input type="text" value={this.state.todoName} onChange={this.handleChange}/>
                <button
                    onClick={this.handleAdd}
                >Adicionar</button>
                <ul>
                    {
                        todos.map((item) => (
                            <li>
                                <span>{item.title}</span>
                                <button
                                    onClick={() => this.handleComplete(item.id)}
                                >Completar</button>
                                <span><b>{item.completed ? 'Tarefa completa' : 'Tarefa pendente'}</b></span>
                                <button
                                    onClick={() => this.handleDelete(item.id)}
                                >Deletar
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default App;
