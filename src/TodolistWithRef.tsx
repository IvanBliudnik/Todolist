import React, {useRef} from 'react'
import {FilterValuesType} from "./App";
import {Button} from "./Button";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (filter: FilterValuesType) => void
    addTasks: (title: string) => void
}

export const Todolist = ({title, tasks, removeTask, changeFilter, addTasks}: TodoListPropsType) => {

        const taskInputRef = useRef<HTMLInputElement>(null);

        const addTaskHandler = () => {
            if (taskInputRef.current) {
                addTasks(taskInputRef.current.value);
                taskInputRef.current.value = '';
            }
        };

        return (
            <div>
                <h3>{title}</h3>
                <div>
                    <input ref={taskInputRef} />
                    <Button title='+' onClickHandler={addTaskHandler} />
                </div>
                {
                    tasks.length === 0
                        ? <p>Тасок нет</p>
                        : <ul>
                            {tasks.map(task => {
                                return (
                                    <li key={task.id}>
                                        <input type="checkbox" checked={task.isDone} />
                                        <span>{task.title}</span>
                                        <Button title='x' onClickHandler={() => removeTask(task.id)} />
                                    </li>
                                );
                            })}
                        </ul>
                }
                <div>
                    <Button title={'All'} onClickHandler={() => changeFilter('all')} />
                    <Button title={'Active'} onClickHandler={() => changeFilter('active')} />
                    <Button title={'Completed'} onClickHandler={() => changeFilter('completed')} />
                </div>
            </div>
        );
    }
;