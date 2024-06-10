import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
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
    changeTaskStatus: (id: string, isDone: boolean) => void
}

export const Todolist = (props: PropsType) => {

    const [newTaskTitle, setNewTaskTitle] = useState("");
    // const [taskInputError, setTaskInputError] = useState<string>|()
    const addTask = () => {
        props.addTask(newTaskTitle);
        setNewTaskTitle("");
    }

    const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => setNewTaskTitle(e.currentTarget.value);

    const keyDownAddTaskHandler = (e: KeyboardEvent<HTMLInputElement>) => e.key === "Enter" && addTask();

    return (
        <div>
            <h3>{props.title}</h3>
            <div className={"todolist"}>
                <input value={newTaskTitle}
                       onChange={onChangeTitleHandler}
                       onKeyDown={keyDownAddTaskHandler}
                />
                {/*<span className={t.isDone ? "taskComplete" : "task"}></span>*/}
                <Button title="+" onClickHandler={addTask} disabled={!newTaskTitle}/>
            </div>
            <ul>
                {
                    props.tasks.map(t => {
                            return (
                                <li key={t.id}>
                                    <input type="checkbox" checked={t.isDone} onChange={(e) => props.changeTaskStatus(t.id, e.currentTarget.checked)}/>
                                    <span>{t.title}</span>
                                    <Button title="X" onClickHandler={() => {props.removeTask(t.id)}}/>
                                </li>
                            )
                        }
                    )}
            </ul>
            <div>
                <Button  title="All" onClickHandler={() => props.changeFilter("all")}/>
                <Button  title="Active" onClickHandler={() => props.changeFilter("active")}/>
                <Button  title="Completed" onClickHandler={() => props.changeFilter("completed")}/>
            </div>
        </div>
    )
}