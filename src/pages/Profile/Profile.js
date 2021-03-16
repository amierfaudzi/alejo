import React from 'react';
import './Profile.scss';
import { gql, useQuery } from '@apollo/client';

const SINGLE_USER_QUERY = gql`
query SingleUser($id: ID!){
  user(id: $id){
    firstName,
    lastName,
    about,
    location,
    guide,
    expertise,
    email
  }
}`

export default function Profile() {

    const {loading, error, data} = useQuery(SINGLE_USER_QUERY, {
        variables: {
        id: "604e65937c283b23f4924acb"
    }});

    if(data){
        console.log(data.user, loading, error);
      }
    
    return (
        <div className="profile">
            This is the profile
        </div>
    )
}
