import React from 'react'
import {TaskType} from "./App";

type PropsType = {
    title: string
    tasks: Array<TaskType>
    date?:string
}

export const Todolist = ({ title, tasks }: PropsType) => {
    return (
        <div>
            <h3>{title}</h3>
            {/*...*/}
            {tasks.map(task => {
                debugger
                return (
                    <li key={task.id}>
                        <input type="checkbox" checked={task.isDone} />
                        <span>{task.title}</span>
                    </li>
                )
            })}
        </div>
    )
}