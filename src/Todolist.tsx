import React, {ChangeEvent, KeyboardEventHandler, useState} from 'react'
import {FilterValuesType} from "./App";
import {Button} from "./Button";


export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
}

export const Todolist = (props: PropsType) => {

    const [newTaskTitle, setNewTaskTitle] = useState("");

    const addTask = () => {
        props.addTask(newTaskTitle);
        setNewTaskTitle("");
    }

    const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => setNewTaskTitle(e.currentTarget.value);

    // const keyDownAddTaskHandler = (e: KeyboardEventHandler<HTMLInputElement>) => e.key === "Enter" && setNewTaskTitle();

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={newTaskTitle}
                       onChange={onChangeTitleHandler}
                       // onKeyDown={keyDownAddTaskHandler}
                />
                <Button title="+" onClickHandler={addTask} disabled = {!newTaskTitle}/>
            </div>
            <ul>
                {
                    props.tasks.map(t => {
                            return <li key={t.id}><input type="checkbox" checked={t.isDone}/> <span>{t.title}</span>
                                <Button title="X" onClickHandler={() => {
                                    props.removeTask(t.id)
                                }}/>
                            </li>
                        }
                    )}
                :<span>Your Tasks List is empty</span>
            </ul>
            <div>
                <Button title="All" onClickHandler={() => props.changeFilter("all")}/>
                <Button title="Active" onClickHandler={() => props.changeFilter("active")}/>
                <Button title="Completed" onClickHandler={() => props.changeFilter("completed")}/>
            </div>
        </div>
    )
}