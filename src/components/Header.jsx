import React from 'react'
import Wrapper from './Wrapper'
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <div>
        <Wrapper>
            <header>
                <img src='../src/assets/logo.png' alt='Logo'/>
            </header>
        </Wrapper>
    </div>
  )
}

export default Header