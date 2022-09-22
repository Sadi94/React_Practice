import React from "react";
const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

export default class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        //this.state = { temperature: '' };
    }

    handleChange(e) {
        //this.setState({ temperature: e.target.value });
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        //const temperature = this.state.temperature;
        const temperature = this.props.temperature;
        const scale = this.props.scale;


        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature}
                    onChange={this.handleChange} />
            </fieldset>
        );
    }
}

//class component
//export default class TemaratureInput extends React.Component {
// state = {
//     temperature: ''
// };

// ontemperatureChange = (e) => {
//     this.setState({
//         temperature: e.target.value
//     });
// }
// render() {
//const { temperature } = this.state;
//         const { temperature, scale, ontemperatureChange } = this.props;
//         return (

//             <fieldset>
//                 <legend>Enter Temparatur in {scaleName[scale]}: </legend>
//                 <input type="text" value={temperature}
//                     onChange={ontemperatureChange} />
//             </fieldset>
//         )
//     }
// }

//function component
// export default function TemperatureInput({ temperature, scale, ontemperatureChange }) {

//     return (

//         <fieldset>
//             <legend>Enter Temparatur in {scaleName[scale]}: </legend>
//             <input type="text" value={temperature}
//                 onChange={(e) => ontemperatureChange(e, scale)} />
//         </fieldset>
//     );
// }
