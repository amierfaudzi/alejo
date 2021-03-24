import React from 'react';
import './Users.scss';
import { gql, useQuery } from '@apollo/client';
import UserCard from '../../components/UserCard/UserCard';

const ALL_USERS = gql`
    query {
        superUsers{
        _id,
        firstName,
        lastName,
        email,
        about,
        quote,
        calendly,
        guide,
        expertise,
        location
  }
}`

export default function Users() {

    const {loading, error, data} = useQuery(ALL_USERS);

    if(data){
      console.log(data.superUsers, loading, error);
    }

    return (
        <div className="users">
            {!loading ?
            <>
                {data.superUsers.map(user => {
                    return (
                        <UserCard user={user} key={user._id}/>
                    )
                })}
            </>
            :
            "Loading"}
        </div>
    )
}
