import React from 'react';

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>Nước đã sôi.</p>
    }
    return <p>Nước chưa sôi.</p>
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

class Temperature extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            temperature: event.target.value
        });
    }

    render() {
        return (
            <fieldset>
                <legend>Enter temperature in Celsius:</legend>
                <input value={this.state.temperature} onChange={this.handleChange}/>
            </fieldset>
        );
    }
}

class LiftingStateUp extends React.Component {

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default LiftingStateUp;