import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import Friend from './Friend'
import { AddFriendForm } from './AddFriendForm'

class FriendsList extends React.Component {
    state = {
        friends: [{
            name: '',
            age:'',
            email: ''
        }]
    }

    componentDidMount() {
        this.getData()
    }

    getData = () => {
        axiosWithAuth().get('http://localhost:5000/api/friends')
            .then(res => {
                this.setState({
                    ...this.state,
                    friends: res.data
                })
                
            })
            .catch(err => {
                console.log(`Here's where you messed up:\n`, err)
            })
    }

    addFriend = (friend) => {
        axiosWithAuth().post('http://localhost:5000/api/friends', friend)
                        .then(res => {
                            this.setState({
                                ...this.state,
                                friends: res.data
                            })
                        })
                        .catch(err => {
                            console.log(`Here's where you messed up: `, err)
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
                <AddFriendForm addFriend={this.addFriend}/>
           </div> 
        )
    }
}

export default FriendsList