import { createUserWithEmailAndPassword, signOut, updateProfile } from "firebase/auth"
import React, { createContext, useState } from "react"
import auth from "../../firebase/firebase.config"
import PropTypes from 'prop-types'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // create User
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // update User info
    const updateUserDetails = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }

    // login user
    // const 

    // log out user
    const logoutUser = () => {
        setLoading(false)
        return signOut(auth)
    }

    const authData = { createUser, loading, setLoading, user, setUser, updateUserDetails, logoutUser }
    return <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
}

export default AuthProvider

AuthProvider.propTypes = {
    children: PropTypes.node,
}