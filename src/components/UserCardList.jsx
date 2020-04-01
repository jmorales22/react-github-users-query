import React from 'react';
import UserCard from './UserCard';

function UserCardList (props) {
    const {users} = props;
        
    return (
        <div>
        {users.map((user, key) => (
            <UserCard user={user} key={key}/>
        ))}
        </div>
    );
};

export default UserCardList;
