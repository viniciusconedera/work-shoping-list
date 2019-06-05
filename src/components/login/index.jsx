import React, {Component} from 'react'
import './login.css'
import {login} from '../../providers/auth'
import {setToken} from '../../providers/storafeToken'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    login = (e) => {
        e.preventDefault()
        const {email, password} = this.state
        const{history} = this.props
        if (email && password) {
            login({email, password})
            .then(response => {
                setToken(response.data.token)
                history.push('/')
            }).catch(error => alert('Email ou senha invalido'))
        } else {
            alert('Necessario preencher todos os campos')
        }
    }

    render() {
        return (
            <div className='login-box'>
                <form>
                    <h2>Login</h2><hr/>
                    <label htmlFor='email'>Email</label>
                    <input id='email' name='email' type='email' value={this.state.email}
                    className='form-control' onChange={this.handleChange}/>
                    <label htmlFor='password'>Senha</label>
                    <input id='password' name='password' type='password' value={this.state.password}
                    className='form-control' onChange={this.handleChange} />
                    <button className='btn btn-outline-primary fa fa-paper-plane-o'
                    onClick={this.login}> Enviar</button>
                </form>
            </div>
        )
    }
}

export default Login