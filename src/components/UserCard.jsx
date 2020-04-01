import React from 'react';

function UserCard (props) {

        const { user } = props;
      
        return (
            <div>
                <img src= {user.avatar_url} alt="github user avatar"/> 
          </div>
        );
      };

export default UserCard;