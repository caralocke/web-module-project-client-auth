import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import Friend from './Friend'
import { AddFriendForm } from './AddFriendForm'

class FriendsList extends React.Component {
    state = {
        friends: []
    }

    componentDidMount() {
        this.getData()
    }

    getData = () => {
        axiosWithAuth().get('http://localhost:5000/api/friends')
            .then(res => {
                console.log('FriendsList res.data:', res.data)
                this.setState({
                    ...this.state,
                    friends: res.data
                })
            })
            .catch(err => {
                console.log(`Here's where you messed up:\n`, err)
            })
    }

    render() {
        return (
           <div>
               {
                   this.state.friends.map(friend => {
                       return <Friend key={friend.id} friend={friend} />
                   })
               }
                <AddFriendForm />
           </div> 
        )
    }
}

export default FriendsList