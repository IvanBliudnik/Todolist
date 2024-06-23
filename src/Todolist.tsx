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
    deleteAllTasks: ()=> void,
    filter: FilterValuesType,
}

export const Todolist = (props: PropsType) => {

    const [newTaskTitle, setNewTaskTitle] = useState("");
    const [error, setError] = useState<string|null>( null);
    // const [taskInputError, setTaskInputError] = useState<string>|()
    const addTask = () => {
        if (newTaskTitle.trim() !== "") {
            props.addTask(newTaskTitle.trim()); //защита от пустового добавления newTaskTitle
            setNewTaskTitle("");
        } else {
        setError("Title is required")
    }
    }

    const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => setNewTaskTitle(e.currentTarget.value);
    const keyDownAddTaskHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        e.key === "Enter" && addTask();
    }
    return (
        <div>
            <h3>{props.title}</h3>
            <div className={"todolist"}>
                <input value={newTaskTitle}
                       onChange={onChangeTitleHandler}
                       onKeyDown={keyDownAddTaskHandler}
                       className={error ? "error" : ""}
                />
                {/*<span className={t.isDone ? "taskComplete" : "task"}></span>*/}
                <Button title="+" onClickHandler={addTask} disabled={!newTaskTitle}/>
                {error && <div className="error-message">Field is required</div>}
                {/*условие для выполнение error message*/}
            </div>
            <ul>
                {
                    props.tasks.map(t => {
                            return (
                                <li key={t.id} className={t.isDone ? "is-Done" : ""}>
                                    <input type="checkbox" checked={t.isDone} onChange={(e) => props.changeTaskStatus(t.id, e.currentTarget.checked)}/>
                                    <span>{t.title}</span>
                                    <Button title="X" onClickHandler={() => {props.removeTask(t.id)}}/>
                                </li>
                            )
                        }
                    )}
            </ul>
            <div>
                <div>
                <Button title={"Delete all Tasks"} onClickHandler={()=>props.deleteAllTasks()}/>
                </div>
                <Button classes={props.filter ==="all" ? "active-filter" : ""} title="All" onClickHandler={() => props.changeFilter("all")}/>
                <Button classes={props.filter ==="active" ? "active-filter" : ""} title="Active" onClickHandler={() => props.changeFilter("active")}/>
                <Button classes={props.filter ==="completed" ? "active-filter" : ""} title="Completed" onClickHandler={() => props.changeFilter("completed")}/>
            </div>
        </div>
    )
}