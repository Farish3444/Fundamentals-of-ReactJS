import React from 'react'

function MyProp(props){
    return(

    <React.Fragment>
    <h1>{props.name}, Current Salary is {props.salary}</h1>
    <MychildProp skills="ReactJS" completion='80%'/>
    <MychildProp skills="React Native" completion="20%"/>
    <MychildProp skills="Electron JS" completion='ASAP'/>
    <MychildProp skills="Node JS" completion="ASAP"/>
    <MychildProp skills="Flutter" completion="ASAP"/>
    <MychildProp skills="Python" completion='85%'/>
    </React.Fragment>

    );
}

function MychildProp(props){
    return(
        <div>
            <p>Skills -- {props.skills}</p>
            <p>Completion -- {props.completion}</p>
        </div>
    );
}


export default MyProp;