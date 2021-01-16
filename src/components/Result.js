import React, { useState, useEffect } from 'react';
import axios from 'axios';



const Result = () => {
    const [activity, setActivity] = useState('');

    useEffect(() => {
        data();
    },[]);

    const data = async () => {
        const resultdata = await axios.get("http://www.boredapi.com/api/activity/");
        setActivity(resultdata.data.activity);
        console.log(resultdata);
    }

    return ( 
        <div className="result">
            <h1>Random Activities</h1>
            <div className="data">
                <p>{activity}</p>
            </div>
            <button
                onClick={data}
            >Activities</button>
        </div>
     );
}
 
export default Result;

