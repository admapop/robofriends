import React, { Component } from 'react'

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '5px solid black', height: '565px' }} >
            {props.children}
        </div>
    ); 
}

export default Scroll;


// export default class Scroll extends Component {
//     render() {
//         return (
//             <div>
                
//             </div>
//         );
//     }
// }

