import React from 'react'
import HOC from '../HOC'
import './users.css'

const Users = ({data}) => {
    const renderData = data.map(user => {
        return (
            <div key={user.id} className='user-conatiner'>
                <h3>
                    Name: {user.name}
                </h3>
            </div>
        )
    })

    return (
        <div>
            {renderData}
        </div>
    )
}

const SearchUsers = HOC(Users, 'users')

export default SearchUsers;
