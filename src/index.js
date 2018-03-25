import React from 'react';
import ReactDOM from 'react-dom';

import Comp1 from './MyComps/01-comp';
import Menu1 from './MyComps/03-bt.menu';
import Banda from './MyComps/02-pic';


const MainCont = () => {
    let myStyle ={
        backgroundColor: "lightgrey",
        width:"788px"
    }
    return (
        <div className="container" style={myStyle}>
        <Comp1 />
        <Menu1 />
        <Banda />
        <p>Dahee's</p>
        </div>
    );
}

ReactDOM.render(<MainCont />, document.getElementById('root') );