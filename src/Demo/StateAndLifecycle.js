import React from 'react';
import '../App.css';


function Clock2(props) {
    return (
        <div>
            <h1>Demo state and lifecycle</h1>
            <h2>It is {props.date.toLocaleTimeString()}.</h2>
        </div>
    );
}

// Converting a Function to a Class
class Clock extends React.Component{
    // Thêm state vào class
    constructor(props) {
        super(props); // tương tự hàm parent trong php
        this.state = {date: new Date()};
    }

    // Thiết lập bộ đếm thời gian trong hàm componentDidMount()
    componentDidMount() {
            this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    // Xóa bộ đếm thời gian ra khỏi 1 vòng đời trong hàm componentWillUnmount()
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Demo state and lifecycle</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

export default Clock;