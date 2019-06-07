import React from 'react'
import {Link} from 'react-router-dom'
import {getToken, setToken} from '../../providers/storafeToken'
import './header.css'

export default props => {
    let redirect = ''
    let labelLogin = ''
    if (getToken() || !getToken() === '') {
        labelLogin = 'Logout'
        redirect = '/'
    } else {
        labelLogin = 'Login'
    }

    const logout = () => setToken('')

    return (
    <nav className="navbar navbar-dark bg-dark">
        <Link className='navbar-brand link' style={{color: 'white'}}
        to={redirect}><i className="fa fa-shopping-basket"/> Lista de Compras</Link>
        <Link className='navbar-brand link' style={{color: 'white'}}
        to={redirect+'login'} onClick={logout}><i className="fa fa-sign-in" /> {labelLogin}</Link>
    </nav>
)}