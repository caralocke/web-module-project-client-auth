import React, { useState } from 'react'

export const AddFriendForm = () => {
    const initialState = {
        name: '',
        age: '',
        email: ''
    }

    const [ newFriend, setNewFriend ] = useState(initialState)

    const handleChange = e => {

    }

    const handleSubmit = e => {
        
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input 
                type='text'
                name='name'
                value={newFriend.name}
                onChange={handleChange}
            />
            <label>Age:</label>
            <input 
                type='number'
                name='age'
                value={newFriend.age}
                onChange={handleChange}
            />
            <label>Email:</label>
            <input 
                type='email'
                name='email'
                value={newFriend.email}
                onChange={handleChange}
            />
            <button>Add New Friend</button>
        </form>
    )
}