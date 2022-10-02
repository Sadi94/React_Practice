import React, { Component } from 'react'

export default class HoverCounter extends Component {

    // state = { count: 0, };

    // incrementCount = () => {
    //     this.setState((prevState) => ({ count: prevState.count + 1 }));
    // };
    render() {

        const { Counter, incrementCount } = this.props;
        return (
            <div>
                <h1 onMouseOver={incrementCount}>
                    clicked {Counter} times.
                </h1>
            </div>
        )
    }
}

// import withCounter from "./HOC/withCounter";

// const HoverCounter = (props) => {
//     const { count, incrementCount } = props;  //this.state
//     return (
//         <div>
//             <h1 onMouseOver={incrementCount}>
//                 Hovered {count} times.
//             </h1>
//         </div>
//     );
// }

//export default withCounter(HoverCounter);