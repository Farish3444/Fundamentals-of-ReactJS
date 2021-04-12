import React,{ useState } from 'react';


function Hooktimer(){

    const [time, settime] = useState([date(),Time()]);

    function date(){
        return (
            new Date().toLocaleDateString()
            );
    }

    function Time(){
        return(
            new Date().toLocaleTimeString()
        );
    }
    setInterval(Time,1000);

    // function together(){
    //     settime(date(),time())
    // }


    return(
        <div>
        <h2>Hooks timer Method</h2>
        <p>{time}</p>
        </div>
    );
}

export default Hooktimer;