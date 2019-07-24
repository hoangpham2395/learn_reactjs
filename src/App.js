import React from 'react';
import logo from './logo.svg';
import './App.css';

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
    if (user) {
        return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Paraline.</h1>;
}

function tick() {
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    return element;
}

// ===================================================================

function App() {
    // Hello world

    const user = {
        firstName: 'Hoang',
        lastName: 'Pham',
        avatarUrl: 'https://livewallpaperswide.com/wp-content/uploads/2016/11/1479129471_141_arsenal-fc-logo-wallpapers.jpg',
        text: 'I am a gunner.',
        date: '22/07/2019'
    };

    const element = (
        <div>
            <h1>
                Hello, {formatName(user)}!
            </h1>
            <img src={user.avatarUrl} width={300} height={200}></img>
        </div>
    );

    const element1 = React.createElement(
        'h1',
        {className: 'greeting'},
        'Hello, world 1!'
    );

    // Khi chạy hàm createElement(), nó sẽ tạo ra một đối tượng như ở dưới.
    // Nếu dùng element2 để chạy thì sẽ bị lỗi.
    const element2 = {
        type: 'h1',
        props: {
            className: 'greeting',
            children: 'Hello, world 1!'
        }
    };

    return element;
    //return  getGreeting();
    // return getGreeting(user);
}

export default App;
