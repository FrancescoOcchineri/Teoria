import React from "react";

export default function PrimoComp(props) {
    console.log(props.title)
    console.log(props.list)
    return (
        <React.Fragment>
        <h1>{props.title}</h1>
        {props.list.map(ele => <p>{ele.name} {ele.lastName} - {ele.city}</p>)}
        <p>Tot. {props.list.length}</p>
        </React.Fragment>
    )
}

/* export default PrimoComp; */