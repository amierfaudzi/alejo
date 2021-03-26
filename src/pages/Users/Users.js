import React from 'react';
import './Users.scss';
import { gql, useQuery } from '@apollo/client';
import UserCard from '../../components/UserCard/UserCard';
import Loading from '../../assets/icons/loading.gif';

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

export default function Users({token}) {

    const {loading, error, data} = useQuery(ALL_USERS);

    return (
        <div className="users">
            {!loading ?
            <>
                {data.superUsers.map(user => {
                    return (
                        <UserCard user={user} key={user._id} token={token}/>
                    )
                })}
            </>
            :
            <img src={Loading} alt=""/>
            }
        </div>
    )
}
