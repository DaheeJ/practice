import React from 'react';
import upic1 from '../img/lptt.jpg'

const Country = () => {
    let myStyle = {
        width: "100%",
        height: "auto"
    }
    return (
        <div>
            <img style={myStyle} src={upic1} alt="pic" responsive />
        </div>
    );
}



export default Country;