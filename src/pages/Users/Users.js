import React from 'react';
import './Users.scss';
import { gql, useQuery } from '@apollo/client';
import UserCard from '../../components/UserCard/UserCard';

const ALL_USERS = gql`
    query {
        users{
        firstName
        lastName
        about
  }
}`

export default function Users() {

    const {loading, error, data} = useQuery(ALL_USERS, {});

    if(data){
      console.log(data.users, loading, error);
    }

    return (
        <div className="users">
            
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
        </div>
    )
}
