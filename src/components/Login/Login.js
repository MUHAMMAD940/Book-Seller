import firebase from "firebase/app"
import "firebase/auth"
import React, { useContext } from "react"
import { useHistory, useLocation } from "react-router"
import { UserContext } from "../../App"
import { firebaseConfig } from "../firebase.config"
import "./Login.css"

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
} else {
    firebase.app()
}

const Login = () => {
    const history = useHistory()
    const location = useLocation()
    let { from } = location.state || { from: { pathname: "/" } }

    const [user, setUser] = useContext(UserContext)

    const handleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider()

        firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email } = result.user
                let newUser = { ...user }
                newUser = {
                    name: displayName,
                    email: email,
                    error: null,
                }
                setUser(newUser)
                history.replace(from)
            })

            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
                const email = error.email
                console.log(errorCode, errorMessage, email)
            })
    }

    return (
        <div className="login-area">
            <button
                onClick={handleSignIn}
                type="button"
                class="login-with-google-btn"
            >
                Sign in with Google
            </button>
        </div>
    )
}

export default Login
