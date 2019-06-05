import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'

import Header from './components/Header'
import Routes from './components/main/routes'

export default props => {

  return (
    <div className='App'>
      <Header />
      <Routes />
    </div>
  )
}