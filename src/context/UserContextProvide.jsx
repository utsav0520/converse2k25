import React, { useState } from 'react'
import UserContext from './UserContext'

function UserContextProvide({children}) {
    const [user,setUser] = useState(null);
  return (
    <UserContext.Provider value= {
        {
            user,
            setUser,
        }
    }>
        {children}
    </UserContext.Provider>      
  )
}

export default UserContextProvide
