import React, {useState} from 'react'
import './Room.css';

export const Room = () => {
    const [lit, setLit] = useState(true);
    let [temp, setTemp] = useState(22);
    
    return (
        <div className="room">
            <div className={lit? 'lit' : 'dark'}>
                
                <h1>The room is {lit? 'lit' : 'dark'}</h1>
                <br/>
                <h1>The temperature is {temp}</h1>

                <br/>
                <br/>
                <div className="container">
                    <button onClick={() => setLit(true)} className="btn">Turn Light On</button>
                    <button onClick={() => setLit(false)} className="btn">Turn Light Off</button>
                    <br/>
                    <br/>
                    <button onClick={() => setTemp(temp += 1)}>Increase Temperature</button>
                    <button onClick={() => setTemp(temp -= 1)}>Decrease Temperature</button>
                </div>
            </div>
        </div>
    )
}
