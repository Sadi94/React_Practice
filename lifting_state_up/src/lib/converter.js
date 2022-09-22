export function toCelsius(Fahrenhite) {
    return ((Fahrenhite - 32) * 5) / 9;
}
export function toFahrenheit(celsious) {
    return (celsious * 9 / 5) + 32;;
}

// function toCelsius(fahrenheit) {
//     return (fahrenheit - 32) * 5 / 9;
//   }

//   function toFahrenheit(celsius) {
//     return (celsius * 9 / 5) + 32;
//   }

export function convert(temperature, convertTo) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convertTo(input);
    const rounded = Math.round(output * 1000) / 1000; //3.234; round to 3 decimal point 
    return rounded.toString();
}
