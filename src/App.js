import React, { createContext, useState } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import "./App.css"
import Admin from "./components/Admin/Admin"
import Checkout from "./components/Checkout/Checkout"
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import Login from "./components/Login/Login"
import Order from "./components/Order/Order"
import PrivateRoute from "./components/PrivateRoute/PrivateRoute"

export const UserContext = createContext()
function App() {
    const [user, setUser] = useState({
        name: null,
        email: null,
        error: null,
    })
    return (
        <UserContext.Provider value={[user, setUser]}>
            <Router>
                <Header />
                <Switch>
                    <PrivateRoute path="/admin">
                        <Admin />
                    </PrivateRoute>
                    <Route exact path="/home">
                        <Home />
                    </Route>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/order">
                        <Order></Order>
                    </Route>
                    <PrivateRoute path='/checkout/:_id'>
                        <Checkout></Checkout>
                    </PrivateRoute>
                </Switch>
            </Router>
        </UserContext.Provider>
    )
}

export default App
