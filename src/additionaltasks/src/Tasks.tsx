import React from 'react';

type DataType = {
    data1: object,
    data2: object,
}

type DataStudentsArrayProps = {
    names: string,
}

type DataTasksArrayType = {
    taskId: number,
    title: string,
    isDone: boolean,
}

type AppDataPropsType = {
    data1: { title: string,
        tasks: Array<DataTasksArrayType>,
    students: Array<DataStudentsArrayProps>,
}
    data2: { title: string,
        tasks: Array<DataTasksArrayType>},
    students: Array<DataStudentsArrayProps>,
}



export function Tasks(props:AppDataPropsType) {
    return <div>
        <ShowDatas data1 = {props.data1Value} />
    </div>
}

function ShowDatas(props:DataType) {
    return <div>
        <div>{props.data1}</div>

    </div>
}

// function TasksTitle(props:AppDataPropsType) {
//     return <div>
//         <div>{props.data1.title}</div>
//         <div>{props.data2.title}</div>
//     </div>
// }
// function TasksBody(props: DataTasksArrayType) {
//     return <div>
//         <div>{props.taskId = 1}, {props.title}, {props.isDone}</div>
//         <div>{props.taskId = 2}, {props.title}, {props.isDone}</div>
//     </div>
// }
// function Students(props:DataStudentsArrayProps) {
//     return <div>{props.names}</div>
// }