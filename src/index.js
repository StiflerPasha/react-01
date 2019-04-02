import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {id: "1", msg: "Hi, how are you", like: "12"},
    {id: "2", msg: "It's my first post", like: "5"},
    {id: "3", msg: "It's my second post", like: "11"},
    {id: "4", msg: "It's my third post", like: "87"},
];

let dialogs = [
    {id: "1", name: "Pasha"},
    {id: "2", name: "Andrey"},
    {id: "3", name: "John"},
    {id: "4", name: "Sasha"},
    {id: "5", name: "Smith"},
    {id: "6", name: "Valera"},
];

let messages = [
    {id: "1", msg: "Hi"},
    {id: "2", msg: "How are you?"},
    {id: "3", msg: "Yo man!"},
];

ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

