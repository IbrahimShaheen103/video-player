import React, { useState } from 'react';


const Title = () => {
    const [title, setTitle] = useState('');
    const [color, setColor] = useState('');

    const handelTitle = (e) => {
        setTitle(e.target.value)
    }
    const colorHandeler = e => {
        setColor(e.target.value)
    }

    return (
        <div>
            <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span 
                className="input-group-text"
                 id="inputGroup-sizing-default"
                >
                Title
                </span>
            </div>
                <input
                    type='text'
                    value={title}
                    onChange={handelTitle}
                    placeholder='Type video Title..'
                    className='form-control'
                />
                <span 
                className="input-group-text"
                 id="inputGroup-sizing-default"
                >
                <input type='color' onChange={colorHandeler} />
                </span>
            </div>




            <div style={{ color: `${color}` }} className="title-txt">
                <h2>{title}</h2>
            </div>
        </div>
    )
}
export default Title;