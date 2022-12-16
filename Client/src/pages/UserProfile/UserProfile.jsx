import React from 'react'
import { useRef } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Avatar from '../../components/Avatar/Avatar'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'

function UserProfile() {
    const {id} =useParams()
    const user = useSelector((state) => state.usersReducer)
    const currentProfile = user.filter((user) =>user.id ===id)
  return (
    <div className='home-container-1'>
        <LeftSidebar/>
        <div className="home-container-2">
            <section>
                <div className="user-details-container">
                    <div className="user-details">
                        <Avatar value={}>

                        </Avatar>
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}

export default UserProfile