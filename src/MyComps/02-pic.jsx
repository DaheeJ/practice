import React from 'react';
import cantantes from '../img/link1.jpg';

let myStyle = {
    width: '100%',
    height: 'auto'
}

let myInfo = {
    padding: '3%',
    border: '1px soild black',
    marginTop: '3px'
}

const Grop1 = ()=> {
    return (
        <div>
            <img style={myStyle} src={cantantes} alt="pic1" />
            <p style={myInfo}>
            Linkin Park is an American rock band from Agoura Hills, California. 
            Formed in 1996, the band rose to international fame with their debut album Hybrid Theory (2000), 
            which was certified Diamond by the RIAA in 2005 and multi-Platinum in several other countries.
            [1] Their following studio album Meteora continued the band's success, 
            topping the Billboard 200 album chart in 2003, and was followed by extensive 
            touring and charity work.
            </p>
        </div>
    )
}
export default Grop1;