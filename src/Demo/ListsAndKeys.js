import React, {Component} from 'react';
import '../App.css';

function ListItem(props) {
    return <li>{props.value}</li>;
}

function NumberList(props) {
    const numbers = props.number;
    const listItems = numbers.map((number) =>
        <ListItem value={number}/>
    );

    return (
        <div>
            <h1>Demo list and keys</h1>
            <h3>Hiển thị các số từ list</h3>
            <ul>{listItems}</ul>
        </div>
    );
}

function Blog(props) {
    const sidebar = (
        <ul>
            {props.posts.map((post) =>
                <li key={post.id}>
                    {post.title}
                </li>
            )}
        </ul>
    );
    const content = props.posts.map((post) =>
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    );
    return (
        <div>
            <h1>Demo list and keys</h1>
            {sidebar}
            <hr />
            {content}
        </div>
    );
}

class ListsAndKeys extends Component {
    render() {
        const numbers = [1, 2, 3, 4, 5];
        return <NumberList number={numbers}/>

        // const posts = [
        //     {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
        //     {id: 2, title: 'Installation', content: 'You can install React from npm.'}
        // ];
        // return <Blog posts={posts}/>
    }
}

export default ListsAndKeys;