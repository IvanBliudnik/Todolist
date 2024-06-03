import React, {ChangeEvent, KeyboardEventHandler, useState} from 'react'
import {FilterValuesType} from "./App";
import {Button} from "./Button";


export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

// export const Todolist = (
//     {
//         title,
//         tasks,
//         removeTask,
//         changeFilter
//     }: TodolistPropsType) => {
// Деструктуризация
// }


export type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id: string) => void
    // props берёт value из removeTask и возвращает ничего (void)
    changeFilter: (value: FilterValuesType) => void
    // props берёт value из FilterValuesType и возвращает ничего (void)
    addTask: (title: string) => void
}

export const Todolist = (props: PropsType) => {

    const [newTaskTitle, setNewTaskTitle] = useState("");
    const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        {
            setNewTaskTitle(e.currentTarget.value)
        }
    }
    const onKeyPressHandler = (e: KeyboardEventHandler<HTMLInputElement>) => {
        // @ts-ignore
        if (e.charCode === 13) {
            props.addTask(newTaskTitle);
            setNewTaskTitle("")
        }
    }

    const addTask = () => {
        props.addTask(newTaskTitle);
        setNewTaskTitle("");
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={newTaskTitle}
                       onChange={onChangeTitleHandler}
                    // onKeyPress={onKeyPressHandler}
                />
                {/*добавляем функцию addTasks*/}
                <Button title="+" onClickHandler={addTask}/>
            </div>

            {/*const taskElements: Array<JSX.Element> | JSX.Element = tasks.length !== 0 ? tasks.map((task: TaskType) => {*/}
            {/*    return <li><input type="checkbox" checked={t.isDone}/> <span>{t.title}</span>*/}
            {/*    <Button title="x" onClickHandler={ () => {props.removeTask(t.id)} }/>*/}
            {/*</li>*/}
            {/*}*/}
            {/*Разобрать по повтору занятий 01 занятие 2*/}
            <ul>
                {
                    props.tasks.map(t => {
                            return <li key={t.id}><input type="checkbox" checked={t.isDone}/> <span>{t.title}</span>
                                <Button title="x" onClickHandler={() => {
                                    props.removeTask(t.id)
                                }}/>
                            </li>
                        }
                    )}
                :<span>Your TasksList is empty</span>
            </ul>
            <div>
                <Button title="All" onClickHandler={() => props.changeFilter("all")}/>
                <Button title="Active" onClickHandler={() => props.changeFilter("active")}/>
                <Button title="Completed" onClickHandler={() => props.changeFilter("completed")}/>
            </div>
        </div>
    )
}