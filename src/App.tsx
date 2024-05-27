import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';

//     Пример useState на счётчике:
// export function Counter() {
//     console.log("Counter Rendered")
//     let arr = useState(1)
//     let data = arr[0]
//     let setData = arr[1]
//     return <div onClick={() => {setData(data+1)}} >{data}</div>
// }

export type FilterValuesType = "all"| "completed" | "active"

function App() {
    const initTasks = [
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false},
        {id: 4, title: 'Redux', isDone: false},
        {id: 5, title: 'Typescript', isDone: false},
        {id: 6, title: 'RTK query', isDone: false},
    ]

    //Обьяснение useState как блока сохранения первоначальных данных,
    // до нажатия кнопки "x"(удалить). После его запуска он выбрасывает массив
    // в котором находятся 2 элемента [ data , () => {} ]
    // function useState2(data: any) {
    //     return [ data, () => {} ]
    // в итоге нам этот массив возвращается в таком виде:
//     let arr = useState2( [ {}, {}, {} ] );

//     let tasks = arr[0]; где [0] это первоначальный (исходный массив)

//     let setTasks = arr[1]; где [1] функция которая меняет массив
//     с новыми данными, вызывая заново отрисовку функции компонента JSX App()
//     с изменёнными и проверенными React данными

    //useState это хранилище App() его первоначальное состояние
    // let arr = useState(initTasks)
    // let tasks = arr[0];
    // let setTasks = arr[1];
// }

    //краткая форма записи useState которая выше
    let [tasks, setTasks] = useState<Array<TaskType>>(initTasks)
    // задаём на выход ожидаемый tasks.filter((t=>{t.isDone === true || false}))
    let [filter, setFilter] = useState<FilterValuesType>("all")
    function removeTask(id: number) {
        // tasks.filter пропусти те initTasks id которых не равна
        //t.id которую надо удалить
        let filteredTasks = tasks.filter(t => t.id !== id)
        setTasks(filteredTasks);
    }

    function changeFilter(value: FilterValuesType) {
        setFilter(value)
    }

    let tasksForTodolist = tasks;
    // пропускаем те tasks у которых isDone true
    if (filter === "completed") {
        tasksForTodolist = tasks.filter(t => t.isDone === true)
    }
    // пропускаем те tasks у которых isDone false
    if (filter === "active") {
        tasksForTodolist = tasks.filter(t => t.isDone === false)
    }
    return (
        <div className="App">
            <Todolist title="What to learn" tasks={tasksForTodolist}
                      //функции callback ниже
                      removeTask={removeTask}
                      changeFilter={changeFilter}
            />
        </div>
    )
}

export default App;
