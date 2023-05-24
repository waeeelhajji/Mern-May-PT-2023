import React from 'react'

const FunctionCom = (props) => {
    console.log(props)
    return (
        <>
            <h1></h1>
            <legend>FunctionCom</legend>
            <h1>{props.number}</h1>
            <h2>{props.obj.name}</h2>
            <h2>{props.obj.age}</h2>
















        </>
    )
}

export default FunctionCom