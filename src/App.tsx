import React from 'react';
import './App.css';
import TodoList, {TaskType} from './TodoList';


function App() {
    //BLL:
    const todoListTitle_1 = 'What to learn';
    const todoListTitle_2 = 'What to buy';
    const tasks_1: Array<TaskType> = [
        {id: 1, isDone: true, title: 'HTML&CSS'},
        {id: 2, isDone: true, title: 'JavaScript'},
        {id: 3, isDone: false, title: 'React'},
        {id: 4, isDone: true, title: 'ReactNative'}
    ]
    const tasks_2: Array<TaskType> = [
        {id: 1, isDone: true, title: 'Milk'},
        {id: 2, isDone: false, title: 'CocaCola'},
        {id: 3, isDone: true, title: 'Burger'},
        {id: 4, isDone: false, title: 'Cigars'}
    ]

    //UI:
    return (
        <div className="App">
            <TodoList title={todoListTitle_1} tasks={tasks_1}/>
            <TodoList title={todoListTitle_2} tasks={tasks_2}/>
        </div>
    );
}

export default App;
