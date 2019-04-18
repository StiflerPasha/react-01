import React from 'react';
import classes from './Users.module.css'
import photo from '../../ava_post.jfif'

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1, photoURL: photo, followed: true, fullName: 'Pasha S.', status: 'I am a boss',
                location: {city: 'Donetsk', country: 'Ukraine'}
            },
            {
                id: 2, photoURL: photo, followed: false, fullName: 'Katya V.', status: 'Like a football',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3, photoURL: photo, followed: true, fullName: 'Abraham D.', status: 'Confused',
                location: {city: 'Paris', country: 'France'}
            }
        ]);
    }

    let user = props.users.map(u =>
        <div key={u.id}>
            <span>
                <div>
                    <img src={u.photoURL} alt='try' className={classes.userPhoto}/>
                </div>
                <div>
                    {u.followed ?
                        <button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button> :
                        <button onClick={()=>{props.follow(u.id)}}>Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
            </span>
        </div>
    );


    return (
        <div>{user}</div>
    );
};

export default Users