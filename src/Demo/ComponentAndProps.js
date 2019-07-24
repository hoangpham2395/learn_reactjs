import React from 'react';
import '../App.css';

// ==================================================================
// Component

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

// function Paraline(props) {
//     return <h1>Hello, {props.name}</h1>;
// }

// Dùng ES6 class để định nghĩa component
class Paraline extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}

function Comment(props) {
    return (
        <div className="Comment">
            <div className="UserInfo">
                <img className="Avatar"
                     src={props.author.avatarUrl}
                     alt={props.author.name}
                     width={300}
                     height={200}
                />
                <div className="UserInfo-name">
                    {formatName(props.author)}
                </div>
            </div>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {props.date}
            </div>
        </div>
    );
}

// ===================================================================
// Props

// Không thay đổi giá trị đầu vào
function sum(a, b) {
    return a + b;
}

// Thay đổi giá trị đầu vào
function withdraw(total, amount) {
    total -= amount;
    return total;
}

// ===================================================================

class ComponentAndProps extends React.Component{
    render() {
        const user = {
            firstName: 'Hoang',
            lastName: 'Pham',
            avatarUrl: 'https://livewallpaperswide.com/wp-content/uploads/2016/11/1479129471_141_arsenal-fc-logo-wallpapers.jpg',
            text: 'I am a gunner.',
            date: '22/07/2019'
        };

        //=====================================================
        //Components

        const elementComponent = (
            <div>
                <Paraline name={'HaiND'} />
                <Paraline name={'HuyDV'} />
                <Paraline name={'HoangPH'} />
            </div>
        );

        const elementComponentComment = (
            <div className="App">
                <Comment author={user} text={user.text} date={user.date}/>
            </div>
        );


        //=====================================================
        // Props

        const elementPropsSum = (
            <div>
                Tổng của 2 và 3 là: {sum(2, 3)}
            </div>
        );

        const elementPropsWithDraw = (
            <div>
                With draw of 8 and 1: {withdraw(8, 1)}
            </div>
        );

        return elementComponentComment;
    }
}

export default ComponentAndProps;