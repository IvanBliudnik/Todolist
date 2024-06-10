import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from "uuid";

//     Пример useState на счётчике:
// export function Counter() {
//     console.log("Counter Rendered")
//     let arr = useState(1)
//     let data = arr[0]
//     let setData = arr[1]
//     return <div onClick={() => {setData(data+1)}} >{data}</div>
// }

export type FilterValuesType = "all" | "completed" | "active"
export function App() {
    const initTasks = [
        {id: v1(), title: 'HTML&CSS', isDone: true},
        {id: v1(), title: 'JS', isDone: true},
        {id: v1(), title: 'ReactJS', isDone: false},
        {id: v1(), title: 'Redux', isDone: false},
        {id: v1(), title: 'Typescript', isDone: false},
        {id: v1(), title: 'RTK Query', isDone: false},
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
    let [tasks, setTasks] = useState(initTasks)
    // задаём на выход ожидаемый tasks.filter((t=>{t.isDone === true || false}))
    let [filter, setFilter] = useState<FilterValuesType>("all")

    //какие tasks отдать в Todolist на отрисовку? => см.filter
    function removeTask(id: string) {
        // tasks.filter пропусти те initTasks id которых не равна
        //t.id которую надо удалить
        let filteredTasks = tasks.filter(t => t.id !== id)
        setTasks(filteredTasks);
    }
    function addTask(title: string) {
        let newTask = {
            id: v1(),
            title: title,
            isDone: false
        };
        let newTasks = [newTask, ...tasks];
        setTasks(newTasks);
    }
    function changeFilter(newValue: FilterValuesType) {
        setFilter(newValue)
    }
    let tasksForTodolist = tasks;
    // пропускаем те tasks у которых isDone true
    if (filter === "completed") {
        tasksForTodolist = tasks.filter(t => t.isDone)
    }
    // пропускаем те tasks у которых isDone false
    if (filter === "active") {
        tasksForTodolist = tasks.filter(t => !t.isDone)
    }
    const changeTaskStatus = (taskId: string, newIsDoneValue: boolean) => {
        const nextState: Array<TaskType> = tasks.map(t => t.id === taskId ? {...t, isDone: newIsDoneValue} : t)
        setTasks(nextState)
    }
    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={tasksForTodolist}
                        //функции callback ниже
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      changeTaskStatus={changeTaskStatus}
                      addTask={addTask}
            />
        </div>
    )
}
