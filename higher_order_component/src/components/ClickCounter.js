import React, { Component } from 'react'

export default class ClickCounter extends Component {

    // state = { count: 0, };

    // incrementCount = () => {
    //     this.setState((prevState) => ({ count: prevState.count + 1 }));
    // };
    render() {

        const { Counter, incrementCount } = this.props;
        return (
            <div>
                <button type="button" onClick={incrementCount}>
                    clicked {Counter} times.
                </button>
            </div>
        )
    }
}

// import withCounter from "./HOC/withCounter";

// const ClickCounter = (props) => {
//     const { count, incrementCount } = props;  //this.state
//     return (
//         <div>
//             <button type="button" onClick={incrementCount}>
//                 clicked {count} times.
//             </button>
//         </div>
//     );
// }

// export default withCounter(ClickCounter);
